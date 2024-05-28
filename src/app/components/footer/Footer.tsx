import React from 'react'
import Image from 'next/image'
export default function Footer() {
  return (
    <div className='py-10 flex '>
        <div className='flex gap-2 ml-auto'>
        <Image src="/logo.svg" alt="footer" width="20" height="20"   />
        </div>
      <p className='px-4 '>Built by <span className='font-black'>JIRI</span> with ❤️ in CZECHIA</p>
      <p></p>
    </div>
  )
}
