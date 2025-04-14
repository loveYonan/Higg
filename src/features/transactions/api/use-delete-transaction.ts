import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";

import { client } from "@/lib/rpc";
import { toast } from "sonner";

type ResponseType = InferResponseType<
  (typeof client.api.transactions)[":transactionId"]["$delete"],
  200
>;
type RequestType = InferRequestType<
  (typeof client.api.transactions)[":transactionId"]["$delete"]
>;

export const useDeleteTransaction = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async ({ param }) => {
      const response = await client.api.transactions[":transactionId"][
        "$delete"
      ]({
        param,
      });

      if (!response.ok) {
        throw new Error("Failed to delete transaction");
      }

      return await response.json();
    },
    onSuccess: ({ data }) => {
      toast.success("Transaction deleted");
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
      queryClient.invalidateQueries({ queryKey: ["allTransactions"] });
      queryClient.invalidateQueries({ queryKey: ["approved"] });
      queryClient.invalidateQueries({ queryKey: ["transaction", data.$id] });
    },
    onError: () => {
      toast.error("Failed to delete transaction");
    },
  });

  return mutation;
};
