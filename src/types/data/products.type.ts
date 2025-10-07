export interface PRODUCT {
  id: number;
  name: string;
  subName: string;
  description: string;
  shortDescription: string;
  isVisible: boolean;
  createdAt: string;
  updatedAt: string;
  images: PRODUCT_IMAGE[];
  categories: PRODUCT_CATEGORY[];
  details: PRODUCT_DETAIL[];
}

export interface PRODUCT_IMAGE {
  url: string;
  displayOrder: number;
  type: string;
}

export interface PRODUCT_CATEGORY {
  id: number;
  productId: number;
  categoryId: number;
  category: CATEGORY;
}

export interface CATEGORY {
  id: number;
  key: string;
  name: string;
  level: number;
  createdAt: string;
  parentId: number | null;
}

export interface PRODUCT_DETAIL {
  size: string;
  price: number;
}
