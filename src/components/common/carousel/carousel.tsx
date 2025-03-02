"use client";
import { ReactNode, useEffect, useRef, useState } from "react";

export const Carousel = ({
  renderItem,
  items,
  interval = 3000,
}: {
  renderItem: (item: any) => React.ReactNode;
  items: any[];
  interval?: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // 자동 슬라이드 (사용자가 버튼을 누르면 타이머 초기화)
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(goToNext, interval);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex, interval]);

  // 이전으로 가기
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  // 다음으로 가기
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {renderItem(item)}
          </div>
        ))}
      </div>

      {/* 좌우 이동 버튼 */}
      <button
        onClick={goToPrevious}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 p-2 text-gray-400 hover:text-black transition-opacity"
      >
        ❮
      </button>
      <button
        onClick={goToNext}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 p-2 text-gray-400 hover:text-black transition-opacity"
      >
        ❯
      </button>
    </div>
  );
};
