import React from 'react'
import HeaderLogo from './header-logo'
import { UserButton } from '@/features/auth/components/user-button'





const Header = async () => {



    return (
        <header className="fixed top-0 left-0 w-full bg-[#1F2127] px-4 py-4 lg:px-14 z-50">
            <div className="max-w-screen-2xl mx-auto">
                <div className="w-full flex items-center justify-between">
                    <div className="flex items-center lg:gap-x-16">
                        <HeaderLogo />
                    </div>
                    <UserButton />
                </div>
            </div>
        </header>

    )
}

export default Header