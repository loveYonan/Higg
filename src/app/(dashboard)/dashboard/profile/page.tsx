
import { getCurrent } from "@/features/auth/queries";
import { ProfileClient } from "./profile-client";
import { redirect } from "next/navigation";




const ProfilePage = async () => {


    const user = await getCurrent();


    if (!user) redirect("/");



    return (
        <div className="w-full h-full">
            <ProfileClient />
        </div>
    )


}

export default ProfilePage