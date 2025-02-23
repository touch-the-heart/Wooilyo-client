"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface CategoryContextType {
  currentCategory: string;
  setCurrentCategory: Dispatch<SetStateAction<string>>;
}

const CategoryContext = createContext<CategoryContextType>({
  currentCategory: "all",
  setCurrentCategory: () => {},
});

const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const [currentCategory, setCurrentCategory] = useState<string>("all");
  return (
    <CategoryContext.Provider value={{ currentCategory, setCurrentCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategoryContext = (): CategoryContextType => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error(
      "useCategoryContext must be used within a CategoryProvider"
    );
  }
  return context;
};
export default CategoryProvider;
