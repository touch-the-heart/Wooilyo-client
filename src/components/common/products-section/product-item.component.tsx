import Link from "next/link";
import Image from "next/image";
import { PRODUCT } from "@/types/data";

export const ProductItem = ({
  item,
  showSubTitle = false,
  variant = "default",
}: {
  item: PRODUCT;
  showSubTitle?: boolean;
  variant?: "default" | "shop";
}) => {
  const formatCurrency = (price: number) => {
    return price?.toLocaleString("ko-KR", {
      style: "currency",
      currency: "KRW",
    });
  };

  if (variant === "shop") {
    return (
      <Link key={item.id.toString()} href={`/shop/${item.id}`}>
        <div className="flex flex-col cursor-pointer">
          <div className="flex justify-center">
            <Image
              src={item.images[0].url}
              width={300}
              height={300}
              alt={item.name}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="mt-4 px-2">
            <div className="flex justify-between text-lg">
              <h2 className="font-semibold">{item.name}</h2>
              <h2 className="font-normal">
                {formatCurrency(item.details[0].price)}
              </h2>
            </div>
            {showSubTitle && (
              <p className="text-gray-600 font-light text-sm">
                {item.shortDescription}
              </p>
            )}
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link key={item.id.toString()} href={`/shop/${item.id}`}>
      <div className="relative flex flex-col cursor-pointer group">
        {/* 상품 이미지 */}
        <div className="flex justify-center relative">
          <Image
            src={item.images[0].url}
            width={300}
            height={300}
            alt={item.name}
            className="w-full h-auto object-cover"
          />
          {/* 호버 시 나타나는 반투명 배경 */}
          <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="text-center text-white">
              <h2 className="font-semibold text-lg">{item.name}</h2>
              <h2 className="font-medium text-md mt-1">
                {formatCurrency(item.details[0].price)}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
