"use client"
import { DottedSeparator } from '@/components/dotted-separator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CryptoOption } from '@/types';
import { QRCodeCanvas } from 'qrcode.react';
import { z } from "zod";
import { FormControl, FormField, FormItem, FormLabel, FormMessage, Form, FormDescription } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useRouter } from 'next/navigation';
import { TransactionType, UserPlan, UserStatus } from '@/features/transactions/types';
import { useCreateTransaction } from '@/features/transactions/api/use-create-transaction';
import { createTransactionSchema } from '@/features/transactions/schemas';
import AmountInput from '@/components/amount-input';
import { Input } from '@/components/ui/input';
import { generateUniqueCode } from '@/features/transactions/utils';
import { MessageCircleWarning } from 'lucide-react';



interface DepositPopupProps {
    crypto: CryptoOption;
    onClose: () => void;
}

const DepositPopup: React.FC<DepositPopupProps> = ({ crypto, onClose }) => {

    const { mutate, isPending } = useCreateTransaction();

    const router = useRouter();


    const form = useForm<z.infer<typeof createTransactionSchema>>({
        resolver: zodResolver(createTransactionSchema.omit({ investDay: true, status: true, type: true, })),
        defaultValues: {
            plan: UserPlan.HALFYEAR,
            amount: "",
        }
    })

    const onSubmit = async (values: z.infer<typeof createTransactionSchema>) => {

        const investDay = new Date();
        const refractoredName = generateUniqueCode(values.investmentName)
        mutate({ json: { amount: values.amount, investmentName: refractoredName, investDay: investDay, status: UserStatus.PENDING, type: TransactionType.DEPOSIT, plan: values.plan }, }, {
            onSuccess: () => {

                router.push("/dashboard/transactions")
            }
        })
    }


    const handleCopyAddress = () => {
        navigator.clipboard.writeText(crypto.address);
        alert('Wallet address copied to clipboard!');
    };



    return (

        <Card className=" w-full h-full border-none shadow-none bg-[#F5F5F5]">
            <CardHeader className=" flex p-7">
                <CardTitle className=" text-xl font-bold">
                    Deposit {crypto.name}
                </CardTitle>
                <CardDescription className=' rounded-md bg-yellow-800 p-2 flex items-center justify-center text-yellow-400 '>
                    <MessageCircleWarning className=" size-10 text-yellow-400 mr-3" />
                    {crypto.warning}
                </CardDescription>
            </CardHeader>
            <div className=" px-7">
                <DottedSeparator />
            </div>
            <CardContent className=" p-7">
                <div className="flex justify-center mb-4">
                    <QRCodeCanvas value={crypto.qrCode} size={128} />
                </div>

                <div className="text-center mb-4">
                    <p className="text-sm text-gray-600">Wallet Address:</p>
                    <p className="text-sm break-all">{crypto.address}</p>
                    <button onClick={handleCopyAddress} className="mt-2 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">
                        Copy Address
                    </button>
                </div>
                <CardContent className=" p-7">
                    <Form {...form}  >
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <div className=" flex flex-col gap-y-3">

                                <FormField
                                    control={form.control}
                                    name='amount'
                                    render={({ field }) => (
                                        <FormItem>

                                            <FormLabel className=" font-bold text-black">Amount</FormLabel>

                                            <AmountInput
                                                {...field}
                                                disabled={false}
                                                placeholder="$0.00"

                                            />
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name='investmentName'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormDescription> give ur investment a name e.g My Dream</FormDescription>
                                            <FormLabel className=" font-bold text-black">Name</FormLabel>
                                            <Input {...field} placeholder='dream invest' />
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />





                                <FormField
                                    control={form.control}
                                    name="plan"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                Choose Plan
                                            </FormLabel>
                                            <Select defaultValue={field.value} onValueChange={field.onChange}>
                                                <FormControl>
                                                    <SelectTrigger disabled={isPending}>
                                                        <SelectValue placeholder="Select Role" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <FormMessage />
                                                <SelectContent>
                                                    <SelectItem value={UserPlan.HALFYEAR}>
                                                        HALF YEAR
                                                    </SelectItem>
                                                    <SelectItem value={UserPlan.YEARLY}>
                                                        YEARLY
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </FormItem>

                                    )}
                                />




                            </div>



                            <DottedSeparator className="py-3" />
                            <div className=" flex items-center justify-between">

                                <Button
                                    className=' bg-red-500'

                                    onClick={onClose} disabled={isPending} size="lg" type="button" >
                                    Cancel
                                </Button>
                                <Button disabled={isPending} size="lg" type="submit" className="bg-green-500 hover:bg-green-500" >
                                    Confirm
                                </Button>
                            </div>

                        </form>
                    </Form>
                </CardContent>
            </CardContent>
        </Card>



    );
};

export default DepositPopup;
