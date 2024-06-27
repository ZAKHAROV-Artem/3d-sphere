import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { getCoordinates } from "../lib/utils";

export const useSelectedService = create(
  immer((set) => ({
    visible: false,
    setVisible: (visible) => set({ visible }),
    selectedService: null,
    setSelectedService: (service) => set({ selectedService: service }),
  })),
);
