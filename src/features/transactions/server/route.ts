import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { sessionMiddleware } from "@/lib/session-middleware";
import {
  DATABASE_ID,
  TRANSACTION_ID,
  PROFILE_ID,
  INVESTMENT_ID,
  OWNER_ID,
} from "@/config";
import { ID, Query } from "node-appwrite";

import { getProfile } from "@/features/profile/utils";
import { createTransactionSchema, updateTransactionSchema } from "../schemas";
import {
  InvestmentStatus,
  TransactionType,
  UserPlan,
  UserStatus,
} from "../types";
import { UserRole } from "@/features/profile/types";

import { calculateInterestOnly, calculateReturnDay } from "../utils";
import { calculateTotalInterest } from "@/lib/utils";

const app = new Hono()
  .get("/", sessionMiddleware, async (c) => {
    const databases = c.get("databases");
    const user = c.get("user");

    const transactions = await databases.listDocuments(
      DATABASE_ID,
      TRANSACTION_ID,
      [Query.equal("userId", user.$id), Query.orderDesc("$createdAt")]
    );

    return c.json({ data: transactions });
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

    const transactions = await databases.listDocuments(
      DATABASE_ID,
      TRANSACTION_ID,
      [Query.equal("owner_id", OWNER_ID), Query.orderDesc("$createdAt")]
    );

    return c.json({ data: transactions });
  })
  .get("/:transactionId", sessionMiddleware, async (c) => {
    const databases = c.get("databases");
    const { transactionId } = c.req.param();

    const user = c.get("user");

    if (!user) {
      return c.json({ error: "Unauthorized" }, 400);
    }

    const transaction = await databases.getDocument(
      DATABASE_ID,
      TRANSACTION_ID,
      transactionId
    );

    return c.json({ data: transaction });
  })
  .get("/approved", sessionMiddleware, async (c) => {
    const databases = c.get("databases");
    const user = c.get("user");

    if (!user) {
      return c.json({ error: "Unauthorized" }, 400);
    }

    const transactions = await databases.listDocuments(
      DATABASE_ID,
      TRANSACTION_ID,
      [
        Query.equal("status", UserStatus.APPROVED),
        Query.equal("userId", user.$id),
        Query.orderDesc("$createdAt"),
      ]
    );

    return c.json({ data: transactions });
  })
  .post(
    "/",
    zValidator("json", createTransactionSchema),
    sessionMiddleware,
    async (c) => {
      const databases = c.get("databases");
      const user = c.get("user");

      const { amount, plan, investDay, status, type, investmentName } =
        c.req.valid("json");

      const newAmount = parseFloat(amount);

      let dueDate;

      if (investDay && plan) {
        dueDate = calculateReturnDay(investDay, plan);
      }

      // const bonus = newAmount * bonusRate;

      if (type === TransactionType.WITHDRAWAL) {
        const investments = await databases.listDocuments(
          DATABASE_ID,
          INVESTMENT_ID,
          [Query.equal("investmentName", investmentName)]
        );

        const investment = investments.documents[0];

        if (!investment) {
          return c.json(
            { error: "No available investment to make withdrawal" },
            400
          );
        }

        if (investment.withrawal_attempt < 1) {
          const interest = calculateTotalInterest(
            investment.amountInvested,
            new Date(investment.investmentDate)
          );
          const totalBalance = interest + investment.amountInvested;
          if (totalBalance < newAmount) {
            return c.json(
              { error: "You dont have enough balance to make withdrawal" },
              400
            );
          }

          const transaction = await databases.createDocument(
            DATABASE_ID,
            TRANSACTION_ID,
            ID.unique(),
            {
              userId: user.$id,
              amount: newAmount,
              plan: investment.plan,
              status,
              email: user.email,
              type,
              investmentName,
              owner_id: OWNER_ID,
            }
          );

          return c.json({ data: transaction });
        }

        const currentDate = new Date();
        const investmentDueDate = new Date(investment.investmentDueDate);

        if (investmentDueDate > currentDate) {
          return c.json(
            { error: "The due date has not arrived yet for withdrawal" },
            400
          );
        }
      }

      const transaction = await databases.createDocument(
        DATABASE_ID,
        TRANSACTION_ID,
        ID.unique(),
        {
          userId: user.$id,
          amount: newAmount,
          plan,
          investDay: type === TransactionType.DEPOSIT ? investDay : null,
          status,
          dueDate: type === TransactionType.DEPOSIT ? dueDate : null,
          email: user.email,
          type,
          investmentName,
          owner_id: OWNER_ID,
        }
      );

      const profile = await getProfile({
        databases,
        userId: user.$id,
      });

      if (!profile) {
        await databases.createDocument(DATABASE_ID, PROFILE_ID, ID.unique(), {
          userId: user.$id,
          fullName: user.name,
          role: UserRole.USER,
          email: user.email,
          owner_id: OWNER_ID,
        });
      }

      return c.json({ data: transaction });
    }
  )
  .patch(
    "/:transactionId",
    sessionMiddleware,
    zValidator("form", updateTransactionSchema),
    async (c) => {
      const databases = c.get("databases");
      const user = c.get("user");

      const { transactionId } = c.req.param();
      const { status } = c.req.valid("form");

      const currentProfile = await getProfile({
        databases,
        userId: user.$id,
      });

      if (!currentProfile || currentProfile.role !== UserRole.ADMIN) {
        return c.json({ error: "Unauthorized" }, 401);
      }

      const transaction = await databases.getDocument(
        DATABASE_ID,
        TRANSACTION_ID,
        transactionId
      );

      if (!transaction || transaction.status === UserStatus.APPROVED) {
        return c.json({ error: "Unauthorized" }, 401);
      }

      if (status === UserStatus.CANCELLED) {
        await databases.updateDocument(
          DATABASE_ID,
          TRANSACTION_ID,
          transaction.$id,
          {
            status: UserStatus.CANCELLED,
          }
        );
        return c.json({ error: "Cancelled" }, 401);
      }

      if (
        status === UserStatus.APPROVED &&
        transaction.type === TransactionType.DEPOSIT
      ) {
        await databases.createDocument(
          DATABASE_ID,
          INVESTMENT_ID,
          ID.unique(),
          {
            email: transaction.email,
            userId: transaction.userId,
            amountInvested: transaction.amount,
            investmentDate: transaction.investDay,
            investmentDueDate: transaction.dueDate,
            investmentType: transaction.type,
            investmentName: transaction.investmentName,
            transactionId: transaction.$id,
            plan: transaction.plan,
            status: InvestmentStatus.ACTIVE,
            owner_id: OWNER_ID,
          }
        );
      }

      if (
        status === UserStatus.APPROVED &&
        transaction.type === TransactionType.WITHDRAWAL
      ) {
        const investments = await databases.listDocuments(
          DATABASE_ID,
          INVESTMENT_ID,
          [Query.equal("investmentName", transaction.investmentName)]
        );

        const investment = investments.documents[0];

        if (!investment) {
          return c.json(
            { error: "No available investment to make withdrawal" },
            400
          );
        }

        if (investment.withrawal_attempt <= 1 && transaction.amount) {
          const interest = calculateTotalInterest(
            investment.amountInvested,
            new Date(investment.investmentDate)
          );
          const totalBalance = interest + investment.amountInvested;
          console.log({ totalBalance });

          if (totalBalance < transaction.amount) {
            return c.json(
              { error: "No enough balance to make withdrawal" },
              400
            );
          }

          const updatedBalance = totalBalance - transaction.amount;
          const updatedWithdrawAttempt = investment.withrawal_attempt + 1;

          console.log({ updatedWithdrawAttempt });

          const newInvest = await databases.updateDocument(
            DATABASE_ID,
            INVESTMENT_ID,
            investment.$id,
            {
              amountInvested: updatedBalance,
              withrawal_attempt: updatedWithdrawAttempt,
            }
          );

          console.log({ newInvest });
        } else if (investment.withrawal_attempt >= 2 && transaction.amount) {
          const currentDate = new Date();
          const investmentDueDate = new Date(investment.investmentDueDate);

          if (investmentDueDate > currentDate) {
            return c.json(
              { error: "The due date has not arrived yet for withdrawal" },
              400
            );
          }
          //calculate the compound interest of the investment
          let investmentDays;
          if (investment.investmentType === UserPlan.HALFYEAR) {
            investmentDays = 180;
          } else if (investment.investmentType === UserPlan.YEARLY) {
            investmentDays = 365;
          }

          if (!investmentDays) {
            return c.json({ error: "No investment days" }, 401);
          }

          const compoundInterest = calculateInterestOnly(
            investment.amountInvested,
            new Date(investment.investmentDate)
          );

          if (compoundInterest < transaction.amount) {
            return c.json({ error: "insufficient funds" }, 401);
          }

          const updatedAmmountInvested = compoundInterest - transaction.amount;

          await databases.updateDocument(
            DATABASE_ID,
            INVESTMENT_ID,
            investment.$id,
            {
              amountInvested: updatedAmmountInvested,
              status: InvestmentStatus.INACTIVE,
            }
          );
        }
      }

      await databases.updateDocument(
        DATABASE_ID,
        TRANSACTION_ID,
        transaction.$id,
        {
          status: UserStatus.APPROVED,
        }
      );

      return c.json({ data: transactionId });
    }
  )

  .delete("/:transactionId", sessionMiddleware, async (c) => {
    const databases = c.get("databases");
    const user = c.get("user");
    const { transactionId } = c.req.param();

    const profile = await getProfile({
      databases,
      userId: user.$id,
    });

    if (!profile || profile.role !== UserRole.ADMIN) {
      return c.json({ error: "Unauthorized" }, 400);
    }

    await databases.deleteDocument(DATABASE_ID, TRANSACTION_ID, transactionId);

    return c.json({ data: { $id: transactionId } });
  });

export default app;
