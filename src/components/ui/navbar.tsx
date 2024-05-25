"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "@/assets/images/white.png";
import { getUserOnClient } from "@/app/utils/supabase/client";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#7743DB] backdrop-blur-sm p-3 fixed top-0 w-full shadow-lg">
      <div className="mx-auto flex justify-between items-center">
        <Link href="/">
          <Image src={logo} className="w-10 h-10" alt="Alf-Dinar" />
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="p-3 text-[#FFFBF5] hover:text-gray-300">
            الصفحة الرئيسية
          </Link>
          <Link
            href="/category"
            className="p-3 text-[#FFFBF5] hover:text-gray-300"
          >
            جميع الاقسام
          </Link>
          <Link
            href="/auth/login"
            className=" text-[#7743DB] bg-white p-3 rounded hover:text-gray-300"
          >
            تسجيل الدخول
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#FFFBF5] focus:outline-none"
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
          <Link
            href="/"
            className="block text-[#FFFBF5] hover:text-gray-300 p-2"
          >
            الصفحة الرئيسية
          </Link>
          <Link
            href="/category"
            className="block text-[#FFFBF5] hover:text-gray-300 p-2"
          >
            جميع الاقسام
          </Link>
          <Link
            href="/auth/login"
            className="inline-block text-[#7743DB] rounded bg-[#F7EFE5] hover:text-gray-300 p-2"
          >
            تسجيل الدخول
          </Link>
        </div>
      )}
    </nav>
  );
}
