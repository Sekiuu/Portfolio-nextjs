"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
function Nav() {
  const [openMenu, setOpenMenu] = useState(false);
  const [lastPathname, setLastPathname] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    if (lastPathname != pathname) {
      setOpenMenu(false);
    }
    setLastPathname(pathname);
  });

  // Define the active class for the glowing effect
  const activeClass =
    "hover:cursor-pointer border-greenL lg:bg-greenD2 border-greenL italic";
  const inactiveClass = "border-greenL hover:underline hover:cursor-pointer";

  return (
    <nav className="h-[10%] z-10 xl:text-2xl text-xl flex text-greenL w-full justify-between items-center transition-all duration-[0.5s] bg-greenN/10 max-md:fixed">
      {/* LOGO */}
      <Image
        alt="logo"
        src={"/images/MUNIN_logo.svg"}
        width={64}
        height={64}
        className="mx-5 my-auto h-[80%]"
      />

      {/* MENU ICON */}
      <button
        className="px-5 hover:cursor-pointer float-right max-lg:flex justify-center hidden h-[80%]"
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
        className={`text-center mx-5 z-40 flex max-lg:transition-all max-lg:duration-500 transform max-lg:inset-0 max-lg:fixed max-lg:flex-col items-center justify-center max-lg:space-y-10  ${openMenu
          ? "max-lg:translate-y-0 max-lg:opacity-100"
          : "max-lg:-translate-y-full max-lg:opacity-0 max-lg:pointer-events-none"
          }`}
        onClick={() => setOpenMenu(false)}
      >
        <Link
          href="/"
          className={`flex justify-center p-5 max-lg:mx-auto w-[150px] space-x-5 max-lg:border-b-1 transform hover:scale-110 rounded-md
             ${pathname == "/" ? activeClass : inactiveClass}`}
        >
          <Image
            src="/images/icon/nav/home.png"
            width={32}
            height={32}
            className="object-cover aspect-square"
          />
          <h2>Home</h2>
        </Link>
        <Link
<<<<<<< HEAD
          href="/services"
          className={`flex justify-center p-5 max-lg:mx-auto w-[150px] space-x-5 max-lg:border-b-1 rounded-md
           ${pathname == "/services" ? activeClass : inactiveClass}`}
=======
          href="/skills"
          className={`flex justify-center p-5 max-lg:mx-auto w-[150px] space-x-5 max-lg:border-b-1 transform hover:scale-110 rounded-md
           ${pathname == "/skills" ? activeClass : inactiveClass}`}
>>>>>>> 78eb9ca83c24212436e3f3ded870b1495a776fdd
        >
          <Image
            src="/images/icon/nav/work.png"
            width={32}
            height={32}
            className="object-cover aspect-square"
          />
          <h2>Services</h2>
        </Link>
        <Link
          href="/contact"
<<<<<<< HEAD
          className={`flex justify-center p-5 max-lg:mx-auto w-[150px] space-x-5 max-lg:border-b-1 rounded-md
=======
          className={`flex justify-center p-5 max-lg:mx-auto wl w-[150px] space-x-5 max-lg:border-b-1 transform hover:scale-110 rounded-md
>>>>>>> 78eb9ca83c24212436e3f3ded870b1495a776fdd
           ${pathname == "/contact" ? activeClass : inactiveClass}`}
        >
          <Image
            src="/images/icon/nav/contact.png"
            width={32}
            height={32}
            className="object-cover aspect-square"
          />
          <h2>Contact</h2>
        </Link>
        {/* <Link href='/about' className={`flex justify-center p-5 w-[150px] space-x-5
           ${pathname == '/about' ? activeClass : inactiveClass}`}>
            <Image src="/images/icon/nav/i-icon.png" width={32} height={24} className='object-cover' />
            <h2>About</h2>
          </Link> */}
      </ul>
    </nav>
  );
}

export default Nav;
