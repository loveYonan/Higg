import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";

import { client } from "@/lib/rpc";
import { toast } from "sonner";

type ResponseType = InferResponseType<
  (typeof client.api.investments)[":investmentId"]["$patch"],
  200
>;
type RequestType = InferRequestType<
  (typeof client.api.investments)[":investmentId"]["$patch"]
>;

export const useUpdateInvestment = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async ({ param }) => {
      const response = await client.api.investments[":investmentId"]["$patch"]({
        param,
      });

      if (!response.ok) {
        throw new Error("Failed to update investment");
      }

      return await response.json();
    },
    onSuccess: () => {
      toast.success("Investment updated");
      queryClient.invalidateQueries({ queryKey: ["investments"] });
      queryClient.invalidateQueries({ queryKey: ["allInvestments"] });
    },
    onError: () => {
      toast.error("Failed to update investments, contact support");
    },
  });

  return mutation;
};
