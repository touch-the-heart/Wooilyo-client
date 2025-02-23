"use client";

import { useEffect, useState } from "react";
import { ProductItem } from "./product-item.component";
import { PRODUCT } from "@/types/data";
import { PRODUCTS_DATA } from "@/data/mock/products.data";
import { useCategoryContext } from "@/context/category-context";

export const ProductsSection = () => {
  const [data, setData] = useState<PRODUCT[]>([]);
  const { currentCategory } = useCategoryContext();

  useEffect(() => {
    if (currentCategory !== "all") {
      const filteredData = PRODUCTS_DATA.filter(
        (e) => e.category === currentCategory
      );
      setData([
        ...filteredData,
        ...filteredData,
        ...filteredData,
        ...filteredData,
      ]);
    } else {
      setData([
        ...PRODUCTS_DATA,
        ...PRODUCTS_DATA,
        ...PRODUCTS_DATA,
        ...PRODUCTS_DATA,
      ]);
    }
  }, [currentCategory]);

  return (
    <div className="flex justify-center w-full">
      <div className="w-full max-w-[80%] grid grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((product, i) => {
          return <ProductItem item={product} key={`${product.id}_${i}`} />;
        })}
      </div>
    </div>
  );
};
