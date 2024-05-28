"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HamburgerIcon from '../HamburgerIcon';

const Navbar = () => {
  return (
    <>
      <nav className="flex w-full text-md bg-[#0A0E1B] text-white justify-between items-center p-1">
        <div className="flex items-center ">
          <Image src="/logo.svg" alt="Logo" width={40} height={40} />
          <span className="font-black text-lg easter-egg ml-2">jiri zubryckyj</span>
        </div>
        <div className="hidden custom:flex gap-5 space-x-4">
          <Link href="/" className="hover:underline">Úvod</Link>
          <Link href="/portfolio" className="hover:underline">Portfolio</Link>
          <Link href="/blog" className="hover:underline">Blog</Link>
          <Link href="/kontakt" className="hover:underline">Kontakt</Link>
        </div>
        <div className="hidden custom:flex text-sm">
          <p><a className="hover:text-purple-400 transition-colors duration-700 transform" href="mailto:zubryckyj@icloud.com">zubryckyj@icloud.com</a></p>
        </div>
        <HamburgerIcon />
      </nav>
    </>
  );
};

export default Navbar;
