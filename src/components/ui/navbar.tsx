"use client";
import Link from "next/link";
import { CartIcon } from "@/assets/icons/cart";
import { HomeIcon } from "@/assets/icons/home";
import { CategoryIcon } from "@/assets/icons/category";
import { UserIcon } from "@/assets/icons/user";
import { SearchIcon } from "@/assets/icons/search";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import logo from "@/assets/images/logo.png";
import Image from "next/image";

export default function Navbar(props: { auth: "anonymous" | "authenticated" }) {
  const [activePath, setActivePath] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    setActivePath(pathname as string);
  }, [pathname]);

  const Links1 = [
    {
      name: " الرئيسية",
      ref: <HomeIcon fill={activePath === "/"} />,
      href: "/",
      className:
        "p-2 hover:bg-gray-100 transition-all ease-in rounded-md w-[64px] grid col-span-12 transition duration-200 ease-in-out hover:bg-primary-accent-300 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 items-center justify-center",
    },
    {
      name: "البحث",
      ref: <SearchIcon fill={activePath === "/search"} />,
      href: "/search",
      className:
        "p-2 hover:bg-gray-100 transition-all ease-in rounded-md w-[64px] grid col-span-12 transition duration-200 ease-in-out hover:bg-primary-accent-300 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 items-center justify-center",
    },
    {
      name: "الاقسام",
      ref: <CategoryIcon fill={activePath === "/category"} />,
      href: "/category",
      className:
        "p-2 hover:bg-gray-100 transition-all ease-in rounded-md w-[64px] grid col-span-12 transition duration-200 ease-in-out hover:bg-primary-accent-300 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 items-center justify-center",
    },
  ];

  const Links2 = [
    {
      name: "السلة",
      ref: <CartIcon fill={activePath === "/cart"} />,
      href: "/cart",
      className:
        "p-2 hover:bg-gray-100 transition-all ease-in rounded-md w-[64px] grid col-span-12 transition duration-200 ease-in-out hover:bg-primary-accent-300 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 items-center justify-center",
    },
    {
      ref: (
        <UserIcon
          fill={activePath === "/profile" || activePath === "/auth/login"}
        />
      ),
      name: "حسابك",
      href: `${props.auth === "authenticated" ? "/profile" : "/auth/login"}`,
      className:
        "p-2 hover:bg-gray-100 transition-all ease-in rounded-md w-[64px] grid col-span-12 transition duration-200 ease-in-out hover:bg-primary-accent-300 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 items-center justify-center",
    },
  ];

  return (
    <>
      <Link
        href="/"
        className="fixed top-0 z-20 block w-full border-b bg-[#ffffffcc] text-center backdrop-blur-sm md:ml-2 md:flex md:w-[25vw] md:border-none md:bg-[#ffffff00]"
      >
        <div className="bold md:direction-start flex justify-center text-xl font-bold text-gray-900 md:p-2 md:text-3xl">
          <Image height={64} width={64} src={logo} alt="" />
        </div>
      </Link>
      <nav className="fixed bottom-0 z-10 flex w-full justify-center border-t bg-[#ffffffcc] p-1 backdrop-blur-sm md:bottom-auto md:top-0 md:justify-between md:border-b md:p-2">
        <div className="hidden w-[136px] md:block"></div>
        <div className="flex justify-center gap-0 text-center md:gap-2 md:pr-2">
          {Links1.map((link, idx) => (
            <>
              <Link
                type="button"
                data-twe-ripple-init
                data-twe-ripple-color="dark"
                key={idx}
                href={link.href}
                className={`${link.className}`}
              >
                <span className="justify-self-center text-center">
                  {link.ref}
                </span>
                <p className="text-center text-[10px]">{link.name}</p>
              </Link>
            </>
          ))}
        </div>
        <div className="flex justify-end gap-0 text-center md:justify-center md:gap-2">
          {Links2.map((link, idx) => (
            <>
              <Link
                type="button"
                data-twe-ripple-init
                data-twe-ripple-color="dark"
                key={idx}
                href={link.href}
                className={`${link.className}`}
              >
                <span className="justify-self-center text-center">
                  {link.ref}
                </span>
                <p className="text-center text-[10px]">{link.name}</p>
              </Link>
            </>
          ))}
        </div>
      </nav>
    </>
  );
}
