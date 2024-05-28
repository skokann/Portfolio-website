import React from 'react';
import Image from 'next/image';

export default function Footer() {

    
  return (
    <main className='py-2 flex flex-row-reverse gap-10 '>
         <div className=' flex justify-center  items-center relative'>
      <div className='flex gap-2 ml-auto'>
        <Image src="/logo.svg" alt="footer" width="25" height="25" />
      </div>
      <p className='px-4 text-center'>
        Built by <span className='font-black'>JIRI</span> with <span className="animate-pulse">❤️</span> in CZECHIA
      </p>
    </div>
     <div className="flex items-center gap-4 text-slate-100 py-4">
      <div className="flex items-center justify-center px-3 py-1 border border-yellow-500 rounded-full">
        <span className="text-yellow-500 ">v1.0.0</span>
      </div>
      <div className="text-gray-500 font-mono">
        LAST UPDATED 28_05_2024
      </div>
    </div>
    </main>

  );
}


