import create, { SetState } from "zustand";

export type State = {
  logoutLoading: boolean;
  fullScreenModalState: boolean;
  setLogoutLoading: (loading: boolean) => void;
  setFullScreenModalState: (action: boolean) => void;
};
export const useStore = create<State>((set: SetState<State>) => ({
  logoutLoading: false,
  fullScreenModalState: false,
  setLogoutLoading: (loading: boolean) =>
    set(() => ({ logoutLoading: loading })),
  setFullScreenModalState: (action: boolean) =>
    set(() => ({ fullScreenModalState: action })),
}));
