"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiArrowDown } from "react-icons/hi";
import { Link as Linki } from "react-scroll/modules";
import { BiDownload } from "react-icons/bi";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Next.js",
  "Jenkin",
  "Jira",
  "Tailwind CSS",
  "Git",
  "GitHub",
];

const AboutSection = () => {
  const handleDownload = () => {
    const resumeFileName = "SawanResume2025.pdf";
    const resumeFilePath = `/${resumeFileName}`;
    const downloadLink = document.createElement("a");
    downloadLink.href = resumeFilePath;
    downloadLink.download = resumeFileName;
    downloadLink.click();
  };
  return (
    <section id="about">
      <div className="my-12 pb-12 md:py-16">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-amber-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 md:mr-4 tracking-wide">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Discover My Story!
            </h1>
            <p>
              Hi, this is Sawan Kumar Das and I am a{" "}
              <span className="font-bold text-amber-500">{"passionate "}</span>,
              <span className="font-bold text-amber-500">{" curious "}</span>
              and
              <span className="font-bold text-amber-500">{" driven"}</span>{" "}
              Software Engineer. With a background in Computational Physics, my
              journey into software engineering has been transformative.
            </p>
            <br />
            <p>
              After earning my master&apos;s in Computational Physics from
              Central University of Punjab, I researched low-dimensional
              materials at CSIR-NCL, publishing my{" "}
              <Link
                className="underline hover:text-amber-500 cursor-pointer"
                href="https://pubs.rsc.org/en/content/articlehtml/2021/ra/d0ra10829d"
                target="_blank"
              >
                &nbsp;first published paper
              </Link>
              . The pandemic disrupted my PhD plans in France, leading me to
              discover and fully embrace my passion for programming,
              transitioning into software engineering.
            </p>
            <br />
            <p>
              I believe in the{" "}
              <span className="font-bold text-amber-500">
                persistent pursuit of your true passions
              </span>{" "}
              as it fosters{" "}
              <span className="font-bold text-amber-500">personal growth </span>
              regardless of the outcomes.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>

            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-3 mt-3 shadow-lg text-gray-600 rounded font-semibold"
                  >
                    {item}
                  </p>
                );
              })}
            </div>
            <Image
              src="/frontend_guy.png"
              alt="cartoon_vector"
              width={400}
              height={500}
              className="hidden md:block md:relative md:bottom-4 md:z-0 md:mt-8"
            />
            <div className="flex justify-center md:justify-start items-center w-full mt-4">
              <button
                onClick={handleDownload}
                className="text-neutral-100 cursor-pointer shadow-2xl font-semibold flex justify-center items-center h-12 rounded-lg fancy-button"
              >
                Resume <BiDownload className="h-6 w-8" />
              </button>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center pt-16">
          <Linki
            to="portfolio"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <HiArrowDown size={35} className="animate-bounce" fill="#fbbf24" />
          </Linki>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
