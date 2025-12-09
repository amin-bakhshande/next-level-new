"use client";
import { ThemeSwitcher } from "@/context/thepm";
import LoginModal from "./LoginModal";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center py-4 px-6 shadow-md bg-amber-50 dark:bg-gray-900  text-gray-800 dark:text-gray-300 ">
        <div className="text-2xl font-bold text-gray-800 dark:text-amber-50">
          بایورنت
        </div>
        <nav className="hidden md:flex gap-6  text-gray-800 dark:text-amber-50  ">
          <Link href="/"> خانه </Link>
          <Link href="/mortgage-and-house-rent">رهن و اجاره</Link>
          <Link href="/houseReserve">رزرو سریع</Link>
          <a href="#">مقالات</a>
          <a href="#">درباره ما</a>
        </nav>
        <div className="flex gap-2">
          <ThemeSwitcher />
          <button
            onClick={() => setIsOpen(true)}
            className="bg-orange-500/80 text-amber-800 py-1 px-4 rounded-full cursor-pointer scale-3d hover:scale-105 transition-all duration-200"
          >
            ورود / ثبت‌نام
          </button>
        </div>
      </header>
      <LoginModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Header;
