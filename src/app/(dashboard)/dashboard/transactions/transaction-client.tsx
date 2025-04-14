"use client"

import { useGetTransactions } from '@/features/transactions/api/use-get-transactions'
import { columns } from '@/features/transactions/components/columns'
import { DataTable } from '@/features/transactions/components/data-table'
import { Loader } from 'lucide-react'
import React from 'react'

export const TransactionClient = () => {


    const { data } = useGetTransactions()



    const mappedData = data?.documents.map((item) => ({
        plan: item.plan,
        date: item.$createdAt,
        dueDate: item.dueDate,
        userId: item.userId,
        amount: item.amount,
        bonus: item.bonus,
        type: item.type,
        email: item.email,
        status: item.status,
        investmentName: item.investmentName,
    }));



    return (
        <div className="container mx-auto py-10 px-2 text-white w-full">

            {
                mappedData ? (<DataTable columns={columns} data={mappedData ?? []} />) : (<div className=' h-full flex items-center justify-center'>
                    <Loader className=' size-6 animate-spin text-muted-foreground' />
                </div>)
            }


        </div>



    )
}

