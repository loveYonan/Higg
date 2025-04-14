import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/rpc";

export const useGetAllProfiles = () => {
  const query = useQuery({
    queryKey: ["allProfiles"],
    queryFn: async () => {
      const response = await client.api.profile.all.$get();

      if (!response.ok) {
        throw new Error("Failed to fetch All Profiles");
      }

      const { data } = await response.json();

      return data;
    },
  });

  return query;
};
