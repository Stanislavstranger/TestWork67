import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { User } from '@/shared/api/types';

interface SessionState {
  user: User | null;
  token: string | null;
  login: (user: User) => void;
  logout: () => void;
}

export const useSessionStore = create<SessionState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      login: (user) => set({ user, token: user.token }),
      logout: () => set({ user: null, token: null }),
    }),
    {
      name: 'session-storage',
    },
  ),
);
