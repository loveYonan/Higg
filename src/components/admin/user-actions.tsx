
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { PencilIcon, TrashIcon } from "lucide-react";
import { useConfirm } from "@/hooks/use-confirm";
import { useDeleteTransaction } from "@/features/transactions/api/use-delete-transaction";
import { useUpdateTransaction } from "@/features/transactions/api/use-update-transaction";
import { UserStatus } from "@/features/transactions/types";


interface TaskActionProps {
    id: string;
    children: React.ReactNode;
}

export const UserAction = ({ id, children }: TaskActionProps) => {

    const { mutate: deleteTransaction, isPending: isDeleting } = useDeleteTransaction();
    const { mutate: updateTransaction, isPending: isUpdating } = useUpdateTransaction();

    const disabled = isDeleting || isUpdating;


    const [ConfirmDeleteDialog, confirmDelete] = useConfirm(
        "Delete Transaction",
        "This action cannot be undone",
        "destructive"
    )

    const [ConfirmUpdateDialog, confirmUpdate] = useConfirm(
        "Confirm Payment",
        "You are about to approve User transaction",
        "teritrary"
    )

    const onDelete = async () => {
        const ok = await confirmDelete();
        if (!ok) return;
        deleteTransaction({ param: { transactionId: id } })

    }

    const onUpdate = async () => {
        const ok = await confirmUpdate();
        if (!ok) return;
        updateTransaction({
            form: {
                status: UserStatus.APPROVED,

            }, param: { transactionId: id }
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
                            Update Transaction
                        </DropdownMenuItem>

                        <DropdownMenuItem onClick={onDelete} disabled={disabled} className=" text-amber-700 focus:text-amber-700 font-medium p-[10px]">
                            <TrashIcon className=" size-4 mr-2 stroke-2" />
                            Delete Transaction
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </>

    )
}
