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
import Faqs from "./(home)/afo-footer";
import RoadMap from "./(home)/roadmap";
import SpiderCanvas from "./(home)/spider";

const Home: React.FC = () => {
  const [Mode, setMode] = useState<boolean>(false);
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="overflow-hidden">
        <SpiderCanvas />
      </div>
      <SmoothScrollHero />
      <StickyCards />
      {/* <TextForm />
      <ButtonPrac />
      <ButtonPrac /> */}
      {/* <div className="flex flex-col h-[30vh] gap-10 sm:flex-row items-center bg-[#09090B] justify-evenly">
        <ButtonMotion />
        <SecondButton />
        <ThirdButton />
      </div> */}
      <VelocityHero />
      <DisappearingFeatures />
      <div>
        <DragCloseDrawerExample />
      </div>
      <RoadMap />
      <Faqs />
    </main>
  );
};

export default Home;
