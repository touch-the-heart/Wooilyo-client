import { Header } from "@/components/header";
import "./globals.css";
import { roboto, nanumGothic } from "./font";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const detectLanguage = (children: React.ReactNode): string => {
    const text = typeof children === "string" ? children : "";
    const hasKorean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(text);

    if (hasKorean) {
      return "ko"; // 한글이 포함되면 'ko'로 설정
    } else {
      return "en"; // 영어가 포함되면 'en'으로 설정
    }
  };
  const language = detectLanguage(children);
  return (
    <html lang={"ko"} className={`${roboto.variable} ${nanumGothic.variable}`}>
      <body>
        <div className="min-h-screen bg-white flex flex-col">
          <Header />
          {children}
          <footer className="py-8 bg-white border-t-[1px] border-gray-900">
            <div className="container mx-auto px-6 text-center text-gray-300">
              <p>© 2025 WooilyoToujun. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
