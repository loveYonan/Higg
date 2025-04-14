import { getCurrent } from '@/features/auth/queries';
import { redirect } from 'next/navigation';
import React from 'react'
import { AdminClient } from './admin-client';
import { UserRole } from '@/features/profile/types';

const AdminPage = async () => {
    const user = await getCurrent();


    if (!user) redirect("/");

    if (user.labels[0] !== UserRole.ADMIN) redirect("/");


    return <AdminClient />
}

export default AdminPage