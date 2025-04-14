import { z } from "zod";
import { TransactionType, UserPlan, UserStatus } from "./types";

export const createTransactionSchema = z.object({
  plan: z.nativeEnum(UserPlan).optional(),
  type: z.nativeEnum(TransactionType),
  amount: z.string().min(3),
  investmentName: z.string().min(3),
  investDay: z
    .preprocess((val) => {
      if (typeof val === "string" || val instanceof Date) {
        return new Date(val); // Convert string or Date to Date object
      }
      return val;
    }, z.date())
    .optional(),
  status: z.nativeEnum(UserStatus).optional(),
});

export const updateTransactionSchema = z.object({
  userId: z.string().optional(),
  plan: z.nativeEnum(UserPlan).optional(),
  type: z.nativeEnum(TransactionType).optional(),
  dueDate: z.date().optional(),
  amount: z.string().min(3).optional(),
  status: z.nativeEnum(UserStatus),
});
