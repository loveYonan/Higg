"use client"

import { usePathname } from 'next/navigation'


import { routes } from '@/lib/utils'
import NavButton from './nav-button';




const Navigation = () => {
    const pathname = usePathname();

    return (
        <nav className=' hidden lg:flex items-center gap-x-2 overflow-x-auto'>
            {
                routes.map((route) => (
                    <NavButton
                        key={route.href}
                        href={route.href}
                        label={route.label}
                        active={pathname === route.href}
                    />
                ))
            }

        </nav>
    )
}

export default Navigation