import { sessionMiddleware } from "@/lib/session-middleware";
import { Hono } from "hono";
import { getProfile } from "../utils";
import { UserRole } from "../types";
import { DATABASE_ID, OWNER_ID, PROFILE_ID } from "@/config";
import { updateProfileSchema } from "../schemas";
import { zValidator } from "@hono/zod-validator";
import { Query } from "node-appwrite";

const app = new Hono()
  .get("/", sessionMiddleware, async (c) => {
    const databases = c.get("databases");
    const user = c.get("user");

    const profile = await getProfile({
      databases,
      userId: user.$id,
    });

    return c.json({
      data: profile,
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

    const profiles = await databases.listDocuments(DATABASE_ID, PROFILE_ID, [
      Query.equal("owner_id", OWNER_ID!),
      Query.orderDesc("$createdAt"),
    ]);

    return c.json({
      data: profiles,
    });
  })
  .patch(
    "/:profileId",
    sessionMiddleware,
    zValidator("form", updateProfileSchema),
    async (c) => {
      const databases = c.get("databases");
      const user = c.get("user");

      const { profileId } = c.req.param();
      const { fullname, totalBalance, plan, dailyInterest, totalInterest } =
        c.req.valid("form");

      const profile = await getProfile({
        databases,
        userId: user.$id,
      });

      if (!profile) {
        return c.json({ error: "Unauthorized: Profile not found" }, 400);
      }

      if (profile.role !== UserRole.ADMIN && profile.id !== profileId) {
        return c.json({ error: "Unauthorized: Access denied" }, 400);
      }

      const updatedProfile = await databases.updateDocument(
        DATABASE_ID,
        PROFILE_ID,
        profileId,
        {
          fullname,
          plan,
          totalBalance,
          dailyInterest,
          totalInterest,
        }
      );

      return c.json({ data: updatedProfile });
    }
  )

  .delete("/:profileId", sessionMiddleware, async (c) => {
    const databases = c.get("databases");
    const user = c.get("user");
    const { profileId } = c.req.param();

    const profile = await getProfile({
      databases,
      userId: user.$id,
    });

    if (!profile || profile.role !== UserRole.ADMIN) {
      return c.json({ error: "Unauthorized" }, 400);
    }

    await databases.deleteDocument(DATABASE_ID, PROFILE_ID, profileId);

    return c.json({ data: { $id: profileId } });
  });

export default app;
