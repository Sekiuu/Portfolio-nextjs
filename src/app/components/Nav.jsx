"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
function Nav() {

  const pathname = usePathname();

  // Define the active class for the glowing effect
  const activeClass = 'hover:cursor-pointer bg-zinc-800 border-t-2 border-blue-500 italic py-5 w-[200px]';
  const inactiveClass = 'border-r-2 border-zinc-800 hover:underline hover:cursor-pointer py-5 w-[200px]';

  return (
    <div>
      <nav className='xl:text-2xl text-xl flex bg-zinc-900 text-white xl:px-[8em] px-[3em] justify-center shadow-md'>
        <ul className='flex text-center'>
        <li className={pathname === '/' ? activeClass : (inactiveClass + " border-l-2")}>
            <Link href='/' className='p-5'> Home</Link>
          </li>
          <li className={pathname === '/skills' ? activeClass : inactiveClass}>
            <Link href='/skills' className='p-5'> Skills</Link>
          </li>
          <li className={pathname === '/about' ? activeClass : inactiveClass}>
            <Link href='/about' className='p-5'> About</Link>
          </li>
          <li className={pathname === '/education' ? activeClass : inactiveClass}>
            <Link href='/education' className='p-5'> Education</Link>
          </li>
          <li className={pathname === '/contact' ? activeClass : inactiveClass}>
            <Link href='/contact' className='p-5'> Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav