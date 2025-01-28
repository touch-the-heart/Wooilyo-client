import Link from "next/link";

export const Header = () => {
  return (
    <div className="relative bg-white border-b-[1px] border-gray-900">
      <div className="container mx-10 py-5 text-center flex flex-row justify-between">
        <Link href="/">
          <h1 className="text-2xl font-bold text-gray-900 cursor-pointer">
            WooilyoToujunn
          </h1>
        </Link>
        <div className="flex felx-row items-center gap-10">
          <li className="list-none cursor-pointer">
            <Link href="/shop">SHOP</Link>
          </li>
          <li className="list-none cursor-pointer">
            <Link href="/about">ABOUT</Link>
          </li>
          <li className="list-none cursor-pointer">
            <Link href="/collection">COLLECTION</Link>
          </li>
          <li className="list-none cursor-pointer">
            <Link href="/talk">TALK</Link>
          </li>
        </div>
      </div>
    </div>
  );
};
