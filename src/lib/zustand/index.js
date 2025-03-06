import { create } from "zustand";

export const useStore = create((set) => {
  return {
    backendFilterRequestG: "",
    setBackendFilterRequestG(value) {
      return set(() => {
        return { backendFilterRequestG: value };
      });
    },
  };
});
