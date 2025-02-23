import Image from "next/image";

export const LogoSection = () => {
  return (
    <div className="flex justify-center">
      <Image
        alt="logo"
        src={"/static/images/main/logo.jpg"}
        width={50}
        height={100}
      />
    </div>
  );
};
