// sidebarStore.js

import { create } from 'zustand';

const useNotification = create((set) => ({
  open: false,
  toggleNotifications: () => set((state) => ({ open: !state.open })),
}));

export default useNotification;
