import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosPrivate from "../../lib/axiosPrivate";

export const useCreateItem = (endpoint, key) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload) => axiosPrivate.post(endpoint, payload),
    onSuccess: () => {
      queryClient.invalidateQueries([key]);
    },
  });
};
