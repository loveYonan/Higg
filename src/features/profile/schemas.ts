import { z } from "zod";
import { UserRole } from "./types";
import { UserPlan } from "../transactions/types";

export const updateProfileSchema = z.object({
  fullname: z.string().min(1, "required"),
  userId: z.string(),
  totalBalance: z.number().min(0).default(0),
  plan: z.nativeEnum(UserPlan),
  role: z.nativeEnum(UserRole),
  dailyInterest: z.number().min(0).default(0),
  totalInterest: z.number().min(0).default(0),
});
