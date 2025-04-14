import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";

import { client } from "@/lib/rpc";
import { toast } from "sonner";

type ResponseType = InferResponseType<
  (typeof client.api.investments)[":investmentId"]["$delete"],
  200
>;
type RequestType = InferRequestType<
  (typeof client.api.investments)[":investmentId"]["$delete"]
>;

export const useDeleteInvestment = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async ({ param }) => {
      const response = await client.api.investments[":investmentId"]["$delete"](
        {
          param,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete investment");
      }

      return await response.json();
    },
    onSuccess: ({ data }) => {
      toast.success("Investment deleted");
      queryClient.invalidateQueries({ queryKey: ["investments"] });
      queryClient.invalidateQueries({ queryKey: ["allinvestments"] });
      queryClient.invalidateQueries({ queryKey: ["investment", data.$id] });
    },
    onError: () => {
      toast.error("Failed to delete investment");
    },
  });

  return mutation;
};
