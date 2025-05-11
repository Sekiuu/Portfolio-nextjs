"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
function Nav() {

  const pathname = usePathname();

  // Define the active class for the glowing effect
  const activeClass = 'hover:cursor-pointer bg-greenD2 border-greenL italic';
  const inactiveClass = 'border-greenL hover:underline hover:cursor-pointer';

  return (
    <nav className='xl:text-2xl text-xl flex text-white w-full
    transition-all duration-[0.5s] overflow-hidden absolute'>
      <div className='absolute bg-white opacity-10 w- h-full w-full -z-20'/>
      <Image alt='logo' src={'/images/MUNIN_logo.svg'} width={64} height={64} className='mx-auto' />
      <ul className='flex text-center z-10 space-x-5 mx-auto'>
        <Link href='/' className={`flex justify-center p-5 w-[150px] space-x-5
           ${pathname == '/' ? activeClass : inactiveClass}`}>
          <Image src="/images/icon/nav/home.png" width={32} height={24} className='object-cover' />
          <h2>Home</h2>
        </Link>
        <Link href='/skills' className={`flex justify-center p-5 w-[150px] space-x-5
           ${pathname == '/skills' ? activeClass : inactiveClass}`}>
          <Image src="/images/icon/nav/work.png" width={32} height={24} className='object-cover' />
          <h2>Skills</h2>
        </Link>
        <Link href='/contact' className={`flex justify-center p-5 w-[150px] space-x-5
           ${pathname == '/contact' ? activeClass : inactiveClass}`}>
          <Image src="/images/icon/nav/contact.png" width={32} height={24} className='object-cover' />
          <h2>Contact</h2>
        </Link>
        {/* <Link href='/about' className={`flex justify-center p-5 w-[150px] space-x-5
           ${pathname == '/about' ? activeClass : inactiveClass}`}>
            <Image src="/images/icon/nav/i-icon.png" width={32} height={24} className='object-cover' />
            <h2>About</h2>
          </Link> */}
      </ul>
    </nav>
  )
}

export default Nav