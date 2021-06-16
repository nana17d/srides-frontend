import { setUser } from "./../../config/user";
import { useMutation, useQueryClient } from "react-query";
import { useHistory } from "react-router-dom";
import { setAccessToken } from "../../config/accessToken";
import axios from "../../config/axios-config";

export interface SignupDetails {
  fullname: string;
  password: string;
  email: string;
  studentId: string;
}

/**
 * Mutation hook for registering in users
 */
export const useRegister = () => {
  const history = useHistory();
  const apiRoute = "/auth/register";
  const queryClient = useQueryClient();
  //login request handler
  const registerUser = async (userDetails: SignupDetails) => {
    const { data } = await axios.post(apiRoute, userDetails);
    return data;
  };

  const { mutate, isLoading, error, isSuccess } = useMutation(registerUser, {
    onSuccess: async ({ data }) => {
      setAccessToken(data.accessToken);
      setUser(data.user);
      queryClient.invalidateQueries("user");
      history.push("/");
    },
  });

  return { mutate, loading: isLoading, error, isSuccess };
};
