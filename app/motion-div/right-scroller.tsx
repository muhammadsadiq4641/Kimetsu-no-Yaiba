import React, { useRef } from "react";
import { motion, useScroll, useVelocity, useTransform, useSpring } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import Image from "next/image";
import ImageOne from "@assets/images/image-1.jpg"
import ImageTwo from "@assets/images/image-2.jpg"
import ImageThree from "@assets/images/image-3.jpg"
import Imagefour from "@assets/images/image-4.jpg"
import Imagefive from "@assets/images/image-5.jpg"
import Imagesix from "@assets/images/image-6.jpg"

// Define component with TypeScript
export const VelocityHero: React.FC = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const scrollVelocity = useVelocity(scrollYProgress);

  const skewXRaw = useTransform(scrollVelocity, [-1, 1], ["45deg", "-45deg"]);
  const skewX = useSpring(skewXRaw, { mass: 3, stiffness: 400, damping: 50 });

  const xRaw = useTransform(scrollYProgress, [0, 1], [0, -3000]);
  const x = useSpring(xRaw, { mass: 3, stiffness: 400, damping: 50 });

  return (
    <section ref={targetRef} className="h-[500vh] bg-[#09090B] text-neutral-950">
      <div className="sticky top-0 flex h-screen flex-col justify-between overflow-hidden">
        <CenterCopy />
        <motion.div
          style={{ skewX, x }}
          className="origin-bottom-left whitespace-nowrap flex gap-10 text-7xl font-black uppercase leading-[0.85] md:text-9xl md:leading-[0.85]"
        >
          <Image src={ImageOne} alt="asd"/>
          <Image src={ImageTwo} alt="asd"/>
          <Image src={ImageThree} alt="asd"/>
          <Image src={Imagefour} alt="asd"/>
          <Image src={Imagefive} alt="asd"/>
          <Image src={Imagesix} alt="asd"/>
        </motion.div>
        <ScrollArrow />
      </div>
    </section>
  );
};



const Logo: React.FC = () => {
  return (
    <svg
      width="36"
      height="auto"
      viewBox="0 0 50 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute right-4 top-1/2 h-fit -translate-y-1/2 translate-x-0 fill-neutral-950 md:right-1/2 md:translate-x-1/2"
    >
      <path
        d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
        stopColor="#000000"
      ></path>
      <path
        d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
        stopColor="#000000"
      ></path>
    </svg>
  );
};

const Links: React.FC = () => {
  return (
    <nav className="flex gap-3 text-sm">
      <a href="#">Supply</a>
      <a href="#">Merch</a>
      <a href="#">Locations</a>
    </nav>
  );
};

const CenterCopy: React.FC = () => {
  return (
    <div className="flex items-center md:mt-28 mt-56 justify-center px-4">
      <img
        src="/assets/images/image-7.jpg"
        alt="Placeholder image"
        className="mr-2 h-full shadow-2xl shadow-[#ffffff75] w-20 bg-neutral-200 object-cover"
      />
      <h1 className="text-3xl font-bold text-neutral-400 sm:text-5xl md:text-7xl">
        Some of The  <br />
        Best Characters <br />
        of all Time{" "}
        <span className="inline-block -skew-x-[18deg] font-black text-slate-300">
          Zincc
        </span>
      </h1>
    </div>
  );
};

const ScrollArrow: React.FC = () => {
  return (
    <>
      <div className="absolute left-4 top-1/2 hidden -translate-y-1/2 text-xs lg:block">
        <span
          style={{
            writingMode: "vertical-lr",
          }}
        >
          SCROLL
        </span>
        <FiArrowDown className="mx-auto" />
      </div>
      <div className="absolute right-4 top-1/2 hidden -translate-y-1/2 text-xs lg:block">
        <span
          style={{
            writingMode: "vertical-lr",
          }}
        >
          SCROLL
        </span>
        <FiArrowDown className="mx-auto" />
      </div>
    </>
  );
};
