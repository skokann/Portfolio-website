import React from 'react';
import Link from 'next/link'

export default function Footer() {

    
  return (
    <main className='py-2 flex text-[7px] md:text-sm flex-row-reverse gap-10 '>
         <div className=' flex justify-center  items-center relative'>
      <p className='px-4 text-center'>
        Built by <span className='font-black'>JIRI</span> with <span className="animate-pulse">❤️</span> in CZECHIA
      </p>
    </div>
     <div className="flex items-center gap-4 text-slate-100 py-4">
      <div className="flex items-center justify-center px-3 py-1 border border-yellow-500 rounded-full">
        <span className="text-yellow-500 ">v1.0.0</span>
      </div>
      <div className="text-gray-500 font-mono">
        <p className='text-gray-500 font-mono'>LAST UPDATED 02_06_2024</p>
      </div>
    </div>
    </main>

  );
}


