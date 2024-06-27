import { useSelectedService } from "../store/use-selected-service";
import { cn } from "../lib/utils";

export default function FloatingBlock() {
  const service = useSelectedService((state) => state.selectedService);

  return (
    <a
      href={service.url}
      target="_blank"
      className={cn(
        "fixed left-3 right-3 top-3 cursor-pointer select-none rounded-md bg-blue-500 p-3 text-center text-white duration-500 sm:left-1/2 sm:w-fit sm:-translate-x-1/2 ",
      )}
    >
      Дізнатися більше про <b>{service.text}</b>
    </a>
  );
}
