import { create } from 'zustand';
import type { AuthStore } from '@/types';

export const useAuthStore = create<AuthStore>()(
  (set) => ({
    user: null,
    loading: false,
    setUser: (user) => set({ user }),
    setLoading: (loading) => set({ loading }),
  })
);