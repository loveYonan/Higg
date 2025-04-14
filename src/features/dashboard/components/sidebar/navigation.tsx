"use client";


import { usePathname } from "next/navigation";
import {
    Bitcoin,
    BriefcaseBusiness,
    ChartColumnStacked,
    HelpCircle,
    Home,
    User,
} from "lucide-react";
import { NavItem } from "./nav-items";
import { useCurrent } from "@/features/auth/api/use-current";




export const Navigation = () => {

    const { data: user } = useCurrent();
    const pathname = usePathname();

    if (!user?.name) {
        return (
            null
        );
    }


    const routes = [
        {
            label: "Home",
            href: `/dashboard`,
            icon: Home,
        },
        {
            label: "Deposit",
            href: `/dashboard/invest`,
            icon: ChartColumnStacked,
        },
        {
            label: "Transactions",
            href: `/dashboard/transactions`,
            icon: BriefcaseBusiness,
        },

        {
            label: "Withdraw",
            href: `/dashboard/withdraws`,
            icon: Bitcoin,
        },
        {
            label: "Profile",
            href: `/dashboard/profile`,
            icon: User,
        },
        {
            label: "Support",
            href: `/support`,
            icon: HelpCircle,
        },
    ];



    return (
        <ul className="space-y-2 px-2 pt-4 lg:pt-0">
            {routes.map((route) => (
                <NavItem
                    key={route.href}
                    label={route.label}
                    icon={route.icon}
                    href={route.href}
                    isActive={pathname === route.href}
                />
            ))}
        </ul>
    );
};