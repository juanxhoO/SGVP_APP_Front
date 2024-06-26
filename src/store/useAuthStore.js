import {create} from 'zustand';

const useAuthStore = create((set) => ({
  accessToken: null,
  refreshToken: null,
  userId: null,
  isAuthenticated: false,
  setTokens: (accessToken, refreshToken, userId) => set({ accessToken, refreshToken,userId }),
  clearTokens: () => set({ accessToken: null, refreshToken: null, userId: null }),
  setAuthenticated: (value) => set({ isAuthenticated: value }),
}));

export default useAuthStore;
