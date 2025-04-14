"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface AuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {

    const pathname = usePathname();
    const isSignIn = pathname === "/sign-in";

    return (
        <main className=" bg-black min-h-screen">
            <div className=" mx-auto max-w-screen-2xl p-4">
                <nav className=" flex justify-between items-center text-white">
                    <Link href="/">
                        <Image src="/logo.svg" alt="logo" height={40} width={65} />
                    </Link>

                    <div className=" flex items-center justify-center gap-x-2">

                        <p className=" text-white font-bold">
                            {isSignIn ? "Not a member" : "Already a member"}
                        </p>
                        <Button variant="secondary" asChild className=" text-white">


                            <Link href={isSignIn ? "/sign-up" : "/sign-in"}>
                                {isSignIn ? "Sign Up" : "Login"}
                            </Link>


                        </Button>
                    </div>

                </nav>
                <div className=" flex flex-col items-center justify-center pt-4 md:pt-14">
                    {children}
                </div>

            </div>

        </main>
    )
}

export default AuthLayout