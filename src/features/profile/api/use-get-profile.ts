import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/rpc";

export const useGetProfile = () => {
  const query = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const response = await client.api.profile["$get"]({});

      if (!response.ok) {
        throw new Error("Failed to fetch profile");
      }

      const { data } = await response.json();

      return data;
    },
  });

  return query;
};
