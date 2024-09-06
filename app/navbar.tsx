"use client";

import React, { FC, useState } from "react";
import { PiGitlabLogoDuotone } from "react-icons/pi";
import { TbMenuDeep } from "react-icons/tb";
import Drawer from "./api/drawer";
import { AnimatePresence } from "framer-motion";
import ChipTabs from "./motion-div/navbar-tabs";

const Navbar:FC = () => {
  const [isOpen, setisOpen] = useState(false);

  const ShowDrawer = () => {
    setisOpen(true);
  };

  const handleClose = () => {
    setisOpen(false);
  };

  return (
    <div className="bg-[#0a121a]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between py-3">
          <div>
            <PiGitlabLogoDuotone className="text-3xl text-slate-300" />
          </div>
          <div className="flex max-lg:hidden justify-between gap-14">
           <ChipTabs />
          </div>
          <div onClick={ShowDrawer} className="lg:hidden block">
            <TbMenuDeep className="text-slate-300"/>
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
