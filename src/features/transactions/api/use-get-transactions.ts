import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/rpc";

export const useGetTransactions = () => {
  const query = useQuery({
    queryKey: ["transactions"],
    queryFn: async () => {
      const response = await client.api.transactions.$get();

      if (!response.ok) {
        throw new Error("Failed to fetch transactions");
      }

      const { data } = await response.json();

      return data;
    },
  });

  return query;
};
