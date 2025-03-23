"use client";

import Link from "next/link";
import Image from "next/image";
import { Header } from "../../components/header";
import { PRODUCTS_DATA } from "../../data/mock/products.data";
import { useEffect, useState } from "react";
import { PRODUCT } from "../../types/data/products.type";
import { ITEM_CATEGORY } from "@/types/data";
import { ITEM_CATEGORIES } from "@/data/item-category/item-category.data";

const itemCategories: ITEM_CATEGORY[] = [...ITEM_CATEGORIES];

export default function ShopPage() {
  const [data, setData] = useState<PRODUCT[]>(PRODUCTS_DATA);
  const [currentType, setCurruntType] = useState<string>("all");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (currentType !== "all") {
      const filteredData = PRODUCTS_DATA.filter((e) => e.type === currentType);
      setData(filteredData);
    } else {
      setData(PRODUCTS_DATA);
    }
  }, [currentType]);

  return (
    <>
      {/* 모바일 메뉴 버튼 */}
      <button
        className="md:hidden p-4 text-gray-800 border-b-[1px] border-gray-900"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        ☰ Menu
      </button>

      <div className="flex flex-grow flex-col md:flex-row px-[60px]">
        {/* 사이드바 */}
        <div
          className={`fixed inset-0 bg-white z-10 p-5 transform md:relative md:transform-none transition-transform duration-300 md:flex md:flex-col md:w-1/5 min-w-[200px] 
          ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
        >
          <ul className="space-y-3">
            {itemCategories.map((item) => (
              <li
                key={item.key}
                className="cursor-pointer text-lg"
                onClick={() => {
                  setCurruntType(item.key);
                  setIsSidebarOpen(false);
                }}
              >
                {item.display_value}
              </li>
            ))}
          </ul>
        </div>

        {/* 컨텐츠 */}
        <div className="flex-grow p-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {data.map((e) => {
              const formatCurrency = (price: number) => {
                return price.toLocaleString("ko-KR", {
                  style: "currency",
                  currency: "KRW",
                });
              };
              return (
                <Link key={e.id.toString()} href={`/shop/${e.id}`}>
                  <div className="flex flex-col cursor-pointer">
                    <div className="flex justify-center">
                      <Image
                        src={e.thumbnailImageUrl}
                        width={300}
                        height={300}
                        alt={e.title}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <div className="mt-4 px-2">
                      <div className="flex justify-between text-lg">
                        <h2 className="font-semibold">{e.title}</h2>
                        <h2 className="font-normal">
                          {formatCurrency(e.price)}
                        </h2>
                      </div>
                      <p className="text-gray-600 font-light text-sm">
                        {e.subTitle}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
