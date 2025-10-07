import { GetCategoriesByIdResponse } from "@/client";
import { ITEM_CATEGORY } from "@/types/data/item-category.type";

export const ITEM_CATEGORIES: GetCategoriesByIdResponse = [
  {
    id: 1,
    key: "set",
    name: "세트",
    level: 2,
    createdAt: "",
    parentId: 2,
  },
  {
    id: 2,
    key: "bowl",
    name: "볼",
    level: 2,
    createdAt: "",
    parentId: 3,
  },
  {
    key: "plate",
    name: "접시",
    level: 2,
  },
  {
    key: "serving",
    name: "서빙",
    level: 2,
  },
  {
    key: "mug",
    name: "머그",
    level: 2,
  },
  {
    key: "dagi",
    name: "다기",
    level: 2,
  },
  {
    key: "object",
    name: "소품",
    level: 2,
  },
  {
    key: "others",
    name: "기타",
    level: 2,
  },
  {
    key: "outlet",
    name: "아울렛",
    level: 2,
  },
];
