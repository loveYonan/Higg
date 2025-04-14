"use client"
import { DataTable } from '@/components/admin/data-table'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { columns } from '@/components/users/columns'
import { useGetAllProfiles } from '@/features/profile/api/use-get-all-profiles'

import { Loader } from 'lucide-react'



export const UsersClient = () => {


    const { data: users, isLoading } = useGetAllProfiles();


    const modifiedusers = users?.documents.map((item) => ({
        id: item.$id,
        fullName: item.fullName,
        email: item.email,

    }));




    if (isLoading) {
        return (
            <div className=' max-w-screen-2xl mx-auto w-full pb-10 -mt-24'>
                <Loader className=' animate-spin size-6' />
            </div>
        )
    }



    return (
        <div className=' max-w-screen-2xl mx-auto w-full pb-10 -mt-24'>
            <Card className='border-none drop-shadow-sm'>
                <CardHeader className='gap-y-2 lg:flex-row lg:items-center lg:justify-between'>
                    <CardTitle className=' text-xl line-clamp-1 text-blue-900'>
                        Users
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    {
                        !users?.documents.length ? (<div className=' h-full w-full flex items-center justify-center'>
                            <p>No Investment at the moment</p>
                        </div>) : (<DataTable columns={columns} data={modifiedusers ?? []} filterKey='email' disabled={isLoading} onDelete={() => { }} />)
                    }

                </CardContent>
            </Card>

        </div>

    )
}

