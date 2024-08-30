import React from "react";
import Navbar from "./navbar";
import TextForm from "./textform";
import ButtonPrac from "./buttonPRac";

const Home: React.FC = () => {
  return (
    <main className="">
      <Navbar />
      <div className="container mx-auto">
        <TextForm />
        <ButtonPrac />
      </div>
    </main>
  );
};

export default Home;
