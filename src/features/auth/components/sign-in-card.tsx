"use client"

import { z } from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"


import { DottedSeparator } from "@/components/dotted-separator"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import Link from "next/link";
import { loginSchema } from "../schema";
import { useLogin } from "../api/use-login";
import { useRouter } from "next/navigation";




export const SignInCard = () => {

    const { mutate, isPending } = useLogin();
    const router = useRouter();

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const onSubmit = (values: z.infer<typeof loginSchema>) => {
        mutate({ json: values }, {
            onSuccess: () => {
                router.push("/dashboard")
            }

        });
    }

    return (
        <Card className="w-full h-full md:w-[487px] border-none shadow-none bg-transparent">
            <CardHeader className=" flex items-center justify-center text-center p-7">
                <CardTitle className=" text-2xl text-white">
                    Welcome back!
                </CardTitle>
            </CardHeader>
            <div className=" px-7">
                <DottedSeparator />
            </div>
            <CardContent className=" p-7">
                <Form {...form}  >
                    <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isPending}
                                            type="email"
                                            placeholder="Enter email address"
                                            className="text-white"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>

                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isPending}
                                            type="password"
                                            placeholder="Enter password"
                                            className="text-white"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>

                            )}
                        />


                        <Button disabled={isPending} size="lg" className="w-full bg-[#FFFFFF]">
                            {isPending ? "Login...." : "Login"}
                        </Button>
                    </form>
                </Form>

            </CardContent>

            <div className=" px-7">
                <DottedSeparator />
            </div>
            <CardContent className=" p-7 flex items-center justify-center text-white">
                <p>
                    Don&apos;t have an account?
                    <Link href="/sign-up">
                        <span className=" text-blue-700"> {" "}Sign Up</span>
                    </Link>
                </p>
            </CardContent>
        </Card>
    )
}
