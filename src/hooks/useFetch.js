import { useQuery, useQueryClient } from "@tanstack/react-query";
import { url } from "../utils/baseUrl";

export const useFetch = (api, key, value) => {
  const fetchData = async () => {
    const { data } = await url.get(api);
    return data;
  };
  const { data, isLoading, error } = useQuery({
    queryKey: [key, value],
    queryFn: fetchData,
  });

  return { data, isLoading, error };
};
