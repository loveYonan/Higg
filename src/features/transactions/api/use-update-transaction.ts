import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";

import { client } from "@/lib/rpc";
import { toast } from "sonner";

type ResponseType = InferResponseType<
  (typeof client.api.transactions)[":transactionId"]["$patch"],
  200
>;
type RequestType = InferRequestType<
  (typeof client.api.transactions)[":transactionId"]["$patch"]
>;

export const useUpdateTransaction = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async ({ form, param }) => {
      const response = await client.api.transactions[":transactionId"][
        "$patch"
      ]({
        form,
        param,
      });

      if (!response.ok) {
        throw new Error("Failed to update transaction");
      }

      return await response.json();
    },
    onSuccess: () => {
      toast.success("Transaction updated");
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
      queryClient.invalidateQueries({ queryKey: ["allTransactions"] });
      queryClient.invalidateQueries({ queryKey: ["allInvestments"] });
      queryClient.invalidateQueries({ queryKey: ["approved"] });
    },
    onError: () => {
      toast.error("Failed to update transactions, contact support");
    },
  });

  return mutation;
};
