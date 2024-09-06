"use client";

import React, { useState } from "react";
import Navbar from "./navbar";
import TextForm from "./textform";
import ButtonPrac from "./buttonPRac";
import ButtonMotion from "./motion-div/button";
import SecondButton from "./motion-div/secondButton";
import ThirdButton from "./motion-div/third-button";
import { SmoothScrollHero } from "./hero";
import { StickyCards } from "./motion-div/sticky-cards";
import { DisappearingFeatures } from "./motion-div/dissapearingFeatures";
import { VelocityHero } from "./motion-div/right-scroller";
import { DragCloseDrawerExample } from "./motion-div/footer-modal";

const Home: React.FC = () => {
  const [Mode, setMode] = useState<boolean>(false);
  return (
    <main>
      <Navbar />
      <SmoothScrollHero />
      <StickyCards />
        {/* <TextForm />
        <ButtonPrac />
        <ButtonPrac /> */}
        <div className="flex flex-col h-[30vh] gap-10 sm:flex-row items-center bg-black justify-evenly">
          <ButtonMotion />
          <SecondButton />
          <ThirdButton />
        </div>
        <VelocityHero />
        <DisappearingFeatures />
        <div>
          <DragCloseDrawerExample />
        </div>
    </main>
  );
};

export default Home;
