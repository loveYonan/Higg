import { getCurrent } from '@/features/auth/queries';
import { redirect } from 'next/navigation';
import React from 'react'
import { UsersClient } from './users-client';
import { UserRole } from '@/features/profile/types';

const UsersPage = async () => {
    const user = await getCurrent();


    if (!user) redirect("/");
    if (user.labels[0] !== UserRole.ADMIN) redirect("/");


    return <UsersClient />
}

export default UsersPage