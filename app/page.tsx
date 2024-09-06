"use client";

import React, { useState } from "react";
import Navbar from "./navbar";
import TextForm from "./textform";
import ButtonPrac from "./buttonPRac";
import ButtonMotion from "./motion-div/button";
import SecondButton from "./motion-div/secondButton";
import ThirdButton from "./motion-div/third-button";
import { SmoothScrollHero } from "./hero";

const Home: React.FC = () => {
  const [Mode, setMode] = useState<boolean>(false);
  return (
    <main>
      <Navbar />
      <SmoothScrollHero />
      <div className="container mx-auto">
        {/* <TextForm />
        <ButtonPrac />
        <ButtonPrac /> */}
        <div className="flex flex-col gap-10 sm:flex-row items-center justify-between">
          <ButtonMotion />
          <SecondButton />
          <ThirdButton />
        </div>
      </div>
    </main>
  );
};

export default Home;
