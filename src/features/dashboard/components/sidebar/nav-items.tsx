"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useDashboardSidebar } from "../../store/use-create-dashboard-sidebar";


interface NavItemProps {
    icon: LucideIcon;
    label: string;
    href: string;
    isActive: boolean;
};

export const NavItem = ({
    icon: Icon,
    label,
    href,
    isActive,
}: NavItemProps) => {

    const { collapsed } = useDashboardSidebar((state) => state);

    return (
        <Button
            asChild
            variant="ghost"
            className={cn(
                "w-full h-12 hover:bg-[#19191C]",
                collapsed ? "justify-center" : "justify-start",
                isActive && "bg-[#19191C]",
            )}
        >
            <Link href={href}>
                <div className="flex items-center gap-x-4">
                    <Icon className={cn(
                        "h-4 w-4",
                        collapsed ? "mr-0" : "mr-2"
                    )} />
                    {!collapsed && (
                        <span>
                            {label}
                        </span>
                    )}
                </div>
            </Link>
        </Button>
    );
};
