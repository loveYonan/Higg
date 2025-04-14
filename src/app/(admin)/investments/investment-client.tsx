"use client"
import { DataTable } from '@/components/admin/data-table'
import { columns } from '@/components/investment/columns'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useGetAllInvestments } from '@/features/investments/api/use-get-all-investments'




import { Loader } from 'lucide-react'






export const InvestmentClient = () => {






    const { data: investments, isLoading } = useGetAllInvestments();







    const modifiedinvestments = investments?.documents.map((item) => ({
        id: item.$id,
        plan: item.plan,
        email: item.email,
        date: item.$createdAt,
        dueDate: item.investmentDueDate,
        userId: item.userId,
        amount: item.amountInvested,
        balance: 0,
        bonus: item.bonus,
        type: item.investmentType,
        transactionId: item.transactionId,
        status: item.status,
        withdrawalAttempt: item.withrawal_attempt,
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
                        Investments
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    {
                        !investments?.documents.length ? (<div className=' h-full w-full flex items-center justify-center'>
                            <p>No Investment at the moment</p>
                        </div>) : (<DataTable columns={columns} data={modifiedinvestments ?? []} filterKey='email' disabled={isLoading} onDelete={() => { }} />)
                    }

                </CardContent>
            </Card>

        </div>

    )
}

