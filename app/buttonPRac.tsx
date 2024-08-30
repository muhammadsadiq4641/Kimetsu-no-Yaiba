"use client";

import React, { useState } from "react";

const ButtonPrac: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("ButtonOne");

  return (
    <div className="flex gap-5 mt-10">
      <button
        onClick={() => setActiveTab("ButtonOne")}
        className={`py-2 px-4 rounded-md ${
          activeTab === "ButtonOne" ? "text-white bg-blue-500" : "text-gray-200  bg-gray-400"
        }`}
      >
        Log In
      </button>
      <button
        onClick={() => setActiveTab("ButtonTwo")}
        className={`py-2 px-4 rounded-md ${
          activeTab === "ButtonTwo" ? "text-white bg-blue-500" : "text-gray-200  bg-gray-400"
        }`}
      >
        Sign Up
      </button>
    </div>
  );
};

export default ButtonPrac;
