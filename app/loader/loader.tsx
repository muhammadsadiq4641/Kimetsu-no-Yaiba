import React from "react";
import { motion } from "framer-motion";

interface BarProps {
  delay: number;
  color?: string;
  height?: number;
  width?: number;
}

const Bar: React.FC<BarProps> = ({
  delay,
  color = "#4fd1c5",
  height = 16,
  width = 6,
}) => {
  return (
    <motion.div
      animate={{
        y: [0, 20, 20, -height / 18, 0],
        scaleY: [0.9, 0.3, 0.3, 0.4, 1],
        scaleX: [1, 0.8, 0.9, 0.8, 1],
      }}
      transition={{
        repeat: Infinity,
        duration: 1.2,
        ease: "easeInOut",
        delay,
        times: [0, 0.2, 0.4, 0.6, 1],
      }}
      style={{
        backgroundColor: color,
        width,
        height,
        borderRadius: "10px",
        filter: `brightness(1.1) drop-shadow(0 0 5px ${color})`,
        transformOrigin: "bottom",
      }}
    />
  );
};

interface WavyLoaderProps {
  barCount?: number;
  color?: string;
  barHeight?: number;
  barWidth?: number;
  spacing?: number;
}

const WavyLoader: React.FC<WavyLoaderProps> = ({
  barCount = 3,
  color = "#4fd1c5",
  barHeight = 60,
  barWidth = 50,
  spacing = 10,
}) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.11)", // Light black background (30% opacity)
        backdropFilter: "blur(10px)", // Backdrop blur effect
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          height: barHeight * 1.5,
          gap: spacing,
          zIndex: 9999,
        }}
      >
        {[...Array(barCount)].map((_, index) => (
          <Bar
            key={index}
            delay={index * 0.2}
            color={color}
            height={barHeight}
            width={barWidth}
          />
        ))}
      </div>
    </div>
  );
};

export default WavyLoader;
