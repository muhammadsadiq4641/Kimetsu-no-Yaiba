"use client";
import React from "react";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import ChipTabs from "app/motion-div/navbar-tabs";

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
        className="h-full bg-[#0A121A] p-4 w-[200px] "
        onClick={(e) => e.stopPropagation()}
      >
        <IoMdClose className="text-slate-300 text-2xl mb-4" onClick={onClose} />
        <div className="flex flex-col text-black  justify-between gap-8">
          <ChipTabs />
        </div>
        
      </motion.div>
    </motion.div>
  );
};

export default Drawer;
