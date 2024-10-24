import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const SPRING_OPTIONS = {
  mass: 1.5,
  stiffness: 500,
  damping: 100,
};

const ButtonMotion = () => {
  const NeuFollowButton = () => {
    const ref = useRef<HTMLButtonElement | null>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const xSpring = useSpring(x, SPRING_OPTIONS);
    const ySpring = useSpring(y, SPRING_OPTIONS);
    const transform = useMotionTemplate`translateX(${xSpring}px) translateY(${ySpring}px)`;

    const handleMove = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (!ref.current) return;
      const { height, width } = ref.current.getBoundingClientRect();
      const { offsetX, offsetY } = e.nativeEvent;

      const xPct = offsetX / width;
      const yPct = 1 - offsetY / height;

      const newY = 12 + yPct * 12;
      const newX = 12 + xPct * 12;

      x.set(newX);
      y.set(-newY);
    };

    const handleReset = () => {
      x.set(0);
      y.set(0);
    };

    return (
      <section className=" py-5">
        <div className="mx-auto h-20 w-full max-w-72 bg-black">
          <motion.button
            ref={ref}
            style={{
              transform,
            }}
            onMouseMove={handleMove}
            onMouseLeave={handleReset}
            onMouseDown={handleReset}
            className="group flex h-full w-full items-center justify-between border-2 border-black bg-white px-8 text-xl font-semibold"
          >
            <Copy>HOVER ME!</Copy>
            <Arrow />
          </motion.button>
        </div>
      </section>
    );
  };

  const Copy = ({ children }: { children: React.ReactNode }) => (
    <span className="relative overflow-hidden">
      <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
        {children}
      </span>
      <span className="absolute left-0 top-0 block translate-y-full transition-transform duration-300 group-hover:translate-y-0">
        {children}
      </span>
    </span>
  );

  const Arrow = () => (
    <div className="pointer-events-none flex h-6 w-6 overflow-hidden text-2xl">
      <FiArrowRight className="shrink-0 -translate-x-full text-red-500 transition-transform duration-300 group-hover:translate-x-0" />
      <FiArrowRight className="shrink-0 -translate-x-full transition-transform duration-300 group-hover:translate-x-0" />
    </div>
  );

  return <NeuFollowButton />;
};

export default ButtonMotion;
