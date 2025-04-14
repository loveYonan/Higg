
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { PencilIcon, TrashIcon } from "lucide-react";
import { useConfirm } from "@/hooks/use-confirm";
import { useDeleteInvestment } from "@/features/investments/api/use-delete-investment";
import { useUpdateInvestment } from "@/features/investments/api/use-update-investment";


interface TaskActionProps {
    id: string;
    children: React.ReactNode;
}

export const UserAction = ({ id, children }: TaskActionProps) => {

    const { mutate: deleteInvestment, isPending: isDeleting } = useDeleteInvestment();
    const { mutate: updateInvestment, isPending: isUpdating } = useUpdateInvestment();

    const disabled = isDeleting || isUpdating;


    const [ConfirmDeleteDialog, confirmDelete] = useConfirm(
        "Delete Investment",
        "This action cannot be undone",
        "destructive"
    )

    const [ConfirmUpdateDialog, confirmUpdate] = useConfirm(
        "Update Investmnet",
        "You are about to update investment status",
        "teritrary"
    )

    const onDelete = async () => {
        const ok = await confirmDelete();
        if (!ok) return;
        deleteInvestment({ param: { investmentId: id } })

    }

    const onUpdate = async () => {
        const ok = await confirmUpdate();
        if (!ok) return;
        updateInvestment({
            param: { investmentId: id }
        })

    }



    return (
        <>
            <ConfirmUpdateDialog />
            <ConfirmDeleteDialog />
            <div className="flex justify-end">
                <DropdownMenu modal={false}>
                    <DropdownMenuTrigger asChild>
                        {children}
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className=" w-52">
                        <DropdownMenuItem onClick={onUpdate} disabled={disabled} className=" font-medium p-[10px]">
                            <PencilIcon className=" size-4 mr-2 stroke-2" />
                            Update Investment
                        </DropdownMenuItem>

                        <DropdownMenuItem onClick={onDelete} disabled={disabled} className=" text-amber-700 focus:text-amber-700 font-medium p-[10px]">
                            <TrashIcon className=" size-4 mr-2 stroke-2" />
                            Delete Investment
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </>

    )
}
