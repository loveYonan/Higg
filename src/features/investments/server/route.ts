import { sessionMiddleware } from "@/lib/session-middleware";
import { Hono } from "hono";

import { DATABASE_ID, INVESTMENT_ID, OWNER_ID } from "@/config";

import { Query } from "node-appwrite";
import { getProfile } from "@/features/profile/utils";
import { UserRole } from "@/features/profile/types";
import { InvestmentStatus } from "@/features/transactions/types";

const app = new Hono()
  .get("/", sessionMiddleware, async (c) => {
    const databases = c.get("databases");
    const user = c.get("user");

    const investments = await databases.listDocuments(
      DATABASE_ID,
      INVESTMENT_ID,
      [Query.equal("userId", user.$id), Query.orderDesc("$createdAt")]
    );

    return c.json({
      data: investments,
    });
  })
  .get("/all", sessionMiddleware, async (c) => {
    const databases = c.get("databases");
    const user = c.get("user");

    const profile = await getProfile({
      databases,
      userId: user.$id,
    });

    if (!profile) {
      return c.json({ error: "Unauthorized" }, 400);
    }

    if (profile.role !== UserRole.ADMIN) {
      return c.json({ error: "Unauthorized" }, 401);
    }

    const investments = await databases.listDocuments(
      DATABASE_ID,
      INVESTMENT_ID,
      [Query.equal("owner_id", OWNER_ID!), Query.orderDesc("$createdAt")]
    );

    return c.json({
      data: investments,
    });
  })
  .patch("/:investmentId", sessionMiddleware, async (c) => {
    const databases = c.get("databases");
    const user = c.get("user");

    const { investmentId } = c.req.param();

    const profile = await getProfile({
      databases,
      userId: user.$id,
    });

    if (!profile) {
      return c.json({ error: "Unauthorized: Profile not found" }, 400);
    }

    if (profile.role !== UserRole.ADMIN) {
      return c.json({ error: "Unauthorized: Access denied" }, 400);
    }

    const investment = await databases.getDocument(
      DATABASE_ID,
      INVESTMENT_ID,
      investmentId
    );

    if (!investment) {
      return c.json({ error: "No investment found" }, 400);
    }

    const updateInvestment = await databases.updateDocument(
      DATABASE_ID,
      INVESTMENT_ID,
      investmentId,
      {
        status:
          investment.status === InvestmentStatus.ACTIVE
            ? InvestmentStatus.INACTIVE
            : InvestmentStatus.ACTIVE,
      }
    );

    return c.json({ data: updateInvestment });
  })

  .delete("/:investmentId", sessionMiddleware, async (c) => {
    const databases = c.get("databases");
    const user = c.get("user");
    const { investmentId } = c.req.param();

    const profile = await getProfile({
      databases,
      userId: user.$id,
    });

    if (!profile || profile.role !== UserRole.ADMIN) {
      return c.json({ error: "Unauthorized" }, 400);
    }

    await databases.deleteDocument(DATABASE_ID, INVESTMENT_ID, investmentId);

    return c.json({ data: { $id: investmentId } });
  });

export default app;
