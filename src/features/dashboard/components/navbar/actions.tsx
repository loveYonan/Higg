import Link from "next/link";
import { LogOut } from "lucide-react";


import { Button } from "@/components/ui/button";
import { UserButton } from "@/features/auth/components/user-button";

export const Actions = () => {
    return (
        <div className="flex items-center justify-end gap-x-2">
            <Button
                size="sm"
                variant="ghost"
                className="text-muted-foreground hover:text-white"
                asChild
            >
                <Link href="/">
                    <LogOut className="h-7 w-7 mr-2" />
                    Exit
                </Link>
            </Button>
            <UserButton

            />
        </div>
    );
};