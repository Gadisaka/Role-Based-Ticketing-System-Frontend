import { create } from "zustand";

interface AuthState {
  isLogin: boolean;
  toggleAuth: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  isLogin: true,
  toggleAuth: () => set((state) => ({ isLogin: !state.isLogin })),
}));

export default useAuthStore;
