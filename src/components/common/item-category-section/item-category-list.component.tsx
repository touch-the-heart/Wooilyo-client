"use client";

import { getCategories } from "@/client";
import { useCategoryContext } from "@/context/category-context";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export const ItemCategoryList = () => {
  const { setCurrentCategory } = useCategoryContext();
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      getCategories({
        query: {
          level: "2",
          parentKey: "shop",
        },
      }),
  });
  console.log("CATEGORY_DATA", data);
  useEffect(() => {}, []);

  return (
    <div className="flex flex-row border-t-[3px] border-b-[1px] border-gray-900 h-[60px] items-center gap-5 md:gap-20 px-5 sm:px-10">
      {data?.data?.map((e) => {
        return (
          <li
            key={e.key}
            className="list-none cursor-pointer"
            onClick={() => setCurrentCategory(e.key)}
          >
            {e.name}
          </li>
        );
      })}
    </div>
  );
};
