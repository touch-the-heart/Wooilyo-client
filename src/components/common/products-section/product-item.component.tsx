import Link from "next/link";
import Image from "next/image";
import { PRODUCT } from "@/types/data";
import { formatCurrency } from "@/utils/format.utils";

export const ProductItem = ({
  item,
  showSubTitle = false,
}: {
  item: PRODUCT;
  showSubTitle?: boolean;
}) => {
  return (
    <Link key={item.id.toString()} href={`/shop/${item.id}`}>
      <div className="flex flex-col cursor-pointer">
        <div className="flex justify-center">
          <Image
            src={item.thumbnail_image_url}
            width={300}
            height={300}
            alt={item.title}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="mt-4 px-2">
          <div className="flex justify-between text-lg">
            <h2 className="font-semibold">{item.title}</h2>
            <h2 className="font-normal">{formatCurrency(item.price)}</h2>
          </div>
          {showSubTitle && (
            <p className="text-gray-600 font-light text-sm">{item.sub_title}</p>
          )}
        </div>
      </div>
    </Link>
  );
};
