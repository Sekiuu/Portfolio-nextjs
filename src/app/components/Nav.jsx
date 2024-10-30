import React from 'react'
import Link from 'next/link'
function Nav() {
  return (
    <div>
      <nav className='xl:text-2xl text-xl flex bg-teal-900 text-white py-[32px] xl:px-[8em] px-[3em] justify-between shadow-md'>
        <div className='hover:underline hover:cursor-pointer'><Link href='/'> Home</Link></div>
        <ul className='flex xl:space-x-10 space-x-5'>
          <li className='hover:underline hover:cursor-pointer'><Link href='/about'> About</Link></li>
          <li className='hover:underline hover:cursor-pointer'><Link href='/skills'> Skills</Link></li>
          <li className='hover:underline hover:cursor-pointer'><Link href='/education'> Education</Link></li>
          <li className='hover:underline hover:cursor-pointer'><Link href='/contact'> Contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav