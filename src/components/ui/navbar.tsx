"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "@/assets/images/logo.png";
import { getUserOnClient } from "@/app/utils/supabase/client";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  async function handleUser() {
    try {
      const user = await getUserOnClient();
      setUser(user as any);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  }

  useEffect(() => {
    handleUser();
  }, []);

  const Links = [
    {
      ref: "الصفحة الرئيسية",
      href: "/",
      className:
        "p-3 text-sm text-[#000000] hover:bg-gray-100 transition-all ease-in-out rounded-md",
    },
    {
      ref: "جميع الاقسام",
      href: "/category",
      className:
        "p-3 text-sm text-[#000000] hover:bg-gray-100 transition-all ease-in-out rounded-md",
    },
    {
      ref: "تسجيل الدخول",
      href: "/auth/login",
      className:
        "text-sm text-[#fff] bg-[#000] p-3 rounded-md hover:bg-gray-500 transition-all ease-in-out",
    },
  ];

  return (
    <nav className="bg-[#ffffffcc] backdrop-blur-sm p-4 fixed top-0 shadow-sm w-full z-10">
      <div className="mx-auto flex justify-between items-center">
        <Link href="/">
          {/* <Image src={logo} className="w-10 h-10" alt="Alf-Dinar" /> */}
          <h1 className="text-2xl font-bold text-gray-900 bold direction-center">
            Alfdinar
          </h1>
        </Link>
        <div className="hidden md:flex space-x-4">
          {Links.map((link, idx) => (
            <>
              <Link
                type="button"
                data-twe-ripple-init
                data-twe-ripple-color="dark"
                key={idx + Math.random() * 1000}
                href={link.href}
                className={`${link.className} shadow-primary-3 transition duration-200 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2`}
              >
                {link.ref}
              </Link>
            </>
          ))}
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#000000] focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div
          dir="rtl"
          className="md:hidden mt-4 mr-2 transition transform ease-in-out duration-150"
        >
          {Links.map((link, idx) => (
            <>
              <Link
                type="button"
                data-twe-ripple-init
                data-twe-ripple-color="light"
                key={idx + Math.random() * 1000}
                href={link.href}
                onClick={() =>
                  setTimeout(() => {
                    setIsOpen(!isOpen);
                  }, 400)
                }
                className={`${link.className} block w-full text-center shadow-primary-3 transition duration-200 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2`}
              >
                {link.ref}
              </Link>
            </>
          ))}
        </div>
      )}
    </nav>
  );
}
