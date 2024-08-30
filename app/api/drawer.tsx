"use client";
import React from "react";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const Drawer = ({ isOpen, onClose }: Props) => {
  return (
    <motion.div
      className="fixed flex justify-end items-center inset-0 w-full h-full bg-black bg-opacity-30 backdrop-blur-sm z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.5 }}
      transition={{ duration: 0.15 }}
    >
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.5 }}
        className="h-full bg-[#fff] p-4 w-[200px] "
        onClick={(e) => e.stopPropagation()}
      >
        <IoMdClose className="text-black text-2xl mb-4" onClick={onClose} />
        <div  className="flex flex-col text-black  justify-between gap-8">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Design</a>
          <a href="#">Security</a>
          <a href="#">Project</a>
        </div>
        <div className="flex flex-col items-center mt-5 gap-4">
              <button className="border-2 border-[#4239391c] px-3 rounded">
                Log In
              </button>
              <button className="border-2 border-[#4239391c] px-3 rounded">
                Sign Up
              </button>
            </div>
      </motion.div>
    </motion.div>
  );
};

export default Drawer;
