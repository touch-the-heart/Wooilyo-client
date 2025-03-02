import { DisplayCarouselItem } from "@/types/data";
import Image from "next/image";

export const MainDisplayCarouselItem = ({
  item,
}: {
  item: DisplayCarouselItem;
}) => {
  return (
    <div
      key={item.key}
      className="flex flex-row bg-white justify-center w-full mx-auto"
    >
      <div
        key={item.key}
        className="hidden md:flex flex-col flex-[4] border-[1px] px-[30px] py-[40px]"
      >
        <h2 className="font-semibold text-lg">{item.title}</h2>
        <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line z-10 mt-[30px]">
          {item.description}
        </p>
      </div>
      <div className="flex-1 md:flex-[6] relative aspect-[1/1]">
        <div className="relative w-full h-full">
          <Image src={item.src} alt={item.key} fill />
        </div>
      </div>
    </div>
  );
};
