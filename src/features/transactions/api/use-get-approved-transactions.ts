import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/rpc";

export const useGetApprovedTransactions = () => {
  const query = useQuery({
    queryKey: ["approved"],
    queryFn: async () => {
      const response = await client.api.transactions.approved.$get();

      if (!response.ok) {
        throw new Error("Failed to fetch All transactions");
      }

      const { data } = await response.json();

      return data;
    },
  });

  return query;
};
