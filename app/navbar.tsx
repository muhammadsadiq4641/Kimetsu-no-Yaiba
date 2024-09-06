"use client";

import React, { FC, useState } from "react";
import { PiGitlabLogoDuotone } from "react-icons/pi";
import { TbMenuDeep } from "react-icons/tb";
import Drawer from "./api/drawer";
import { AnimatePresence } from "framer-motion";

const Navbar:FC = () => {
  const [isOpen, setisOpen] = useState(false);

  const ShowDrawer = () => {
    setisOpen(true);
  };

  const handleClose = () => {
    setisOpen(false);
  };

  return (
    <div className="bg-gray-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-between py-3">
          <div>
            <PiGitlabLogoDuotone className="text-3xl" />
          </div>
          <div className="flex max-lg:hidden justify-between gap-14">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Design</a>
            <a href="#">Security</a>
            <a href="#">Project</a>
            <div className="flex ms-10 gap-4">
              <button className="border-2 border-[#4239391c] px-3 rounded">
                Log In
              </button>
              <button className="border-2 border-[#4239391c] px-3 rounded">
                Sign Up
              </button>
            </div>
          </div>
          <div onClick={ShowDrawer} className="lg:hidden block">
            <TbMenuDeep />
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">

      {isOpen && <Drawer isOpen={isOpen} onClose={handleClose} />}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
