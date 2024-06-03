"use client";
import Link from "next/link";
import { CartIcon } from "@/assets/icons/cart";
import { HomeIcon } from "@/assets/icons/home";
import { CategoryIcon } from "@/assets/icons/category";
import { UserIcon } from "@/assets/icons/user";
import { SearchIcon } from "@/assets/icons/search";

export default function Navbar(props: { auth: null | "authenticated" }) {
  const Links = [
    {
      ref: <HomeIcon />,
      href: "/",
      className: "p-2 hover:bg-gray-100 transition-all ease-in-out rounded-md",
    },
    {
      ref: <SearchIcon />,
      href: "/search",
      className: "p-2 hover:bg-gray-100 transition-all ease-in-out rounded-md",
    },
    {
      ref: <CartIcon w="32" h="32" color="black" />,
      href: "/cart",
      className: "p-2 hover:bg-gray-100 transition-all ease-in-out rounded-md",
    },
    {
      ref: <CategoryIcon />,
      href: "/category",
      className: "p-2 hover:bg-gray-100 transition-all ease-in-out rounded-md",
    },
    {
      ref: <UserIcon />,
      href: `${props.auth === "authenticated" ? "/profile" : "/auth/login"}`,
      className:
        "bg-indigo-600 p-2 rounded-md hover:bg-indigo-400 transition-all ease-in-out",
    },
  ];

  return (
    <nav className="bg-[#ffffffcc] backdrop-blur-sm p-4 fixed bottom-0 md:top-0 md:bottom-auto shadow-sm w-full z-10">
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
