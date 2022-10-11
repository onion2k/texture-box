import create from "zustand";

interface BoxState {
  logo: number;
  baseCol: string;
  texture: number;
  scene: boolean;
  updateLogo: (logo: number) => void;
  updateBaseCol: (col: string) => void;
  updateTexture: (texture: number) => void;
  updateScene: () => void;
}

export const useBoxStore = create<BoxState>((set) => ({
  logo: 0,
  baseCol: "pink",
  texture: 0,
  scene: true,
  updateLogo: (logo) => set((state) => ({ ...state, logo: logo })),
  updateBaseCol: (col) => set((state) => ({ ...state, baseCol: col })),
  updateTexture: (texture) => set((state) => ({ ...state, texture })),
  updateScene: () => set((state) => ({ ...state, scene: !state.scene }))
}));
