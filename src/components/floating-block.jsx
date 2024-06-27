import { useSelectedService } from "../store/use-selected-service";
import { cn } from "../lib/utils";

export default function FloatingBlock() {
  const selectedService = useSelectedService((state) => state.selectedService);
  return (
    <a
      href={selectedService?.url}
      target="_blank"
      className={cn(
        "fixed -top-14 left-3 right-3 cursor-pointer select-none rounded-md bg-blue-500 p-1 text-center text-sm text-white opacity-0 duration-500 sm:left-1/2 sm:w-fit sm:-translate-x-1/2 sm:p-3 sm:text-base 2xl:text-lg",
        { "opacity-1 top-3": selectedService },
      )}
    >
      Дізнатися більше про <b>{selectedService?.text}</b>
    </a>
  );
}
