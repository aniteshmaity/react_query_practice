import { useQuery } from "@tanstack/react-query";
import axiosPrivate from "../../lib/axiosPrivate";

export const useFetchList = (endpoint, key) =>
  useQuery({
    queryKey: [key],
    queryFn: async () => {
      const { data } = await axiosPrivate.get(endpoint);
      return data;
    },
  });
