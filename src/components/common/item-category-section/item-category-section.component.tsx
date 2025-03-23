"use client";

import { useEffect, useRef, useState } from "react";
import { ItemCategoryList } from ".";

export const ItemCategorySection = () => {
  const [isSticky, setIsSticky] = useState(false);
  const categorySectionRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLElement | null>(null); // 헤더 참조 추가

  useEffect(() => {
    const handleScroll = () => {
      if (categorySectionRef.current && headerRef.current) {
        // 헤더의 높이를 구합니다.
        const headerHeight = headerRef.current.offsetHeight;

        // 카테고리 섹션의 위치가 헤더 아래로 내려갔을 때 고정
        const sectionTop =
          categorySectionRef.current.getBoundingClientRect().top;
        if (sectionTop <= headerHeight) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex justify-center w-full">
      <div
        ref={categorySectionRef}
        className={`w-full max-w-[80%] ${
          isSticky ? "fixed top-0 z-10 bg-white" : ""
        }`}
      >
        <ItemCategoryList />
      </div>
    </div>
  );
};
