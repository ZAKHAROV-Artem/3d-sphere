import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useSelectedService = create(
  immer((set) => ({
    visible: false,
    setVisible: (visible) => set({ visible }),
    selectedService: null,
    setSelectedService: (service) => set({ selectedService: service }),
  })),
);
