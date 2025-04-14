import { Models } from "node-appwrite";

export enum UserStatus {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  CANCELLED = "CANCELLED",
}

export enum InvestmentStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

export enum TransactionType {
  DEPOSIT = "DEPOSIT",
  WITHDRAWAL = "WITHDRAWAL",
}

export enum UserPlan {
  HALFYEAR = "HALFYEAR",
  YEARLY = "YEARLY",
}

export type Deposit = Models.Document & {
  status: UserStatus;
  paymentDate: string;
  investDate: string;
  type: TransactionType;
  plan: UserPlan;
  dueDate: string;
  amount: number;
};
