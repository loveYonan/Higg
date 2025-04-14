"use client"

import React, { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { useMedia } from 'react-use'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { routes } from '@/lib/utils'




const HeaderLogo = () => {

    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    const isMobile = useMedia("(max-width: 1020px)", false);

    const onClick = (href: string) => {
        router.push(href);
        setIsOpen(false);
    }

    const onClickAdd = () => {
        open();
        setIsOpen(false);
    }


    if (isMobile) {
        return (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                    <Button variant="outline" size="sm" className=' font-normal bg-white/10 hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition'>
                        <Menu className=' size-4' />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className='px-2 w-full bg-black text-white'>
                    <Link href="/">
                        <div className=' items-center flex lg:hidden'>
                            <Image src="/logoss.svg" alt='logo2' height={49} width={73} />
                            <p className=' font-semibold text-white text-2xl ml-2.5'>
                                COREEDEN
                            </p>
                        </div>
                    </Link>
                    <nav className='flex flex-col gap-y-2 pt-6 '>
                        {
                            routes.map((route) => (
                                <Button key={route.href}
                                    variant={route.href === pathname ? "secondary" : "ghost"}
                                    onClick={route.href === "/add" ? onClickAdd : () => onClick(route.href)}
                                    className=' w-full justify-start text-white'

                                >
                                    {route.label}
                                </Button>
                            ))
                        }
                    </nav>
                </SheetContent>
            </Sheet>
        )
    }

    return (
        <Link href="/">
            <div className=' items-center hidden lg:flex'>
                <Image src="/logoss.svg" alt='logo2' height={49} width={73} />
                <p className=' font-semibold text-white text-2xl ml-2.5'>
                    COREEDEN
                </p>
            </div>
        </Link>
    )
}

export default HeaderLogo