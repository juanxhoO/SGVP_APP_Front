import {create} from 'zustand';

const useAuthStore = create((set) => ({
  accessToken: null,
  refreshToken: null,
  isAuthenticated: false,
  setTokens: (accessToken, refreshToken) => set({ accessToken, refreshToken }),
  clearTokens: () => set({ accessToken: null, refreshToken: null }),
  setAuthenticated: (value) => set({ isAuthenticated: value }),
}));

export default useAuthStore;
