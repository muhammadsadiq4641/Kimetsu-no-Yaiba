"use client";
import Image from "next/image";
import React, { useState } from "react";
import faqBottomRightCircle from "@assets/images/faqBottomRightCircle.webp";
import faqHoveredBottomRightCircle from "@assets/images/faqHoveredBottomRightCircle.webp";
import faqHoveredBottomLeftCircle from "@assets/images/faqHoveredBottomLeftCircle.webp";
import faqBottomLeftCircle from "@assets/images/faqBottomLeftCircle.webp";
import faqHoveredTopRightCircle from "@assets/images/faqHoveredTopRightCircle.webp";
import faqTopRightCircle from "@assets/images/faqTopRightCircle.webp";
import faqHoveredTopLeftCircle from "@assets/images/faqHoveredTopLeftCircle.webp";
import faqTopLeftCircle from "@assets/images/faqTopLeftCircle.webp";
import { FaqItem } from "@custom-types/global";
import { AnimatePresence, motion } from "framer-motion";

const FaqsCard: React.FC<{ item: FaqItem }> = ({ item }) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const [cardHovered, setCardHovered] = useState<number | null>(null);

  return (
    <div
      className={`border-2 border-[#2D2E30] bg-gray-100 rounded-3xl  px-4 xl:px-8 py-4 sm:min-h-[280px] lg:min-h-[357px] transition-all duration-500 flex flex-col justify-between relative 
       `}
      onMouseEnter={() => {
        setHovered(true);
        setCardHovered(item.id);
      }}
      onMouseLeave={() => {
        setHovered(false);
        setCardHovered(null);
      }}
    >
      <AnimatePresence>
        {cardHovered === item.id && (
          <motion.div
            transition={{ type: "spring", damping: 12 }}
            layoutId="hoveredDiv"
            className="absolute inset-0 w-full h-full bg-whiteLinear rounded-3xl "
          />
        )}
      </AnimatePresence>

      {item.id === 1 ? (
        <div className="absolute bottom-0 right-0 max-lg:hidden ">
          {hovered ? (
            <Image
              src={faqHoveredBottomRightCircle}
              alt="Faq Hovered Bottom Right Circle"
            />
          ) : (
            <Image src={faqBottomRightCircle} alt="Faq Bottom Right Circle" />
          )}
        </div>
      ) : item.id === 2 ? (
        <div className="absolute bottom-0 left-0 max-lg:hidden ">
          {hovered ? (
            <Image
              src={faqHoveredBottomLeftCircle}
              alt="Faq Hovered Bottom Left Circle"
            />
          ) : (
            <Image src={faqBottomLeftCircle} alt="Faq Bottom Left Circle" />
          )}
        </div>
      ) : item.id === 3 ? (
        <div className="absolute top-0 right-0 max-lg:hidden ">
          {hovered ? (
            <Image
              src={faqHoveredTopRightCircle}
              alt="Faq Hovered Top Right Circle"
            />
          ) : (
            <Image src={faqTopRightCircle} alt="Faq Top Right Circle" />
          )}
        </div>
      ) : item.id === 4 ? (
        <div className="absolute top-0 left-0 max-lg:hidden ">
          {hovered ? (
            <Image
              src={faqHoveredTopLeftCircle}
              alt="Faq Hovered Top Left Circle"
            />
          ) : (
            <Image src={faqTopLeftCircle} alt="Faq Top Left Circle" />
          )}
        </div>
      ) : null}

      <h3
        className={`${
          hovered ? "text-black" : "text-white"
        } text-lg sm:text-2xl  relative z-10 `}
      >
        {item.question}
      </h3>

      <div className="relative z-10 max-sm:mt-6 ">
        <p
          className={`${
            hovered ? "text-black" : "text-white"
          } text-lg lg:text-xl`}
        >
          {item.answer}
        </p>
      </div>
    </div>
  );
};

export default FaqsCard;
