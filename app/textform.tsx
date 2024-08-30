"use client";
import { color } from "framer-motion";
import React, { useState } from "react";

const TextForm = () => {
  const [text, setText] = useState("enter the text");
  const [showPreview, setShowPreview] = useState(false);
  const [myStyle, setmyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [btnText, setbtnText] = useState("dark mode");

  const ToggleStyle = () => {
    if (myStyle.color === "black") {
      setmyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setbtnText("light mode");
    } else {
      setmyStyle({
        color: "black",
    backgroundColor: "white",
      });
    }
  };

  const handleUPclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLOWclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearclick = () => {
    setText("");
  };

  const handleONchange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
    setShowPreview(false); // Reset preview when typing
  };

  const handlePreviewClick = () => {
    setShowPreview(!showPreview);
  };

  const calculateWordCount = (text: string) => {
    return text
      .trim()
      .split(/\s+/)
      .filter((word) => word !== "").length;
  };

  const wordCount = calculateWordCount(text);
  const charCount = text.length;
  const readingTime = (0.008 * wordCount).toFixed(2);

  return (
    <div>
      <div className="px-4 rounded-lg py-4" style={myStyle}>
        <button className="bg-gray-400 text-white px-4 py-2 rounded" onClick={ToggleStyle}>{btnText}</button>
        <h1 className="text-3xl mb-2">Enter the text to analyze</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-Label">
            Example Textarea
          </label>
          <textarea
            value={text}
            onChange={handleONchange}
            className="form-control bg-[#ffffff33] backdrop-blur  w-full border border[#504b4b] rounded-lg p-5 outline-1 outline-gray-300"
            id="myBox"
            rows={6}
          ></textarea>
        </div>
        <div className="flex gap-5">
          <button
            onClick={handleUPclick}
            className="px-3 py-2 bg-gray-400 rounded-md text-white"
          >
            Convert to Uppercase
          </button>
          <button
            onClick={handleClearclick}
            className="px-3 py-2 bg-gray-400 rounded-md text-white"
          >
            Clear
          </button>
          <button
            onClick={handleLOWclick}
            className="px-3 py-2 bg-gray-400 rounded-md text-white"
          >
            Convert to Lowercase
          </button>
        </div>
      </div>
      <div className="container mx-auto my-2">
        
        <p className="border w-[250px] px-3 mt-4 py-2 rounded-lg bg-gray-300">
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p className="text-gray-400 mt-4">{readingTime} Minutes read</p>

        <button
          onClick={handlePreviewClick}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Preview
        </button>
        {showPreview && (
          <div>
            <p>{text}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TextForm;
