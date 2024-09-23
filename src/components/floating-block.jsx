import { useSelectedService } from "../store/use-selected-service";
import { cn } from "../lib/utils";

export default function FloatingBlock() {
  const selectedService = useSelectedService((state) => state.selectedService);
  return (
    <a
      href={selectedService?.url}
      target={window?.ReactNativeWebView ? "_self" : "_blank"}
      className={cn(
        "fixed -top-14 left-1 right-1 cursor-pointer select-none rounded-md bg-blue-500 p-1 text-center text-base text-white opacity-0 duration-500 sm:left-1/2 sm:w-fit sm:-translate-x-1/2 sm:p-3 2xl:text-lg",
        { "opacity-1 top-1": selectedService },
      )}
    >
      Дізнатися більше про{" "}
      <span className="font-bold underline">{selectedService?.text}</span>
    </a>
  );
}
