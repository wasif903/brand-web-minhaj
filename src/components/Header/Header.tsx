import Image from "next/image";
import Link from "next/link";

import Button from "../Button/Button";
import { useRouter } from "next/navigation";
import { CircleX, Menu } from "lucide-react";
import { useState } from "react";

const Header = ({ fixedHead }: { fixedHead?: boolean }) => {
  const [isSidebar, setIsSidebar] = useState(false);
  const router = useRouter();

  return (
    <>
      <header
        className={`${
          fixedHead ? "absolute top-0 z-50" : "z-50 relative"
        } border-gray-200 w-full 2xl:px-85 sm:px-40 px-10 h-20 flex items-center justify-between `}
      >
        <Image src={"/Images/Logo.png"} alt="Logo" width={80} height={80} />
        <nav className="hidden lg:flex space-x-6 xl:space-x-8 z-1">
          <Link
            href="/"
            className="text-sm text-whiteHeadingColor hover:text-textBlue transition fontJakartaSemiBold"
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className="text-sm text-whiteHeadingColor hover:text-textBlue transition fontJakartaSemiBold"
          >
            About
          </Link>
          <Link
            href="/service/123"
            className="text-sm text-whiteHeadingColor hover:text-textBlue transition fontJakartaSemiBold"
          >
            Services
          </Link>
          <Link
            href="#"
            className="text-sm text-whiteHeadingColor hover:text-textBlue transition fontJakartaSemiBold"
          >
            Resources ▼
          </Link>
          <Link
            href="/contact-us"
            className="text-sm text-whiteHeadingColor hover:text-textBlue transition fontJakartaSemiBold"
          >
            Contact
          </Link>
        </nav>

        <Button
          name="Contact"
          style={{ paddingBlock: "0.5rem", paddingInline: "2rem" }}
          onClick={() => router.push("/contact-us")}
          className="lg:flex hidden"
        />

        <Menu className="lg:hidden flex" onClick={() => setIsSidebar(true)} />
      </header>
      <div
        className={`h-screen w-80 bg-white fixed  top-0  rounded-tl-lg rounded-bl-2xl px-5 py-9 flex flex-col gap-10 transition-all duration-500  ${
          isSidebar ? "z-50 right-0 " : "-right-full z-0"
        }`}
      >
        <div className="flex items-center justify-between">
          <Image src={"/Images/Logo.png"} alt="Logo" width={80} height={80} />
          <CircleX
            className="cursor-pointer"
            onClick={() => setIsSidebar(false)}
          />
        </div>
        <nav className="lg:hidden flex flex-col ">
          <Link
            href="/"
            className="text-lg border-b py-5 text-textColor hover:text-textBlue transition fontJakartaSemiBold"
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className="text-lg border-b py-5 text-textColor hover:text-textBlue transition fontJakartaSemiBold"
          >
            About
          </Link>
          <Link
            href="/service/123"
            className="text-lg border-b py-5 text-textColor hover:text-textBlue transition fontJakartaSemiBold"
          >
            Services
          </Link>
          <Link
            href="#"
            className="text-lg border-b py-5 text-textColor hover:text-textBlue transition fontJakartaSemiBold"
          >
            Resources ▼
          </Link>
          <Link
            href="/contact-us"
            className="text-lg border-b py-5 text-textColor hover:text-textBlue transition fontJakartaSemiBold"
          >
            Contact
          </Link>
        </nav>

        <Button
          name="Contact"
          style={{ paddingBlock: "0.5rem", paddingInline: "2rem" }}
          onClick={() => router.push("/contact-us")}
          className="flex lg:hidden"
        />
      </div>
      <div
        className={`h-screen w-full lg:hidden flex bg-black/15 absolute right-0 top-0 ${
          isSidebar ? "z-40 opacity-100" : "z-0 opacity-0"
        } transition-all duration-500`}
      />
    </>
  );
};

export default Header;
