import { useMutation, useQueryClient } from "react-query";
import axios from "../../config/axios-config";

export interface TicketDetails {
  seatNo: string;
  bus: string;
  from: string;
  date: string;
  to: string;
}

export const useGenerateTicket = () => {
  const apiRoute = "/tickets/generate";
  const queryClient = useQueryClient();

  const generateTicket = async (ticketDetails: TicketDetails) => {
    const { data } = await axios.post(apiRoute, {
      ticket: ticketDetails,
    });
    return data;
  };

  const { mutate, isLoading, error, isSuccess } = useMutation(generateTicket, {
    onSuccess: async () => {
      queryClient.invalidateQueries("my-tickets");
      queryClient.invalidateQueries("business-data");
    },

    retry: 1,
  });

  return {
    mutate,
    loading: isLoading,
    error,
    isSuccess,
  };
};
