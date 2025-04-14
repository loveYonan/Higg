import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/queries";
import { Sidebar } from "@/features/dashboard/components/sidebar";
import { Container } from "@/features/dashboard/components/container";
import { BarcodeModal } from "@/features/dashboard/components/barcode-modal";
import Header from "@/components/dashboard/header";


interface CreatorLayoutProps {
    children: React.ReactNode;
}


const CreatorLayout = async ({ children }: CreatorLayoutProps) => {

    const user = await getCurrent();


    if (!user) redirect("/");


    return (
        <div className=" bg-[#19191C] w-full ">
            <BarcodeModal />
            <Header />
            <div className=" h-full mt-20 ">
                <div className=" hidden lg:block">
                    <Sidebar />
                </div>

                <Container>
                    <div className=" h-full w-full bg-[#19191C] ">
                        {children}
                    </div>

                </Container>
            </div>
        </div>


    )
}

export default CreatorLayout