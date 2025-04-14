import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeaderLogo = () => {
    return (
        <Link href="/">
            <div className=' items-center hidden lg:flex'>
                <Image src="/logoss.svg" alt='logo2' height={25} width={25} />
                <p className=' font-semibold text-white text-2xl ml-2.5'>
                    CORE
                </p>
            </div>
        </Link>
    )
}

export default HeaderLogo