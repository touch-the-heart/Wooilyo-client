"use client";

import { ItemCategorySection } from "@/components/common/item-category-section";
import { MainDisplaySection } from "@/components/main/display-section";
import { SearchSection } from "@/components/common/search-section";
import { Gap } from "@/components/common/gap/gap.component";
import { ProductsSection } from "@/components/common/products-section/products-section.component";
import { LogoSection } from "@/components/main/logo-section";
import CategoryProvider from "@/context/category-context";

const Home = () => {
  return (
    <div>
      <MainDisplaySection />
      <Gap flex={"column"} height={100} />
      <LogoSection />
      <Gap flex={"column"} height={100} />
      <CategoryProvider>
        <ItemCategorySection />
        <Gap flex={"column"} height={50} />
        <SearchSection />
        <Gap flex={"column"} height={100} />
        <ProductsSection />
      </CategoryProvider>
    </div>
  );
};

export default Home;
