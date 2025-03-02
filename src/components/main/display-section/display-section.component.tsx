"use client";

import { Carousel } from "@/components/common/carousel";
import { DisplayCarouselItem } from "@/types/data";
import { MainDisplayCarouselItem } from ".";

const carouselItems: DisplayCarouselItem[] = [
  {
    key: "displaySectionItem1",
    title: "Distinctive Design",
    description: `Wooilyotojunn’s pottery stands as a blend of minimalist elegance and sophisticated craftsmanship,\neach piece a unique embodiment of artistry.`,
    src: "/static/images/main/main_1.jpg",
  },
  {
    key: "displaySectionItem2",
    title: "Artistic Essence",
    description: `Each creation is a refined masterpiece, where texture and form converge,\nevoking both natural beauty and intricate artistry.`,
    src: "/static/images/main/main_2.jpg",
  },
  {
    key: "displaySectionItem3",
    title: "Versatility and Functionality",
    description: `Crafted for both utility and aesthetic allure,\nthese pieces elevate everyday use while remaining timeless in design.`,
    src: "/static/images/main/main_3.jpg",
  },
];

export const MainDisplaySection = () => {
  return (
    <div className="flex flex-row bg-white justify-center w-full max-w-[80%] mx-auto">
      <Carousel
        items={carouselItems}
        renderItem={(item) => <MainDisplayCarouselItem item={item} />}
      />
    </div>
  );
};
