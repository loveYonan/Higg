"use client"

import { z } from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"



import { DottedSeparator } from "@/components/dotted-separator"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";

import Link from "next/link";
import { RegisterSchema } from "../schema";
import { useRegister } from "../api/use-register";



export const SignUpCard = () => {

    const { mutate, isPending } = useRegister();

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    })

    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
        mutate({ json: values });
    }

    return (
        <Card className="w-full h-full md:w-[487px] border-none shadow-none bg-transparent">
            <CardHeader className=" flex items-center justify-center text-center p-7">
                <CardTitle className=" text-2xl text-white">
                    Sign Up
                </CardTitle>
                <CardDescription >
                    By signing up, you agree to our {" "}
                    <Link href="/privacy">
                        <span className=" text-blue-700">
                            Privacy Policy
                        </span>
                    </Link>{' '}
                    and{" "}

                    <Link href="/privacy">
                        <span className=" text-blue-700">
                            Term of Services
                        </span>
                    </Link>
                </CardDescription>
            </CardHeader>
            <div className=" px-7">
                <DottedSeparator />
            </div>
            <CardContent className=" p-7">
                <Form {...form}  >
                    <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isPending}
                                            type="text"
                                            placeholder="Enter your name"
                                            className=" text-white"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>

                            )}
                        />
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
                                            className=" text-white"
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
                                            className=" text-white"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>

                            )}
                        />


                        <Button disabled={isPending} size="lg" className="w-full bg-[#FFFFFF]">
                            {isPending ? "Registering" : "Register"}
                        </Button>
                    </form>
                </Form>
            </CardContent>
            <div className=" px-7">
                <DottedSeparator />
            </div>
            <CardContent className=" p-7 flex items-center justify-center text-white">
                <p>
                    Already have an account?
                    <Link href="/sign-in">
                        <span className=" text-blue-700"> {" "} Login</span>
                    </Link>
                </p>
            </CardContent>
        </Card>
    )
}
