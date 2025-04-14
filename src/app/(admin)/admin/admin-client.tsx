"use client"
import { columns } from '@/components/admin/columns'
import { DataTable } from '@/components/admin/data-table'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'


import { useGetAllTransactions } from '@/features/transactions/api/use-get-all-transactions'

import { Loader } from 'lucide-react'






export const AdminClient = () => {






    const { data: transactions, isLoading } = useGetAllTransactions();





    const modifiedtransactions = transactions?.documents.map((item) => ({
        id: item.$id,
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




    if (isLoading) {
        return (
            <div className=' max-w-screen-2xl mx-auto w-full pb-10 -mt-24'>
                <Loader className=' animate-spin size-6' />
            </div>
        )
    }



    return (
        <div className=' max-w-screen-2xl mx-auto w-full pb-10 -mt-24'>
            <Card className='border-none drop-shadow-sm'>
                <CardHeader className='gap-y-2 lg:flex-row lg:items-center lg:justify-between'>
                    <CardTitle className=' text-xl line-clamp-1 text-blue-900'>
                        Transactions
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    {
                        !transactions?.documents.length ? (<div className=' h-full w-full flex items-center justify-center'>
                            <p>No Transaction at the moment</p>
                        </div>) : (<DataTable columns={columns} data={modifiedtransactions ?? []} filterKey='email' disabled={isLoading} onDelete={() => { }} />)
                    }

                </CardContent>
            </Card>

        </div>

    )
}

