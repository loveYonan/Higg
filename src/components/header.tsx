import React from 'react'
import HeaderLogo from './header-logo'
import Navigation from './navigation'
import { Button } from './ui/button'
import Link from 'next/link'
import { UserButton } from '@/features/auth/components/user-button'
import { getCurrent } from '@/features/auth/queries'





const Header = async () => {

    const user = await getCurrent();

    return (
        <header className=' bg-transparent px-4 py-4 lg:px-14 '>
            <div className=' max-w-screen-2xl mx-auto'>
                <div className='w-full flex items-center justify-between '>
                    <div className='flex items-center lg:gap-x-16'>
                        <HeaderLogo />

                    </div>
                    <Navigation />

                    {
                        !user ? (<div className=' flex items-center justify-center gap-x-2'>
                            <Button variant="ghost" asChild>
                                <Link href="/sign-in">
                                    Login
                                </Link>
                            </Button>
                            <Button asChild className=' hidden lg:block rounded-full'>

                                <Link href="/sign-up">
                                    Register
                                </Link>
                            </Button>
                        </div>) : (<UserButton />)
                    }





                </div>

            </div>
        </header>
    )
}

export default Header