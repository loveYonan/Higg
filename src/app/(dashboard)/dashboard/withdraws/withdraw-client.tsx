"use client"

import { z } from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import AmountInput from '@/components/amount-input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useCreateTransaction } from "@/features/transactions/api/use-create-transaction";
import { TransactionType, UserStatus } from "@/features/transactions/types";
import { useRouter } from "next/navigation";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useGetInvestments } from "@/features/investments/api/use-get-transactions";
import { Loader } from "lucide-react";



const formSchema = z.object({


    amount: z.string().min(3, "Amount is required"),
    investmentName: z.string().min(4, "Investment Name is required"),

});

export const WithdrawClient = () => {

    const { mutate, isPending } = useCreateTransaction();
    const { data: investments, isLoading } = useGetInvestments();

    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            amount: "",
            investmentName: ""
        }
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {



        mutate({ json: { status: UserStatus.PENDING, investmentName: values.investmentName, amount: values.amount, type: TransactionType.WITHDRAWAL, }, }, {
            onSuccess: () => {

                router.push("/dashboard/transactions")
            }
        })
    }

    if (isLoading) {
        return (
            <div className=' h-full flex items-center justify-center'>
                <Loader className=' size-6 animate-spin text-muted-foreground' />
            </div>
        )
    }


    return (
        <div className=' w-full h-full  flex flex-col items-center justify-center p-6 ' >

            <Card className=' text-center  bg-[#252731] border-none mt-10'>
                <CardHeader>
                    <CardTitle className=' text-white text-3xl'>
                        Withdrawal
                    </CardTitle>

                    <CardDescription className=' flex items-center justify-center max-w-md text-white font-bold'>
                        withrawal can only be initiated twice. Please, note that bonus won&apos;t be withrawable before time frame of investment and withdrawal done more than once cancel the bonus given.
                    </CardDescription>
                </CardHeader>
                <CardContent className='flex flex-col md:flex-row md:mx-auto gap-3 items-center justify-center'>
                    <Form {...form}  >
                        <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-4">

                            <FormField
                                control={form.control}
                                name='amount'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className=" font-bold text-white">Amount</FormLabel>
                                        <AmountInput
                                            {...field}
                                            disabled={isPending}
                                            placeholder="$0.00"

                                        />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="investmentName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-white">Choose Plan</FormLabel>
                                        <Select
                                            defaultValue={field.value}
                                            onValueChange={field.onChange}
                                            disabled={!investments?.documents?.length || isPending}
                                        >
                                            <FormControl>
                                                <SelectTrigger className="text-white">
                                                    <SelectValue
                                                        className="text-white"
                                                        placeholder={
                                                            investments?.documents?.length
                                                                ? "Select Investment Name"
                                                                : "No Investment Plans Available"
                                                        }
                                                    />
                                                </SelectTrigger>
                                            </FormControl>
                                            <FormMessage />
                                            <SelectContent>
                                                {investments?.documents?.length ? (
                                                    investments.documents.map((item, idx) => (
                                                        <SelectItem value={item.investmentName} key={idx}>
                                                            {item.investmentName}
                                                        </SelectItem>
                                                    ))
                                                ) : (
                                                    <div className="px-4 py-2 text-gray-500">
                                                        No available investment plans.
                                                    </div>
                                                )}
                                            </SelectContent>
                                        </Select>
                                    </FormItem>
                                )}
                            />





                            <Button className=' bg-emerald-600 w-full md:w-auto' disabled={isPending}>
                                Withdraw
                            </Button>
                        </form>
                    </Form>


                </CardContent>
            </Card>



        </div>
    )
}



