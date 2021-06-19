import { useEffect } from "react";
import { setAccessToken } from "../../config/accessToken";
import axios from "../../config/axios-config";
import { useQueryClient, useMutation } from "react-query";
import { useStore } from "../useStore";
import { setUser } from "../../config/user";

export const useLogout = () => {
  const { setLogoutLoading } = useStore();
  const queryClient = useQueryClient();

  const logoutUser = async () => {
    const { data } = await axios.post("/auth/logout");
    return data;
  };

  const { isLoading, isError, mutate } = useMutation(logoutUser, {
    onSuccess: () => {
      setAccessToken("");
      setUser("");
      queryClient.invalidateQueries("user");
      setLogoutLoading(false);
    },
    retry: 1,
  });
  useEffect(() => {
    if (isLoading) setLogoutLoading(true);
    if (isError) setLogoutLoading(false);
  }, [isLoading, setLogoutLoading, isError]);
  return {
    error: isError,
    mutate,
  };
};
