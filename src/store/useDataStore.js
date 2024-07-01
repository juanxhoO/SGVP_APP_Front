import { create } from 'zustand';

const useDataStore = create((set) => ({
    order: null,
    setOrder: (order) => set({ order }),
    clearOrder: () => set({ order: [] }),
}));

export default useDataStore;
