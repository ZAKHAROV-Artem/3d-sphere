import { useShallow } from "zustand/react/shallow";
import { useSelectedServicePopup } from "../store/use-selected-service-popup";
import { cn } from "../lib/utils";
import { useEffect } from "react";
import { RESET_DURATION, SHOW_DURATION } from "../lib/constants";

export default function FloatingBlock() {
  const { service, visible, setVisible, setSelectedService } =
    useSelectedServicePopup(
      useShallow((state) => ({
        service: state.selectedService,
        visible: state.visible,
        setVisible: state.setVisible,
        setSelectedService: state.setSelectedService,
      })),
    );

  useEffect(() => {
    if (service.text) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        setTimeout(() => {
          setSelectedService({ text: "", url: "" });
        }, RESET_DURATION);
      }, SHOW_DURATION);
      return () => clearTimeout(timer);
    }
  }, [service, setVisible, setSelectedService]);
  return (
    <a
      href={service.url}
      target="_blank"
      className={cn(
        "fixed -top-14 left-3 right-3 cursor-pointer select-none rounded-md bg-blue-500 p-3 text-center text-white opacity-0 duration-500 sm:left-1/2 sm:w-fit sm:-translate-x-1/2 ",
        { "opacity-1 top-3": visible },
      )}
    >
      Дізнатися більше про <b>{service.text}</b>
    </a>
  );
}
