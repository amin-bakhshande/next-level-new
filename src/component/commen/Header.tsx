"use client";
import { ThemeSwitcher } from "@/context/thepm";
import LoginModal from "./LoginModal";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  // User,
} from "@heroui/react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const { data: session } = useSession();
  console.log(session);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: "خانه" },
    { href: "/mortgage-and-house-rent", label: "رهن و اجاره" },
    { href: "/houseReserve", label: "رزرو سریع" },
    { href: "/mortgage-details", label: "مقالات" },
    { href: "#", label: "درباره ما" },
  ];

  return (
    <>
      <header
        className={`fixed w-full z-[999] flex justify-between items-center py-4 px-6 shadow-md transition-all duration-300
        bg-amber-50/10 backdrop-blur-md dark:bg-gray-900/10 dark:backdrop-blur-md text-gray-800 dark:text-gray-300
        ${scrolled ? "top-4" : "top-0"}
      `}
      >
        <div className="text-2xl font-bold text-gray-800 dark:text-amber-50">
          بایورنت
        </div>
        <nav className="hidden md:flex gap-6  text-gray-800 dark:text-amber-50  border-none hover:border-r-red-400 ">
          {links.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`transition-colors duration-200 hover:text-orange-600 dark:hover:text-orange-300 ${
                  isActive
                    ? "text-orange-600 dark:text-orange-300 font-bold border-b-2 border-orange-600"
                    : ""
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
        <div className="flex gap-2 items-center">
          <ThemeSwitcher />

          {!session ? (
            <button
              onClick={() => setIsOpen(true)}
              className="bg-orange-500/80 dark:bg-orange-500/90 text-amber-800 dark:text-amber-50 py-1 px-4 rounded-full cursor-pointer hover:scale-105 transition-all duration-200"
            >
              ورود / ثبت‌نام
            </button>
          ) : (
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform cursor-pointer"
                  src={
                    session.user?.image || "https://i.pravatar.cc/150?u=default"
                  }
                  alt={session.user?.name || "User Avatar"}
                  size="md"
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">
                    {session.user?.email || "user@example.com"}
                  </p>
                </DropdownItem>
                <DropdownItem key="settings">My Settings</DropdownItem>
                <DropdownItem key="team_settings">Team Settings</DropdownItem>
                <DropdownItem key="analytics">Analytics</DropdownItem>
                <DropdownItem key="system">System</DropdownItem>
                <DropdownItem key="configurations">Configurations</DropdownItem>
                <DropdownItem key="help_and_feedback">
                  Help & Feedback
                </DropdownItem>
                <DropdownItem
                  key="logout"
                  color="danger"
                  onClick={() => signOut()}
                >
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          )}
        </div>
      </header>
      <LoginModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Header;
