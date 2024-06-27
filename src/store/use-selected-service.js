import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { getCoordinates } from "../lib/utils";

export const useSelectedService = create(
  immer((set) => ({
    visible: false,
    setVisible: (visible) => set({ visible }),
    selectedService: {
      isTitle: true,
      text: "Документи",
      position: getCoordinates(0, 0),
      url: "https://zahist.ua/ourServices.html",
    },
    setSelectedService: (service) => set({ selectedService: service }),
  })),
);
