"use client";

import { PRODUCTS_DATA } from "@/data/mock/products.data";
import { useParams } from "next/navigation";
import Image from "next/image";
import { formatCurrency } from "@/utils/format.utils";

const ShopDetailPage = () => {
  const params = useParams();
  const { id } = params;
  const product = PRODUCTS_DATA.find((e) => e.id === Number(id));

  if (!product) {
    return <div>상품을 찾을 수 없습니다.</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1200px] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 상품 이미지 섹션 */}
          <div className="relative aspect-square">
            <Image
              src={product.thumbnailImageUrl}
              alt={product.title}
              fill
              className="object-cover"
            />
          </div>

          {/* 상품 정보 섹션 */}
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-semibold text-gray-900">{product.title}</h1>
            <p className="text-lg text-gray-600">{product.subTitle}</p>
            <p className="text-xl font-semibold text-gray-900">
              {formatCurrency(product.price)}
            </p>
            <div className="flex flex-col gap-4">
              <h2 className="text-lg font-medium text-gray-900">상품 설명</h2>
              <p className="text-gray-600">
                {product.description || "상품 설명이 없습니다."}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-lg font-medium text-gray-900">상품 정보</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600">카테고리</p>
                  <p className="font-medium">{product.category}</p>
                </div>
                <div>
                  <p className="text-gray-600">타입</p>
                  <p className="font-medium">{product.type}</p>
                </div>
                <div>
                  <p className="text-gray-600">서브 카테고리</p>
                  <p className="font-medium">{product.subCategory}</p>
                </div>
              </div>
            </div>
            <button className="mt-4 bg-gray-900 text-white py-3 px-6 rounded hover:bg-gray-800 transition-colors">
              구매하기
            </button>
          </div>
        </div>

        {/* 구분선 */}
        <div className="max-w-[800px] mx-auto my-24 border-t border-gray-200"></div>

        {/* 상세 설명 섹션 */}
        <div className="mb-24">
          <div className="max-w-[800px] mx-auto">
            {/* 상세 정보 */}
            <div className="space-y-12 mb-16 text-center">
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">size</h2>
                <div className="space-y-2 text-gray-600">
                  <p>뚜껑 21 x 21 x 6.5 cm / 540g / 500ml</p>
                  <p>볼 21 x 23 x 6.5 cm (손잡이포함) / 690g / 700ml</p>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">description</h2>
                <p className="text-gray-600 whitespace-pre-line">
                  {product.description || "상품 설명이 없습니다."}
                </p>
              </div>

              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">product info</h2>
                <div className="space-y-2 text-gray-600">
                  <p>카테고리: {product.category}</p>
                  <p>타입: {product.type}</p>
                  <p>서브 카테고리: {product.subCategory}</p>
                </div>
              </div>
            </div>

            {/* 상세 이미지 */}
            <div className="space-y-12">
              <div className="relative aspect-square">
                <Image
                  src={product.thumbnailImageUrl}
                  alt={`${product.title} 상세 이미지 1`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square">
                <Image
                  src={product.thumbnailImageUrl}
                  alt={`${product.title} 상세 이미지 2`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDetailPage;
