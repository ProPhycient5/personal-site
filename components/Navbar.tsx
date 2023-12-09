"use client"; // this is a client component
import React, { useState } from "react";
import { Link } from "react-scroll/modules";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import cx from "classnames";
import Image from "next/image";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Portfolio",
    page: "portfolio",
  },
];

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [navbar, setNavbar] = useState(false);

  return (
    <header className="w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-binary-blue dark:border-b dark:border-stone-600">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 sm:py-4 md:py-1">
            <div className="md:py-5 md:block">
              <Image
                src="/asset/logo-blue.svg"
                alt="logo"
                width={100}
                height={50}
                // className="rounded-full shadow-2xl"
              />
            </div>
            <div className="md:hidden">
              <button onClick={() => setNavbar(!navbar)}>
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={cx(
              "flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0",
              { block: navbar },
              { hidden: !navbar }
            )}
          >
            <div className="md:flex md:space-x-6 space-y-8 md:space-y-0 items-center justify-center">
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <Link
                    to={item.page}
                    className={
                      "block lg:inline-block hover:text-neutral-500 cursor-pointer"
                    }
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavbar(!navbar)}
                    key={idx}
                  >
                    {item.label}
                  </Link>
                );
              })}
              {currentTheme === "dark" ? (
                <button
                  className="bg-amber-500 p-2 rounded-xl"
                  onClick={() => setTheme("light")}
                >
                  <RiSunLine size={25} color="black" />
                </button>
              ) : (
                <button
                  className="bg-slate-200 p-2 rounded-xl"
                  onClick={() => setTheme("dark")}
                >
                  <RiMoonFill size={25} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
