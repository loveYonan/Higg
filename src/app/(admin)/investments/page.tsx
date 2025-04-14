import { getCurrent } from '@/features/auth/queries';
import { redirect } from 'next/navigation';
import React from 'react'
import { InvestmentClient } from './investment-client';
import { UserRole } from '@/features/profile/types';

const InvestmentPage = async () => {
    const user = await getCurrent();


    if (!user) redirect("/");

    if (user.labels[0] !== UserRole.ADMIN) redirect("/");


    return <InvestmentClient />
}

export default InvestmentPage