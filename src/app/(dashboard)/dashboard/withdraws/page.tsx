
import React from 'react'
import { WithdrawClient } from './withdraw-client'
import { getCurrent } from '@/features/auth/queries';
import { redirect } from 'next/navigation';

const WithdrawalPage = async () => {

    const user = await getCurrent();


    if (!user) redirect("/sign-in");

    return <WithdrawClient />
}

export default WithdrawalPage