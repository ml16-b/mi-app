import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useUserStore = create(

    persist(
        (set) => ({
            user: null,
            loading: false,

            fetchUser: async (id) => {
                set({ loading: true });

                try {
                    const response = await fetch(`https://dummyjson.com/users/${id}`);
                    const data = await response.json();

                    set({ user: data, loading: false });
                } catch (error) {
                    set({ loading: false });
                }
            }
        }),
        {
            name: 'user-storage',
        }
    )
);