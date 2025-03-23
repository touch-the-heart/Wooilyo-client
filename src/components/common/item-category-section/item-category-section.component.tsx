"use client";

import { useEffect, useRef, useState } from "react";
import { ItemCategoryList } from ".";

export const ItemCategorySection = () => {
  const [isSticky, setIsSticky] = useState(false);
  const categorySectionRef = useRef<HTMLDivElement | null>(null);
  const originalPositionRef = useRef<number | null>(null);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 원래 위치 저장
    if (categorySectionRef.current) {
      originalPositionRef.current = categorySectionRef.current.offsetTop;
    }

    const handleScroll = () => {
      if (categorySectionRef.current && originalPositionRef.current !== null) {
        const scrollPosition = window.scrollY;
        const headerHeight = 72; // 헤더 높이
        
        // 스크롤을 내릴 때 헤더 아래에 도달하면 고정
        if (scrollPosition >= originalPositionRef.current - headerHeight) {
          setIsSticky(true);
        }
        // 스크롤을 올릴 때 원래 위치에 도달하면 고정 해제
        else {
          setIsSticky(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex justify-center w-full">
      <div
        ref={categorySectionRef}
        className={`w-full max-w-[80%] transition-all duration-300 ${
          isSticky ? "fixed top-[72px] z-40 bg-white" : ""
        }`}
      >
        <ItemCategoryList />
      </div>
    </div>
  );
};
