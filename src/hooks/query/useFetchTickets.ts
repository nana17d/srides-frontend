import { useQuery } from "react-query";
import axios from "../../config/axios-config";

export const useMyTickets = () => {
  const getMyTickets = async () => {
    const apiRoute = "/users/tickets";
    const { data } = await axios.get(apiRoute);
    return data.data;
  };
  const { data, isLoading, isSuccess, isError } = useQuery(
    "my-tickets",
    getMyTickets, 
  );
  return { data, loading: isLoading, success: isSuccess, isError };
};
