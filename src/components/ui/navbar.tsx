"use client";
import Link from "next/link";
import { CartIcon } from "@/assets/icons/cart";
import { HomeIcon } from "@/assets/icons/home";
import { CategoryIcon } from "@/assets/icons/category";
import { UserIcon } from "@/assets/icons/user";
import { SearchIcon } from "@/assets/icons/search";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar(props: { auth: "anonymous" | "authenticated" }) {
  const [activePath, setActivePath] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    setActivePath(pathname as string);
  }, [pathname]);

  const Links = [
    {
      ref: <HomeIcon fill={activePath === "/"} />,
      href: "/",
      className: "p-2 hover:bg-gray-100 transition-all ease-in rounded-md",
    },
    {
      ref: <SearchIcon fill={activePath === "/search"} />,
      href: "/search",
      className: "p-2 hover:bg-gray-100 transition-all ease-in rounded-md",
    },
    {
      ref: <CartIcon fill={activePath === "/cart"} />,
      href: "/cart",
      className: "p-2 hover:bg-gray-100 transition-all ease-in rounded-md",
    },
    {
      ref: <CategoryIcon fill={activePath === "/category"} />,
      href: "/category",
      className: "p-2 hover:bg-gray-100 transition-all ease-in rounded-md",
    },
    {
      ref: (
        <UserIcon
          fill={activePath === "/profile" || activePath === "/auth/login"}
        />
      ),
      href: `${props.auth === "authenticated" ? "/profile" : "/auth/login"}`,
      className: "p-2 hover:bg-gray-100 transition-all ease-in rounded-md",
    },
  ];

  return (
    <nav className="bg-[#ffffffcc] backdrop-blur-sm p-2 fixed bottom-0 md:top-0 md:bottom-auto shadow-sm w-full z-10">
      <div className="flex md:justify-between justify-evenly">
        <Link href="/" className="md:block hidden">
          <h1 className="mt-2 text-3xl font-bold text-gray-900 bold direction-end">
            Alfdinar
          </h1>
        </Link>
        <div className="flex space-x-4 order-1">
          {Links.map((link, idx) => (
            <>
              <Link
                type="button"
                data-twe-ripple-init
                data-twe-ripple-color="dark"
                key={idx}
                href={link.href}
                className={`${link.className} transition duration-200 ease-in-out hover:bg-primary-accent-300 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0`}
              >
                {link.ref}
              </Link>
            </>
          ))}
        </div>
      </div>
    </nav>
  );
}
