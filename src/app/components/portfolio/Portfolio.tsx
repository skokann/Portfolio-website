import React from "react";
import Image from 'next/image';
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Portfolio() {
  return (
    <div className="text-slate-100 h-auto justify-center w-full flex flex-col max-w-7xl my-16 gap-3 px-4">
      <div className="flex text-xl font-bold gap-5">
        <p className="text-4xl text-[#B388FF]">02.</p>
        <h1 className="text-4xl">Má práce</h1>
      </div>
      <div className="lg:flex justify-between lg:gap-40 mb-5">
        <div className="flex-1">
          <p className="text-lg">
            Zde je několik projektů, na které jsem hrdý. Prozkoumejte mé nejlepší výtvory.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1  gap-5 lg:grid-cols-2">
        <div className="flex flex-col  gap-2">
          <Image src="/autoskola.jpg" width={500} height={300} alt="autoskola26" />
            <h2 className="text-2xl">Autoskola26</h2>
          <p className="text-lg">
             Web pro novou autoškolu v Kadani, Návrh a realizace potisků pro autoškolské auto, Konfigurace a správa emailových účtů.
          </p>
          <a href="https://autoskola26.cz" target="_blank" className="text-lg text-[#B388FF] hover:text-[#FF8A80]">
            Zobrazit <FaExternalLinkAlt className="inline" />
          </a>
        </div>
    </div>
  </div>
  );
}
