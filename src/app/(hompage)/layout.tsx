
import Header from "@/components/header";

interface StandaloneLayoutProps {
    children: React.ReactNode;
}

const StandaloneLayout = ({ children }: StandaloneLayoutProps) => {
    return (
        <main className="bg-black ">
            <div className=" mx-auto mx-w-screen-2xl p-4">
                <Header />
                <div className="flex flex-col items-center justify-center w-full">
                    {children}
                </div>
            </div>

        </main>

    )
}

export default StandaloneLayout