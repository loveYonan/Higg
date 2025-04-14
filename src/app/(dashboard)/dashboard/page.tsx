import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";
import { DashboardClient } from "./dashboard-client";


const UserDashboard = async () => {
    const user = await getCurrent();


    if (!user) redirect("/sign-in");



    return <DashboardClient user={user} />
}

export default UserDashboard