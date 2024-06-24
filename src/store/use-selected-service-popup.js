import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useSelectedServicePopup = create(
  immer((set) => ({
    visible: false,
    setVisible: (visible) => set({ visible }),
    selectedService: { text: "", url: "" },
    setSelectedService: (service) => set({ selectedService: service }),
  })),
);
