import React from "react";
import Image from 'next/image';
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div className="w-full rounded-lg h-96 p-2 bg-[#19213b]">
    <Image src="/autoskola.jpg" alt="portfolio" width={600} height={500} className="rounded-lg h-72 object-cover w-full" />
  </div>
</div>

    </div>
  );
}
