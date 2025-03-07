// src/lib/store.ts
import { create } from 'zustand';

interface AppState {
  text: string;
  setText: (text: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  text: '',
  setText: (text) => set({ text }),
}));