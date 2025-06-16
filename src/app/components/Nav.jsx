"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
function Nav() {
  const [openMenu, setOpenMenu] = useState(false);
  const [showLogo, setShowLogo] = useState(true);
  const [lastPathname, setLastPathname] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    if (lastPathname != pathname) {
      setOpenMenu(false);
    }
    setLastPathname(pathname);

    //show logo update
    const scrollhanddle = () => {
      const scr = window.scrollY
      console.log(scr)
      setShowLogo(scr < 64)
    }
    scrollhanddle()
    window.addEventListener('scroll', scrollhanddle)
    return () => window.removeEventListener('scroll', scrollhanddle)
  });

  return (
    <nav className="md:h-[10%] h-[48px] z-10 xl:text-2xl text-xl flex text-greenL w-full
     justify-between items-center transition-all duration-[0.5s] md:bg-greenN/10 max-md:fixed max-md:top-0">
      {/* LOGO */}
      <div 
      className={`flex items-end space-x-3 xl:mx-[5%] sm:mx-5 my-auto h-[90%] transition-all max-lg:transform ${showLogo ? 'translate-y-0' : '-translate-y-[64px]'}`}>
        <Image
          alt="logo"
          src={"/images/MUNIN_logo.svg"}
          width={64}
          height={64}
          className="h-full"
        />
        <div className="h-full flex flex-col justify-center">
        <h1 className="text-2xl max-sm:text-sm">.M-Dev.</h1>
        <p className="text-base max-sm:text-xs">Create Website is my job</p>
        </div>
      </div>

      {/* MENU ICON */}
      <button
        className=" bg-dark1/50 rounded-xl hover:cursor-pointer max-lg:flex fixed md:h-[10%] h-[48px] right-2 justify-center hidden"
        onClick={() => {
          setOpenMenu(!openMenu);
          console.log(openMenu);
        }}
      >
        <Image
          alt="logo"
          src={"/images/icon/icons8-menu.svg"}
          width={64}
          height={64}
        />
      </button>

      {/* navbar backdrop */}
      {openMenu ? <div
        className="fixed inset-0 z-30 bg-dark1/50 backdrop-blur-md"
      /> : ""}

      {/* NAV BAR */}
      <ul
        className={`text-center mx-5 z-40 space-x-5 flex max-lg:transition-all max-lg:duration-500 max-lg:transform max-lg:inset-0 max-lg:fixed max-lg:flex-col items-center justify-center max-lg:space-y-10  ${openMenu
          ? "max-lg:translate-y-0 max-lg:opacity-100"
          : "max-lg:-translate-y-full max-lg:opacity-0 max-lg:pointer-events-none"
          }`}
        onClick={() => setOpenMenu(false)}
      >
        <Link
          href="/"
          className={`flex justify-center p-5 max-lg:mx-auto w-[200px] space-x-5 max-lg:border-b-1 transform hover:scale-110 r`}
        >
          <Image
            src="/images/icon/nav/home.png"
            width={32}
            height={32}
            className="object-cover aspect-square"
            alt="img"
          />
          <h2>Home</h2>
        </Link>
        <Link
          href="#services"
          className={`flex justify-center p-5 max-lg:mx-auto w-[200px] space-x-5 max-lg:border-b-1 transform hover:scale-110 rounded-md`}
        >
          <Image
            src="/images/icon/nav/work.png"
            width={32}
            height={32}
            className="object-cover aspect-square"
            alt="img"
          />
          <h2>Services</h2>
        </Link>
        <Link
          href="#contact"
          className={`flex justify-center p-5 max-lg:mx-auto w-[200px] space-x-5 max-lg:border-b-1 transform hover:scale-110 rounded-md`}>
          <Image
            src="/images/icon/nav/contact.png"
            width={32}
            height={32}
            className="object-cover aspect-square"
            alt="img"
          />
          <h2>Contact</h2>
        </Link>
        {/* <Link href='/about' className={`flex justify-center p-5 w-[200px] space-x-5
           ${pathname == '/about' ? activeClass : inactiveClass}`}>
            <Image src="/images/icon/nav/i-icon.png" width={32} height={24} className='object-cover' />
            <h2>About</h2>
          </Link> */}
      </ul>
    </nav>
  );
}

export default Nav;
