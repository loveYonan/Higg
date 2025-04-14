"use client"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useGetProfile } from '@/features/profile/api/use-get-profile'
import { Loader } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const ProfileClient = () => {

    const { data: profile, isLoading: loadingProfile } = useGetProfile();

    if (loadingProfile) {
        return (
            <div className=' h-full flex items-center justify-center'>
                <Loader className=' size-6 animate-spin text-muted-foreground' />
            </div>
        )
    }

    if (!profile) {
        return null;
    }

    const avatarFallback = profile?.fullName?.[0].toUpperCase() ?? "M";

    return (
        <Card className='container border-none mx-auto   px-2 text-white w-full bg-transparent '>
            <CardHeader className='text-2xl font-bold'>
                <CardTitle className=' flex items-center justify-center  text-4xl font-bold mb-10'>
                    Profile
                </CardTitle>


                <div className=" flex flex-col  items-center justify-center p-4 ">
                    <Avatar className=" size-40 bg-[#252731]">
                        <AvatarImage src={profile?.email} />
                        <AvatarFallback className=" aspect-square text-6xl bg-[#252731]">
                            {avatarFallback}
                        </AvatarFallback>
                    </Avatar>
                    <p className=" text-2xl font-bold text-white capitalize text-center">{profile?.fullName} </p>
                    <p className=" text-xl font-bold text-muted-foreground  text-center">{profile?.email} </p>
                </div>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">

                <div>
                    <Label className='py-2'>Name</Label>
                    <Input value={profile.fullName} className=' text-white font-bold capitalize' />
                </div>
                <div>
                    <Label className='py-2'>Email</Label>
                    <Input value={profile.email} className=' text-white font-bold ' />
                </div>
                {/* <div>
                    <Label className='py-2'>Others</Label>
                    <Input value={profile.email} className=' text-white font-bold ' />
                </div> */}
                {/* <div>
                    <Label className='py-2'>Total Interest</Label>
                    <Input value={profile.totalInterest
                    } className=' text-white font-bold capitalize' />
                </div> */}


            </CardContent>
        </Card>
    )
}

