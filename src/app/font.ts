import { Roboto, Nanum_Gothic } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"], // Roboto는 한글 미지원
  weight: ["300", "400", "700"], // 필요한 두께 설정
  variable: "--font-roboto", // Tailwind에서 사용할 변수명
});

export const nanumGothic = Nanum_Gothic({
  subsets: ["latin"], // 한글과 영문을 모두 지원
  weight: ["400", "700", "800"], // 필요한 두께 설정
  variable: "--font-nanum-gothic",
});
