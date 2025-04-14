"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { cn, formatCurrency } from "@/lib/utils";
import { UserAction } from "./user-actions";
import { TransactionType, UserPlan, UserStatus } from "@/features/transactions/types";
import { TaskDate } from "../dashboard/task-date";




export type Transactions = {
    id: string;
    email: string
    plan: UserPlan;
    date: string;
    dueDate: string;
    userId: string;
    amount: number;
    type: TransactionType;
    status: UserStatus;
    investmentName: string;
}



export const columns: ColumnDef<Transactions>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "date",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    className="text-black hover:bg-white"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Transaction Date
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const date = row.original.date;
            return (
                <TaskDate value={date} className=" text-sm font-medium" />
            )

        }
    },
    {
        accessorKey: "email",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    className="text-black hover:bg-white"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Email
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        }
    },
    {
        accessorKey: "amount",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    className="text-black hover:bg-white"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Amount
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const amount = row.original.amount;
            return formatCurrency(amount)

        }
    },
    {
        accessorKey: "status",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    className="text-black hover:bg-white"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Status
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const status = row.original.status;
            return (
                <div className=" flex items-center gap-x-2 text-sm font-medium">
                    <div className={cn(" rounded-full size-4", status === UserStatus.APPROVED && "bg-green-600", status === UserStatus.CANCELLED && "bg-red-600", status === UserStatus.PENDING && "bg-yellow-600")} />
                    <p className=" line-clamp-1">{status} </p>
                </div>
            )

        }
    },
    {
        accessorKey: "dueDate",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    className="text-black hover:bg-white"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Due  Date
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const date = row.original.dueDate;
            return (
                date ? (<TaskDate value={date} className=" text-sm font-medium" />) : ("NIL")

            )

        }
    },
    {
        accessorKey: "investmentName",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    className="text-black hover:bg-white"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        }
    },
    {
        accessorKey: "type",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    className="text-black hover:bg-white"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Type
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        }
    },
    {
        accessorKey: "plan",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    className="text-black hover:bg-white"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Plan
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        }
    },



    {
        id: "actions",
        cell: ({ row }) => {
            const id = row.original.id;
            return (
                <UserAction id={id} >
                    <Button className="size-8 p-0 text-black hover:bg-white">
                        <MoreHorizontal className=" size-4" />
                    </Button>
                </UserAction>
            )
        }
    },

];