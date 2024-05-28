// components/HamburgerIcon.js
import { useState } from 'react';
import Link from 'next/link';

const HamburgerIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="custom:hidden flex items-center">
      <button onClick={toggleMenu} className="p-2 focus:outline-none">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          ></path>
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-0 right-0 w-full h-screen bg-[#0A0E1B] flex flex-col items-center justify-center z-50">
          <Link href="/" className="p-4 text-white" onClick={toggleMenu}>Úvod</Link>
          <Link href="/portfolio" className="p-4 text-white" onClick={toggleMenu}>Má práce</Link>
          <Link href="/blog" className="p-4 text-white" onClick={toggleMenu}>Blog</Link>
          <Link href="/kontakt" className="p-4 text-white" onClick={toggleMenu}>Kontakt</Link>
          <span className="p-4 text-white">zubryckyj@icloud.com</span>
        </div>
      )}
    </div>
  );
};

export default HamburgerIcon;
