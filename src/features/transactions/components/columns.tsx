"use client"

import { ColumnDef } from "@tanstack/react-table"
import { TransactionType, UserPlan, UserStatus } from "../types";
import { TaskDate } from "@/components/dashboard/task-date";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
    plan: UserPlan;
    date: string;
    dueDate: Date;
    userId: string;
    amount: number;
    email: string;
    investmentName: string,
    type: TransactionType;
    status: UserStatus;
}

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "date",
        header: "Transaction date",
        cell: ({ row }) => {
            const date = row.original.date;
            return (
                <TaskDate value={date} className=" text-sm font-medium" />
            )

        }

    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "type",
        header: "Transaction Type",
    },
    {
        accessorKey: "amount",
        header: "Amount",
    },
    {
        accessorKey: "status",
        header: "Status",
    },
    {
        accessorKey: "plan",
        header: "Plan",
    },
    {
        accessorKey: "investmentName",
        header: "Name",
    },
]
