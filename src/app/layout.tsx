import { Header } from "@/components/header";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
