"use client"; // this is a client component
import React, { useState } from "react";
import { Link } from "react-scroll/modules";
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
    label: "Why Marvel",
    page: "/",
  },
  {
    label: "Enterprise",
    page: "/",
  },
  {
    label: "Pricing",
    page: "/",
  },
  {
    label: "Sign in",
    page: "/",
  },
];

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <header className="w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 shadow bg-binary-blue border-b border-stone-600">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 sm:py-4 md:py-1">
            <div className="md:py-5 md:block">
              <Image
                src="/asset/logo-white.svg"
                alt="logo"
                width={100}
                height={100}
                style={{ width: "100%", height: "auto" }}
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
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
