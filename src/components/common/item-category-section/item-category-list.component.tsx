"use client";

import { useCategoryContext } from "@/context/category-context";
import { ITEM_CATEGORIES } from "@/data/item-category/item-category.data";
import { ITEM_CATEGORY } from "@/types/data";

const itemCategories: ITEM_CATEGORY[] = [...ITEM_CATEGORIES];

export const ItemCategoryList = () => {
  const { setCurrentCategory } = useCategoryContext();

  return (
    <div className="flex flex-row border-t-[3px] border-b-[1px] border-gray-900 h-[60px] items-center gap-5 md:gap-20 px-5 sm:px-10">
      {itemCategories.map((e) => {
        return (
          <li
            key={e.key}
            className="list-none cursor-pointer"
            onClick={() => setCurrentCategory(e.key)}
          >
            {e.display_value}
          </li>
        );
      })}
    </div>
  );
};
