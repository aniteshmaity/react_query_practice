import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosPrivate from "../../lib/axiosPrivate";

export const useUpdateItem = (endpoint, key) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, ...payload }) => axiosPrivate.put(`${endpoint}/${id}`, payload),
    onSuccess: () => {
      queryClient.invalidateQueries([key]);
    },
  });
};
