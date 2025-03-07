import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface TransitionProps {
  type: string;
  stiffness: number;
  damping: number;
  delayPerChar: number;
}

interface AppState {
  text: string;
  effectCode: string;
  transitionProps: TransitionProps;
  setText: (text: string) => void;
  setEffectCode: (code: string) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => {
      const initialEffectCode = JSON.stringify({
        type: 'spring',
        stiffness: 50,
        damping: 8,
        delayPerChar: 0.05
      });

      const initialTransitionProps = JSON.parse(initialEffectCode);

      return {
        text: '',
        effectCode: initialEffectCode,
        transitionProps: initialTransitionProps,
        setText: (text) => set({ text }),
        setEffectCode: (code) => {
          try {
            const parsedCode = JSON.parse(code);
            set({ effectCode: code, transitionProps: parsedCode });
          } catch (error) {
            console.error("Invalid JSON for effectCode, ignoring update:", code);
          }
        },
      };
    },
    { name: 'text-effect-playground' }
  )
);