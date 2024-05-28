import React from 'react';

export default function Portfolio() {
  return (
    <div className="text-slate-100 h-auto justify-center w-full flex flex-col max-w-7xl my-16 gap-3 px-4">
            <div className="flex text-xl font-bold gap-5">
        <p className="text-4xl text-[#B388FF]">02.</p>
        <h1 className="text-4xl">Má práce</h1>
      </div>
      <div className="lg:flex justify-between lg:gap-40">
        <div className="flex-1">
          <p className="text-lg">
            Tady je pár projektů, na kterých jsem pracoval.


          </p>
        </div>
        </div>
      <div className="grid  grid-cols-1 md:grid-cols-2 gap-3">
        <div className="w-full rounded-md h-96 bg-gray-50"></div>
        <div className="w-full rounded-md   h-96 bg-gray-50">g</div>
        <div className="w-full  rounded-md   h-96 bg-gray-50"></div>
        <div className="w-full  rounded-md  h-96 bg-gray-50"></div>
      </div>
    </div>
  );
}
