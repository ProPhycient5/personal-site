"use client"; // this is a client component
import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-6 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-3/5 md:pl-24 lg:pl-12 flex flex-col justify-center items-center md:items-start ">
          <h1 className="font-medium text-lg mt-6 md:mt-0 md:text-4xl">
            Let&#39;s build the future of design, now.
          </h1>
          <p className="text-sm mt-4 mb-6 md:text-base">
            Create amazing tools and integration for over 1 million
            <br /> users or customize Marvel for your own team.
          </p>
        </div>
        <div className="md:mt-2">
          <Image
            src="/asset/illustration.png"
            alt="illustration"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
            // className="rounded-full shadow-2xl"
          />
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center "></div>
    </section>
  );
};

export default HeroSection;
