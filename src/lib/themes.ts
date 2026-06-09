import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Theme = 'dark' | 'warm' | 'light' | 'navy-blue' | 'mac-os';

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: 'dark',
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: 'kibali-theme',
    }
  )
);
