import create, { SetState } from "zustand";

interface Ticket {
  from: string;
  to: string;
  bus?: string;
  createdAt?: string;
  seatNo?: string;
  status?: "active" | "canceled";
  ticketId?: string;
  user?: string;
  updatedAt?: string;
  date: string;
}

export type State = {
  logoutLoading: boolean;
  fullScreenModalState: boolean;
  ticket: Ticket;
  setTicket(ticket: Ticket): void;
  setLogoutLoading: (loading: boolean) => void;
  setFullScreenModalState: (action: boolean) => void;
};
export const useStore = create<State>((set: SetState<State>) => ({
  ticket: {
    from: "",
    to: "",
    date: "",
  },
  setTicket(ticket: Ticket) {
    set(() => ({ ticket }));
  },
  logoutLoading: false,
  fullScreenModalState: false,
  setLogoutLoading: (loading: boolean) =>
    set(() => ({ logoutLoading: loading })),
  setFullScreenModalState: (action: boolean) =>
    set(() => ({ fullScreenModalState: action })),
}));
