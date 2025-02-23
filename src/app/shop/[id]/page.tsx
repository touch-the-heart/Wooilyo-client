"use client";

import { Header } from "../../../components/header";
import { PRODUCTS_DATA } from "../../../data/mock/products.data";
import { useParams } from "next/navigation";

const ShopDetailPage = () => {
  const params = useParams();
  const { id } = params;
  const product = PRODUCTS_DATA.filter((e) => e.id === Number(id));

  return (
    <div className="h-screen bg-white flex flex-col">
      <div className="flex flex-grow flex-row">
        <div className="flex-grow flex-[0_0_55%] bg-blue-900"></div>
        <div className="flex-shrink-0 flex-[0_0_45%] min-w-[200px] bg-red-900"></div>
      </div>
    </div>
  );
};

export default ShopDetailPage;
