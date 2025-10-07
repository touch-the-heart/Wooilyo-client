"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();

  return (
    <div className="bg-white border-b-[1px] border-gray-900 sticky top-0 z-50">
      <div className="px-5 sm:px-10 md:px-20 py-5 text-center flex flex-row justify-between">
        <Link href="/">
          <h1 className="text-2xl font-bold text-gray-900 cursor-pointer">
            WooilyoToujunn
          </h1>
        </Link>

        <button className="block md:hidden">☰</button>

        <div className="hidden md:flex flex-row items-center gap-10">
          <li className="list-none cursor-pointer">
            <Link
              href="/shop"
              className={pathname === "/shop" ? "text-blue-600" : ""}
            >
              SHOP
            </Link>
          </li>
          <li className="list-none cursor-pointer">
            <Link
              href="/about"
              className={pathname === "/about" ? "text-blue-600" : ""}
            >
              ABOUT
            </Link>
          </li>
          <li className="list-none cursor-pointer">
            <Link
              href="/collection"
              className={pathname === "/collection" ? "text-blue-600" : ""}
            >
              COLLECTION
            </Link>
          </li>
          <li className="list-none cursor-pointer">
            <Link
              href="/contact"
              className={pathname === "/contact" ? "text-blue-600" : ""}
            >
              Contact
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
};
