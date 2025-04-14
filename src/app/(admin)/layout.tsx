

import Header from '@/components/admin/header';
import { getCurrent } from '@/features/auth/queries';
import { UserRole } from '@/features/profile/types';
import { redirect } from 'next/navigation';
import React from 'react'

type Props = {
    children: React.ReactNode;
}

const AdminLayout = async ({ children }: Props) => {
    const user = await getCurrent();


    if (!user) redirect("/");

    if (user.labels[0] !== UserRole.ADMIN) redirect("/");



    return (
        <div suppressHydrationWarning={true}>
            <Header />
            <main className='px-3 lg:px-14 '>
                {children}
            </main>

        </div>
    )
}

export default AdminLayout