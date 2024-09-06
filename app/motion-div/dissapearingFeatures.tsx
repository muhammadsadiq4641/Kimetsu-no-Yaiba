import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import Image from "next/image";

export const DisappearingFeatures = () => {
  return (
    <>
      <div className="relative h-fit bg-[#0A0C0F]">
        <Features />
      </div>

      <div className="h-[30vh] bg-[#0A0C0F]" />
    </>
  );
};

const Features = () => {
  return (
    <div className="relative mx-auto grid h-full w-full max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-2">
      <Copy />
      <Carousel />
    </div>
  );
};

const Copy = () => {
  return (
    <div className="flex h-fit w-full flex-col justify-center py-12 md:sticky md:top-0 md:h-screen">
      <span className="w-fit rounded-full bg-indigo-500 px-4 py-2 text-sm uppercase text-indigo-100">
        Lorem ipsum dolor
      </span>
      <h2 className="mb-4 mt-2 text-5xl text-indigo-100 font-medium leading-tight">
        Kimetsu No Yaiba
      </h2>
      <p className="text-lg text-indigo-400">
        "Demon Slayer" follows Tanjiro Kamado, a young boy who becomes a demon
        slayer after his family is slaughtered by demons. The anime showcases
        intense battles, stunning animation, and deep character development.
      </p>
    </div>
  );
};

const Carousel = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <div className="relative w-full">
      <Gradient />

      <div ref={ref} className="relative z-0 flex flex-col gap-6 md:gap-12">
        <CarouselItem
          scrollYProgress={scrollYProgress}
          position={1}
          numItems={4}
          imageSrc="/assets/images/tanjiro-kamado.jpeg"
        />
        <CarouselItem
          scrollYProgress={scrollYProgress}
          position={2}
          numItems={4}
          imageSrc="/assets/images/anime-girl.jpg"
        />
        <CarouselItem
          scrollYProgress={scrollYProgress}
          position={3}
          numItems={4}
          imageSrc="/assets/images/anime-ninja.jpg"
        />
        <CarouselItem
          scrollYProgress={scrollYProgress}
          position={4}
          numItems={4}
          imageSrc="/assets/images/top-demons.png"
        />
      </div>

      <Buffer />
    </div>
  );
};

const CarouselItem = ({
  scrollYProgress,
  position,
  numItems,
  imageSrc,
}: {
  scrollYProgress: MotionValue<number>;
  position: number;
  numItems: number;
  imageSrc: string;
}) => {
  const stepSize = 1 / numItems;
  const end = stepSize * position;
  const start = end - stepSize;

  const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);
  const scale = useTransform(scrollYProgress, [start, end], [1, 0.75]);

  return (
    <motion.div
      style={{
        opacity,
        scale,
      }}
      className="relative w-full h-[300px] overflow-hidden rounded-2xl bg-transparent"
    >
      <span className="text-lg text-neutral-600">
        <Image
          src={imageSrc}
          alt={`Carousel item ${position}`}
          layout="fill"
          objectFit="contain"
          className="absolute inset-0 rounded-2xl"
        />
      </span>
    </motion.div>
  );
};

const Gradient = () => (
  <div className="sticky top-0 z-10 hidden h-24 w-full bg-gradient-to-b from-[#0A0C0F] to-indigo-50/0 md:block" />
);

const Buffer = () => <div className=" w-full md:h-48" />;
