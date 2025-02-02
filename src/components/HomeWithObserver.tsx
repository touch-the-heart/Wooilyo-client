"use client"; // 클라이언트 컴포넌트로 설정

import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Header } from "./header";

export default function HomeWithObserver() {
  const { ref: section2Ref, inView: section2InView } = useInView({
    triggerOnce: true, // 스크롤 시 반복적으로 애니메이션 실행
    threshold: 0.2, // 30% 이상 보일 때 트리거
  });

  const { ref: section3Ref, inView: section3InView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="flex flex-col bg-gray-50 h-screen">
      {/* Hero Section */}
      <Header />
      {/* Featured Section */}
      <div id="explore" className="flex flex-grow flex-col bg-white">
        {/* feature section 1 */}
        <div className="flex flex-row border-b-[1px] border-gray-100">
          <div className="flex flex-grow flex-col px-10 py-20">
            <h2 className="font-semibold">Distinctive Design</h2>
            <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
              {`Wooilyotojunn’s pottery stands as a blend of minimalist elegance and sophisticated craftsmanship,\neach piece a unique embodiment of artistry.`}
            </p>
          </div>
          <div className="relative w-full md:w-[50%] aspect-[1/1]">
            <Image
              src={"/static/images/main/main_1.jpg"}
              alt="메인1"
              fill
              objectFit="cover"
            />
          </div>
        </div>
        {/* feature section 2 */}
        <div
          ref={section2Ref}
          className={`flex flex-row border-b-[1px] border-gray-100 transform transition-all duration-1000 ${
            section2InView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-20"
          }`}
        >
          <div className="relative w-full md:w-[50%] aspect-[1/1]">
            <Image
              src={"/static/images/main/main_2.jpg"}
              alt="메인2"
              fill
              objectFit="cover"
            />
          </div>
          <div className="flex flex-grow flex-col px-10 py-10">
            <h2 className="font-semibold">Artistic Essence</h2>
            <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
              {`Each creation is a refined masterpiece, where texture and form converge,\nevoking both natural beauty and intricate artistry.`}
            </p>
          </div>
        </div>
        {/* feature section 3 */}
        <div
          ref={section3Ref}
          className={`flex flex-row transform transition-all duration-1000 ${
            section3InView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-20"
          }`}
        >
          <div className="flex flex-grow flex-col px-10 py-10">
            <h2 className="font-semibold">Versatility and Functionality</h2>
            <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
              {`Crafted for both utility and aesthetic allure,\nthese pieces elevate everyday use while remaining timeless in design.`}
            </p>
          </div>
          <div className="relative w-full md:w-[50%] aspect-[1/1]">
            <Image
              src={"/static/images/main/main_3.jpg"}
              alt="메인3"
              fill
              objectFit="cover"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 bg-white border-t-[1px] border-gray-900">
        <div className="container mx-auto px-6 text-center text-gray-300">
          <p>© 2025 WooilyoToujun. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
