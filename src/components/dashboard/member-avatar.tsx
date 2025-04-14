import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface WorkspaceAvatarProps {
    name: string;
    className?: string;
    fallbackClassName?: string
}

export const MemberAvatar = ({ fallbackClassName, name, className }: WorkspaceAvatarProps) => {

    return (
        <Avatar className={cn(" size-5 transition  border-neutral-300 rounded-md", className)}>
            <AvatarFallback className={cn(" bg-neutral-200 font-medium text-neutral-500 flex items-center justify-center", fallbackClassName)}>
                {name.charAt(0).toUpperCase()}
            </AvatarFallback>
        </Avatar>
    )
}
