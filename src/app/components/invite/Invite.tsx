// components/InviteCard.js
"use client";
import { useState } from "react";

const InviteCard = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    const email = "zubryckyj@icloud.com";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
      });
  };

  return (
    <div className=" text-white  py-5 rounded-lg flex items-center ">
      <div className="flex-shrink-0"></div>
      <div>
        <h2 className="text-2xl font-bold">Vytvořme něco dalšího!</h2>
        <p className="mt-2">Potřebujete nové webové stránky?</p>
        <p className="mt-4">
          <span className="font-bold">Napište mi </span>
          <span
            className="hover:text-purple-400 transition-colors duration-700 transform cursor-pointer"
            onClick={copyToClipboard}
          >
            zubryckyj@icloud.com
          </span>
        </p>
      </div>
    </div>
  );
};

export default InviteCard;
