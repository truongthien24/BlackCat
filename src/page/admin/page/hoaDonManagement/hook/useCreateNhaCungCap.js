import apiService from "api";
import { useMutation } from "react-query";

const createNhaCungCap = async (params = {}) => {
  const nhaCungCap = await apiService.nhaCungCap.createNhaCungCap({
    ...params?.Data,
  });

  return nhaCungCap;
};

const useCreateNhaCungCap = () => {
  return useMutation(createNhaCungCap, {
    onSuccess: (_, { onSuccess, status }) => {
      onSuccess(_);
    },
    onError: (error, { onError, context }) => {
      onError(error?.response?.data);
    },
  });
};

export default useCreateNhaCungCap;
