"use client"
import Link from 'next/link';
import Image from 'next/image';
import HamburgerIcon from '../HamburgerIcon';
import { useState } from 'react';
import Kontakt from '@/pages/kontakt';

const Navbar = () => {

 const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
    const email = 'zubryckyj@icloud.com';
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(err => {
      console.error('Could not copy text: ', err);
    });
  };

  return (
    <>
      <nav className="flex w-full text-md bg-[#0A0E1B] text-white  justify-between items-center p-1">
        <div className="flex items-center ">
          <Image src="/logo.svg" alt="Logo" width={40} height={40} />
          <span className="font-black text-lg easter-egg ml-2">jiri zubryckyj</span>
        </div>
        {/*
        </><div className="hidden text-md custom:flex gap-5 space-x-4">
          <Link href="/" className="hover:underline">Úvod</Link>
          <Link href="portfolio" className="hover:underline">Má práce</Link>
          <Link href=" blog" className="hover:underline">Blog</Link>
          <Link href="kontakt" className="hover:underline">Kontakt</Link>
        </div>
        */}
        <div className="hidden custom:flex text-sm">
                <p>
        <span
          className="hover:text-purple-400 transition-colors duration-700 transform cursor-pointer"
          onClick={copyToClipboard}
        >
          zubryckyj@icloud.com
        </span>
      </p>
      {copied && (
        <div className="absolute mt-4 text-[12px] text-[#20C20E] text-center">
          Email copied to clipboard!
        </div>
      )}
        </div>
        {/*
        <HamburgerIcon />
        */}
      </nav>
    </>
  );
};

export default Navbar;
