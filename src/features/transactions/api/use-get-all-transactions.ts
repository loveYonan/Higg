import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/rpc";

export const useGetAllTransactions = () => {
  const query = useQuery({
    queryKey: ["allTransactions"],
    queryFn: async () => {
      const response = await client.api.transactions.all.$get();

      if (!response.ok) {
        throw new Error("Failed to fetch All transactions");
      }

      const { data } = await response.json();

      return data;
    },
  });

  return query;
};
