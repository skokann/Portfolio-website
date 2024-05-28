"use client";

import React, { useEffect } from "react";

export default function TitleRotator() {
  useEffect(() => {
    const titleText = "Jiří Zubryckyj - Web Dev ";
    let index = 0;

    const rotateTitle = () => {
      document.title = titleText.substring(index) + titleText.substring(0, index);
      index = (index + 1) % titleText.length;
    };

    const intervalId = setInterval(rotateTitle, 400); // Adjust the speed by changing the interval (milliseconds)

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return null; // This component doesn't render anything visible
}
