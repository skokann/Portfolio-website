import React from "react";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Portfolio() {
  return (
    <div className="text-slate-100 h-auto justify-center w-full flex flex-col max-w-7xl my-16 gap-3 px-4">
      <div className="flex text-xl font-bold gap-5">
        <p className="text-4xl text-[#B388FF]">03.</p>
        <h1 className="text-3xl">Má práce</h1>
      </div>
      <div className="lg:flex justify-between lg:gap-40 mb-5">
        <div className="flex-1">
          <p className="text-lg">Zde je několik projektů.</p>
        </div>
      </div>
    </div>
  );
}
