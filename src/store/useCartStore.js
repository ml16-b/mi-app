import { create } from 'zustand';

export const useCartStore = create((set) => ({
    items: 0,
    totalPrice: 0,

    addItem: () => set((state) => ({
        items: state.items + 1
    }))
}));