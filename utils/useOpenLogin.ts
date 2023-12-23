import { create } from 'zustand';

export interface StateType {
  openLogin: boolean;
  setOpenLogin: (arg0: boolean) => void;
}

const useOpenLogin = create<StateType>((set) => ({
  openLogin: false, 
  setOpenLogin: (value) => set({ openLogin: value }),
}));

export default useOpenLogin;