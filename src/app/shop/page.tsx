"use client";

import { PRODUCTS_DATA } from "../../data/mock/products.data";
import { useEffect, useState, useMemo } from "react";
import { PRODUCT } from "../../types/data/products.type";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "@/client";
import { ProductItem } from "@/components/common/products-section/product-item.component";

const SIDE_BAR_CATEGORY_LEVEL = 2;

// 계층적 카테고리 타입 정의
interface CategoryWithChildren {
  id: number;
  key: string;
  name: string;
  level: number;
  createdAt: string;
  parentId: number | null;
  order: number;
  children?: CategoryWithChildren[];
}

export default function ShopPage() {
  const [data, setData] = useState<PRODUCT[]>(PRODUCTS_DATA);
  const [currentType, setCurruntType] = useState<string>("set");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<Set<number>>(
    new Set()
  );
  const {
    isPending,
    isError,
    data: totalCategories,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
  });

  // 계층적 카테고리 구조 생성 (shop의 하위 카테고리들만)
  const hierarchicalCategories = useMemo(() => {
    if (!totalCategories?.data) return [];

    // shop 카테고리 찾기 (레벨 1)
    const shopCategory = totalCategories.data.find(
      (cat) => cat.key === "shop" && cat.level === 1
    );

    if (!shopCategory) return [];

    // shop의 하위 레벨 2 카테고리들만 필터링
    const shopLevel2Categories = totalCategories.data
      .filter(
        (cat) =>
          cat.level === SIDE_BAR_CATEGORY_LEVEL &&
          cat.parentId === shopCategory.id
      )
      .sort((a, b) => a.order - b.order);

    // shop의 하위 레벨 3 카테고리들
    const shopLevel3Categories = totalCategories.data.filter(
      (cat) =>
        cat.level === 3 &&
        shopLevel2Categories.some((level2) => level2.id === cat.parentId)
    );

    return shopLevel2Categories.map((level2Cat) => ({
      ...level2Cat,
      children: shopLevel3Categories
        .filter((level3Cat) => level3Cat.parentId === level2Cat.id)
        .sort((a, b) => a.order - b.order),
    }));
  }, [totalCategories?.data]);

  console.log("계층적 카테고리:", hierarchicalCategories);

  // 현재 선택된 카테고리 경로 생성
  const breadcrumbPath = useMemo(() => {
    if (currentType === "all" || !totalCategories?.data) return [];

    const selectedCategory = totalCategories.data.find(
      (cat) => cat.key === currentType
    );

    if (!selectedCategory) return [];

    const path: (typeof selectedCategory)[] = [selectedCategory];

    // 부모 카테고리들을 찾아서 추가
    let currentCat = selectedCategory;
    while (currentCat.parentId) {
      const parentCat = totalCategories.data.find(
        (cat) => cat.id === currentCat.parentId
      );
      if (parentCat && parentCat.key !== "shop") {
        path.unshift(parentCat);
      }
      if (!parentCat) break;
      currentCat = parentCat;
    }

    return path;
  }, [currentType, totalCategories?.data]);

  // 처음 로드 시 첫 번째 카테고리 선택
  useEffect(() => {
    if (hierarchicalCategories.length > 0 && currentType === "all") {
      setCurruntType(hierarchicalCategories[0].key);
    }
  }, [hierarchicalCategories, currentType]);

  // 카테고리 토글 함수
  const toggleCategory = (categoryId: number) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
    }
    setExpandedCategories(newExpanded);
  };

  useEffect(() => {
    if (currentType !== "all") {
      // 레벨 2와 레벨 3 모두 필터링에 사용
      const filteredData = PRODUCTS_DATA.filter((e) =>
        e.categories.some((category) => {
          return category.category.key === currentType;
        })
      );
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
          className={`fixed inset-0 bg-white z-10 p-5 transform md:relative md:transform-none transition-transform duration-300 md:flex md:flex-col md:w-[180px] 
          ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
        >
          <ul className="space-y-1">
            {hierarchicalCategories.map((category) => {
              const isExpanded = expandedCategories.has(category.id);
              const hasChildren =
                category.children && category.children.length > 0;

              return (
                <li key={category.key}>
                  {/* Level 2 카테고리 */}
                  <div
                    className="cursor-pointer text-lg hover:text-blue-600 transition-colors py-2"
                    onClick={() => {
                      // 항상 필터링 적용
                      setCurruntType(category.key);
                      setIsSidebarOpen(false);

                      // 하위 카테고리가 있다면 아코디언도 토글
                      if (hasChildren) {
                        toggleCategory(category.id);
                      }
                    }}
                  >
                    <span>{category.name}</span>
                  </div>

                  {/* Level 3 하위 카테고리들 (아코디언) */}
                  {isExpanded && hasChildren && (
                    <ul className="ml-4 mt-2 space-y-1">
                      {category.children.map((child) => (
                        <li
                          key={child.key}
                          className="cursor-pointer text-sm hover:text-blue-600 transition-colors py-1 px-2 hover:bg-gray-50 rounded"
                          onClick={(e) => {
                            e.stopPropagation(); // 부모 클릭 이벤트 방지
                            setCurruntType(child.key);
                            setIsSidebarOpen(false);
                          }}
                        >
                          {child.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* 컨텐츠 */}
        <div className="flex-grow p-5">
          {/* 브레드크럼 */}
          {breadcrumbPath.length > 0 && (
            <div className="mb-6 text-xs text-gray-400 font-bold">
              {breadcrumbPath.map((cat, index) => (
                <span key={cat.id}>
                  {index > 0 && <span className="mx-2">{">"}</span>}
                  <span>{cat.name}</span>
                </span>
              ))}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {data.map((product) => (
              <ProductItem
                key={product.id}
                item={product}
                variant="shop"
                showSubTitle={true}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
