import { useMutation } from '@tanstack/react-query';
import axiosPublic from '../../lib/axiosPublic';

export const useLogin = () => {
  return useMutation({
    mutationFn: async (credentials) => {
      const res = await axiosPublic.post('/auth/login', credentials);
      return res.data;
    },
  });
};
