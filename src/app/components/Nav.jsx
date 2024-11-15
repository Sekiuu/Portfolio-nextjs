"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
function Nav() {

  const pathname = usePathname();

  // Define the active class for the glowing effect
  const activeClass = 'hover:cursor-pointer bg-zinc-800 border-t-2 border-blue-500 italic py-5 w-[200px]';
  const inactiveClass = 'border-r-2 border-zinc-800 hover:underline hover:cursor-pointer py-5 w-[200px]';

  return (
    <nav className='xl:text-2xl text-xl flex bg-zinc-900 text-white xl:px-[8em] px-[3em] justify-center items-center shadow-md
    h-[32px] hover:h-[100px] transition-all duration-[0.5s] overflow-hidden'>
      <ul className='flex text-center'>
        <li className={pathname === '/' ? activeClass : (inactiveClass + " border-l-2")}>
          <Link href='/' className='p-5 flex flex-row items-center space-x-6'>
            <Image src="/images/icon/nav/home.png" width={24} height={24} />
            <h2>Home</h2>
          </Link>
        </li>
        <li className={pathname === '/skills' ? activeClass : inactiveClass}>
          <Link href='/skills' className='p-5 flex flex-row items-center justify-center space-x-6'>
            <Image src="/images/icon/nav/work.png" width={32} height={32} />
            <h2>Skills</h2>
          </Link>
        </li>
        <li className={pathname === '/about' ? activeClass : inactiveClass}>
          <Link href='/about' className='p-5 flex flex-row items-center space-x-6'>
            <Image src="/images/icon/nav/I-icon.png" width={24} height={24} />
            <h2>About</h2>
          </Link>
        </li>
        <li className={pathname === '/education' ? activeClass : inactiveClass}>
          <Link href='/education' className='p-5 flex flex-row items-center space-x-6'>
            <Image src="/images/icon/nav/book.png" width={24} height={24} />
            <h2>Education</h2>
          </Link>
        </li>
        <li className={pathname === '/contact' ? activeClass : inactiveClass}>
          <Link href='/contact' className='p-5 flex flex-row items-center space-x-6'>
            <Image src="/images/icon/nav/contact.png" width={24} height={24} />
            <h2>Contact</h2>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav