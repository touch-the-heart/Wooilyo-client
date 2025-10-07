import { PRODUCT } from "@/types/data";

export const PRODUCTS_DATA: PRODUCT[] = [
  {
    id: 1,
    name: "Classic White Bowl",
    subName: "",
    description:
      "일상적인 식사부터 특별한 식사까지 다양한 용도로 사용할 수 있는 클래식한 디자인의 화이트 볼입니다. 깔끔한 디자인과 적절한 크기로 어떤 식사와도 잘 어울립니다.",
    shortDescription: "심플하고 세련된 디자인의 화이트 볼",
    isVisible: true,
    createdAt: "",
    updatedAt: "",
    images: [
      {
        url: "/static/images/products/bowl_1.jpg",
        displayOrder: 1,
        type: "main",
      },
    ],
    categories: [
      {
        id: 1,
        productId: 1,
        categoryId: 100,
        category: {
          id: 100,
          key: "shop",
          name: "SHOP",
          level: 1,
          createdAt: "",
          parentId: null,
        },
      },
      {
        id: 2,
        productId: 1,
        categoryId: 427,
        category: {
          id: 427,
          key: "boll",
          name: "볼",
          level: 2,
          createdAt: "",
          parentId: 100,
        },
      },
    ],
    details: [
      {
        size: "뚜껑 21 x 21 x 6.5 cm / 540g / 500ml\n볼 21 x 23 x 6.5 cm (손잡이포함) / 690g / 700ml",
        price: 45000,
      },
    ],
  },
  {
    id: 2,
    name: "Modern Black Plate",
    subName: "",
    description:
      "모던한 디자인의 블랙 플레이트입니다. 세련된 색상과 깔끔한 디자인으로 어떤 음식과도 잘 어울립니다. 식사용으로도 좋고, 디저트나 안주를 담기에도 적합합니다.",
    shortDescription: "모던한 디자인의 블랙 플레이트",
    isVisible: true,
    createdAt: "",
    updatedAt: "",
    images: [
      {
        url: "/static/images/products/plate_1.jpg",
        displayOrder: 1,
        type: "main",
      },
    ],
    categories: [
      {
        id: 3,
        productId: 2,
        categoryId: 100,
        category: {
          id: 100,
          key: "shop",
          name: "SHOP",
          level: 1,
          createdAt: "",
          parentId: null,
        },
      },
      {
        id: 4,
        productId: 2,
        categoryId: 433,
        category: {
          id: 433,
          key: "plate",
          name: "접시",
          level: 2,
          createdAt: "",
          parentId: 100,
        },
      },
      {
        id: 4,
        productId: 2,
        categoryId: 450,
        category: {
          id: 450,
          key: "원형접시",
          name: "원형접시",
          level: 3,
          // order: 0,
          createdAt: "2025-08-31T13:07:08.484Z",
          parentId: 433,
        },
      },
    ],
    details: [
      {
        size: `뚜껑 21 x 21 x 6.5 cm / 540g / 500ml\n볼 21 x 23 x 6.5 cm (손잡이포함) / 690g / 700ml`,
        price: 55000,
      },
    ],
  },
  {
    id: 3,
    name: "Traditional Tea Cup Set",
    subName: "",
    description:
      "전통적인 디자인이 돋보이는 티컵 세트입니다. 4개의 컵과 1개의 티포트로 구성되어 있어 가족이나 친구들과 함께 차를 마시기에 적합합니다.",
    shortDescription: "전통적인 디자인의 티컵 세트",
    isVisible: true,
    createdAt: "",
    updatedAt: "",
    images: [
      {
        url: "/static/images/products/cup_1.jpg",
        displayOrder: 1,
        type: "main",
      },
    ],
    categories: [
      {
        id: 5,
        productId: 3,
        categoryId: 100,
        category: {
          id: 100,
          key: "shop",
          name: "SHOP",
          level: 1,
          createdAt: "",
          parentId: null,
        },
      },
      {
        id: 6,
        productId: 3,
        categoryId: 429,
        category: {
          id: 429,
          key: "teapot",
          name: "다기",
          level: 2,
          createdAt: "",
          parentId: 100,
        },
      },
    ],
    details: [
      {
        size: `뚜껑 21 x 21 x 6.5 cm / 540g / 500ml\n볼 21 x 23 x 6.5 cm (손잡이포함) / 690g / 700ml`,
        price: 85000,
      },
    ],
  },
  {
    id: 4,
    name: "매화 보울",
    subName: "",
    description: "",
    shortDescription: "우일료토전의 시그니쳐 매화 라인 보울",
    isVisible: true,
    createdAt: "",
    updatedAt: "",
    images: [
      {
        url: "/static/images/products/bowl_1.jpg",
        displayOrder: 1,
        type: "main",
      },
    ],
    categories: [
      {
        id: 7,
        productId: 4,
        categoryId: 100,
        category: {
          id: 100,
          key: "shop",
          name: "SHOP",
          level: 1,
          createdAt: "",
          parentId: null,
        },
      },
      {
        id: 8,
        productId: 4,
        categoryId: 425,
        category: {
          id: 425,
          key: "serving",
          name: "서빙",
          level: 2,
          createdAt: "",
          parentId: 100,
        },
      },
    ],
    details: [
      {
        size: `뚜껑 21 x 21 x 6.5 cm / 540g / 500ml\n볼 21 x 23 x 6.5 cm (손잡이포함) / 690g / 700ml`,
        price: 30000,
      },
    ],
  },
  {
    id: 5,
    name: "매화 머그",
    subName: "",
    description: "",
    shortDescription: "매화가 만개하기 직전의 모습이 담긴 머그잔",
    isVisible: true,
    createdAt: "",
    updatedAt: "",
    images: [
      {
        url: "/static/images/products/cup_1.jpg",
        displayOrder: 1,
        type: "main",
      },
    ],
    categories: [
      {
        id: 9,
        productId: 5,
        categoryId: 100,
        category: {
          id: 100,
          key: "shop",
          name: "SHOP",
          level: 1,
          createdAt: "",
          parentId: null,
        },
      },
      {
        id: 10,
        productId: 5,
        categoryId: 428,
        category: {
          id: 428,
          key: "mug",
          name: "머그",
          level: 2,
          createdAt: "",
          parentId: 100,
        },
      },
    ],
    details: [
      {
        size: `뚜껑 21 x 21 x 6.5 cm / 540g / 500ml\n볼 21 x 23 x 6.5 cm (손잡이포함) / 690g / 700ml`,
        price: 30000,
      },
    ],
  },
  {
    id: 6,
    name: "토깽이",
    subName: "",
    description: "",
    shortDescription: "계묘년을 기념한 오브제, 토깽이들",
    isVisible: true,
    createdAt: "",
    updatedAt: "",
    images: [
      {
        url: "/static/images/products/object_1.jpg",
        displayOrder: 1,
        type: "main",
      },
    ],
    categories: [
      {
        id: 11,
        productId: 6,
        categoryId: 100,
        category: {
          id: 100,
          key: "shop",
          name: "SHOP",
          level: 1,
          createdAt: "",
          parentId: null,
        },
      },
      {
        id: 12,
        productId: 6,
        categoryId: 426,
        category: {
          id: 426,
          key: "accessory",
          name: "소품",
          level: 2,
          createdAt: "",
          parentId: 100,
        },
      },
    ],
    details: [
      {
        size: `뚜껑 21 x 21 x 6.5 cm / 540g / 500ml\n볼 21 x 23 x 6.5 cm (손잡이포함) / 690g / 700ml`,
        price: 30000,
      },
    ],
  },
];
