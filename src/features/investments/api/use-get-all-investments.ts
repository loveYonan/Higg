import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/rpc";

export const useGetAllInvestments = () => {
  const query = useQuery({
    queryKey: ["allInvestments"],
    queryFn: async () => {
      const response = await client.api.investments.all.$get();

      if (!response.ok) {
        throw new Error("Failed to fetch All investments");
      }

      const { data } = await response.json();

      return data;
    },
  });

  return query;
};
