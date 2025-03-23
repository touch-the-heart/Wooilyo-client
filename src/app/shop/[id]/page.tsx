"use client";

import { ItemCategorySection } from "@/components/common/item-category-section";
import { Header } from "../../../components/header";
import { PRODUCTS_DATA } from "../../../data/mock/products.data";
import { useParams } from "next/navigation";

const ShopDetailPage = () => {
  const params = useParams();
  const { id } = params;
  // 서버에서 가져와야함.
  const product = PRODUCTS_DATA.filter((e) => e.id === Number(id));
  console.log("PARAMS", product);

  return (
    <div className="h-screen bg-white flex flex-col">
      <ItemCategorySection />
      <div className="flex flex-grow flex-row">
        <div className="flex-grow flex-[0_0_55%] bg-blue-900"></div>
        <div className="flex-shrink-0 flex-[0_0_45%] min-w-[200px] bg-red-900"></div>
      </div>
    </div>
  );
};

export default ShopDetailPage;
