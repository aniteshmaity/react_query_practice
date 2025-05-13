import { useQuery } from "@tanstack/react-query";
import axiosPrivate from "../../lib/axiosPrivate";

export const useFetchById = (endpoint, id, key) =>
  useQuery({
    queryKey: [key, id],
    queryFn: async () => {
      const { data } = await axiosPrivate.get(`${endpoint}/${id}`);
      return data;
    },
    enabled: !!id,
  });
