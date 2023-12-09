"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-6 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2 ">
          <Image
            src="/square.jpeg"
            alt="sawan"
            width={325}
            height={200}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5 md:pl-24 lg:pl-12 flex flex-col justify-center items-center md:items-start ">
          <h1 className="font-bold text-3xl mt-6 md:mt-0 md:text-5xl">
            Hi, I&#39;m Sawan!
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-extrabold text-transparent w-max bg-[conic-gradient(from_var(--angle)_at_50%_100%,hsl(46deg_97%_65%),hsl(38deg_92%_50%),hsl(26deg_90%_37%),hsl(38deg_92%_50%),hsl(46deg_97%_65%))] animate-fancy bg-clip-text">
              Software Engineer{" "}
            </span>
            from Bengaluru, India. Working towards creating meaningful software.
          </p>

          <Link
            to="portfolio"
            className="text-neutral-100 cursor-pointer shadow-2xl font-semibold flex justify-center items-center w-28 h-12 rounded-lg fancy-button"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Portfolio
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" fill="#fbbf24" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
