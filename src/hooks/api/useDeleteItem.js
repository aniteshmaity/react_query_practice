import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosPrivate from "../../lib/axiosPrivate";
export const useDeleteItem = (endpoint, key) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => axiosPrivate.delete(`${endpoint}/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries([key]);
    },
  });
};
