import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";

import { client } from "@/lib/rpc";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type ResponseType = InferResponseType<
  (typeof client.api.transactions)["$post"],
  200
>;
type RequestType = InferRequestType<(typeof client.api.transactions)["$post"]>;

export const useCreateTransaction = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async ({ json }) => {
      const response = await client.api.transactions["$post"]({ json });

      if (!response.ok) {
        throw new Error("Failed to create transaction");
      }

      return await response.json();
    },
    onSuccess: () => {
      toast.success("Transactions initiated successfully");
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
      queryClient.invalidateQueries({ queryKey: ["approved"] });
      queryClient.invalidateQueries({ queryKey: ["allTransactions"] });
    },
    onError: (error) => {
      console.log(error);
      toast.error("Failed to initiate transactions ", {
        action: {
          label: "contact support",
          onClick: () => router.push("/support"),
        },
      });
    },
  });

  return mutation;
};
