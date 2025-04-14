import CryptoList from '@/components/crypto-list'
import { getCurrent } from '@/features/auth/queries';
import { redirect } from 'next/navigation';
import React from 'react'

const InvestPage = async () => {

    const user = await getCurrent();


    if (!user) redirect("/");
    return (
        <div className="h-full   w-full">
            <h1 className="text-3xl font-bold text-center mb-8 text-white">Investment App</h1>
            <div className="grid grid-cols-1  lg:px-32">
                <CryptoList />
                {/* <Deposit /> */}
            </div>
        </div>
    )
}

export default InvestPage