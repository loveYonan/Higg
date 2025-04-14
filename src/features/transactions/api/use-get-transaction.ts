import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/rpc";

interface useGetTransactionProps {
  transactionId: string;
}

export const useGetTransaction = ({
  transactionId,
}: useGetTransactionProps) => {
  const query = useQuery({
    queryKey: ["transaction", transactionId],
    queryFn: async () => {
      const response = await client.api.transactions[":transactionId"]["$get"]({
        param: {
          transactionId,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch transaction");
      }

      const { data } = await response.json();

      return data;
    },
  });

  return query;
};
