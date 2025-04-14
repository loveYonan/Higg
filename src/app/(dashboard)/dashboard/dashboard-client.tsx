"use client"


import { Button } from "@/components/ui/button";
import Greeting from "@/features/dashboard/components/greetings";
import { useGetInvestments } from "@/features/investments/api/use-get-transactions";
import { calculateDailyInterest, formatCurrency } from "@/lib/utils";
import { Loader, PlusIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Models } from "node-appwrite";

import { DottedSeparator } from "@/components/dotted-separator";

import { OverviewProperties } from "@/components/dashboard/overview-property";

import { TaskDate } from "@/components/dashboard/task-date";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { calculateCompoundedBalance, calculateInterestOnly } from "@/features/transactions/utils";

interface ProfileClientProps {
    user: Models.User<Models.Preferences> | null
}

export const DashboardClient = ({ user }: ProfileClientProps) => {



    const { data: investments, isLoading } = useGetInvestments();
    const router = useRouter();

    const [totalBalanceSum, setTotalBalanceSum] = useState(0);

    useEffect(() => {
        if (investments?.documents) {
            const sum = investments.documents.reduce((acc, investment) => {
                // const interest = calculateInterestOnly(investment.amountInvested, new Date(investment.investmentDate)); 
                const balance = calculateCompoundedBalance(investment.amountInvested, new Date(investment.investmentDate));
                return acc + balance;
            }, 0);
            setTotalBalanceSum(sum + 5000);
        }
    }, [investments]);

    if (isLoading) {
        return (
            <div className=' h-full flex items-center justify-center'>
                <Loader className=' size-6 animate-spin text-muted-foreground' />
            </div>
        )
    }





    return (
        <div className=" w-full h-full flex items-center justify-center py-6">
            <div className=" flex  flex-col w-full px-2 lg:px-36 ">


                <div className=" flex flex-col items-center justify-center p-4 text-white">
                    <p className=" text-white text-xl lg:text-3xl font-bold">Hello, <span className=" inline-flex"> <Greeting /></span> </p>
                    <div className="flex gap-x-2">
                        <p className=" text-2xl font-bold text-white capitalize">{user?.name} </p>
                        <Image src="/verified.svg" alt="gun" width={20} height={20} />
                    </div>

                </div>
                <div className=" flex items-center justify-between p-2">
                    <p className=" py-2 text-xl font-bold items-center text-white truncate">Investments Overview</p>
                    <div className=" flex items-center text-xl justify-center gap-x-2 text-white font-bold">
                        <p className="">Total Balance: <span className="text-blue-600 "> {formatCurrency(totalBalanceSum)}</span></p>
                        <p>Referer Bonus: <span className="text-red-600"> {formatCurrency(5000)}</span></p>
                    </div>
                </div>


                <div className=" flex flex-col gap-y-4 col-span-1 w-full  ">
                    <div className=" bg-[#232325] rounded-lg p-4 ">
                        <div className=" flex items-center justify-between">
                            <p className=" text-lg font-semibold text-white">
                                Investment ({investments?.total})
                            </p>
                            <Button variant="muted" size="icon" asChild>
                                <Link href="/dashboard/invest">
                                    <PlusIcon className=" size-4  text-[#19191C]" />
                                </Link>

                            </Button>
                        </div>
                        <DottedSeparator className=" my-4" />
                        <ul className=" flex flex-col gap-y-4">
                            {
                                investments?.documents.map((investment) => {
                                    const interest = calculateInterestOnly(investment.amountInvested, new Date(investment.investmentDate));
                                    const totalBalance = interest + investment.amountInvested;
                                    const dailyInterest = calculateDailyInterest(totalBalance);

                                    return (
                                        <li key={investment.$id}>

                                            <div className=" flex flex-col gap-y-4 col-span-1 ">
                                                <div className=" bg-[#19191C] rounded-lg p-4">
                                                    <div className=" flex items-center justify-between">
                                                        <p className=" text-lg font-semibold text-white">
                                                            Overview
                                                        </p>

                                                    </div>
                                                    <DottedSeparator className=" my-4" />
                                                    <div className=" flex flex-col gap-y-4">
                                                        <OverviewProperties label=" Name">
                                                            <p className=" text-sm font-medium text-white">{investment.investmentName} </p>
                                                        </OverviewProperties>
                                                        <OverviewProperties label=" Total Balance">

                                                            <p className=" text-base font-bold text-blue-600"> {formatCurrency(totalBalance)} </p>
                                                        </OverviewProperties>
                                                        <OverviewProperties label=" Amount Invested">

                                                            <p className=" text-sm font-medium text-green-600"> {formatCurrency(investment.amountInvested)} </p>
                                                        </OverviewProperties>

                                                        <OverviewProperties label=" Daily Interest">

                                                            <p className=" text-sm font-medium text-green-600"> {formatCurrency(dailyInterest)} </p>
                                                        </OverviewProperties>

                                                        <OverviewProperties label=" Plan">

                                                            <p className=" text-sm font-medium text-white"> {investment.plan} </p>
                                                        </OverviewProperties>
                                                        <OverviewProperties label="Due Date">
                                                            <TaskDate value={investment.investmentDueDate} className=" text-sm font-medium" />
                                                        </OverviewProperties>
                                                        <OverviewProperties label="Status">
                                                            <Badge variant={investment.status} >
                                                                {investment.status}
                                                            </Badge>
                                                        </OverviewProperties>
                                                    </div>
                                                </div>
                                            </div>

                                        </li>
                                    )
                                })
                            }
                            <li className=" text-sm text-muted-foreground text-center hidden first-of-type:block">
                                Please check <span onClick={() => router.push("/dashboard/transactions")} className="  underline cursor-pointer">Transactions</span> for Pending Investments
                            </li>

                        </ul>
                    </div>
                </div>



            </div>

        </div>
    )
}
