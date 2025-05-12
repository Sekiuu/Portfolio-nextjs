
"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

function Nav() {
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (openMenu && !event.target.closest('nav')) {
        setOpenMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openMenu]);

  const activeClass = "hover:cursor-pointer bg-greenD2 border-greenL italic";
  const inactiveClass = "border-greenL hover:underline hover:cursor-pointer";

  return (
    <nav className="xl:text-2xl text-xl flex text-greenL w-full transition-all duration-[0.5s] overflow-hidden absolute">
      <div className="absolute bg-greenN opacity-10 w-full h-full -z-20" />
      <Image
        alt="logo"
        src={"/images/MUNIN_logo.svg"}
        width={64}
        height={64}
        className="mx-auto"
      />
      <button 
        className="mx-auto hover:cursor-pointer max-lg:flex hidden"
        onClick={() => setOpenMenu(!openMenu)}
      >
        <Image
          alt="menu"
          src={"/images/icon/icons8-menu.svg"}
          width={64}
          height={64}
        />
      </button>
      <ul className={`text-center z-10 space-x-5 mx-auto flex max-lg:flex-col max-lg:fixed max-lg:top-[64px] max-lg:right-0 max-lg:bg-greenN max-lg:w-[200px] max-lg:space-x-0 max-lg:space-y-2 max-lg:p-4 max-lg:rounded-bl-lg ${openMenu ? 'max-lg:block' : 'max-lg:hidden'}`}>
        <Link
          href="/"
          className={`flex justify-center p-5 w-[150px] space-x-5 ${pathname == "/" ? activeClass : inactiveClass}`}
          onClick={() => setOpenMenu(false)}
        >
          <Image
            src="/images/icon/nav/home.png"
            width={32}
            height={24}
            className="object-cover"
          />
          <h2>Home</h2>
        </Link>
        <Link
          href="/skills"
          className={`flex justify-center p-5 w-[150px] space-x-5 ${pathname == "/skills" ? activeClass : inactiveClass}`}
          onClick={() => setOpenMenu(false)}
        >
          <Image
            src="/images/icon/nav/work.png"
            width={32}
            height={24}
            className="object-cover"
          />
          <h2>Skills</h2>
        </Link>
        <Link
          href="/contact"
          className={`flex justify-center p-5 w-[150px] space-x-5 ${pathname == "/contact" ? activeClass : inactiveClass}`}
          onClick={() => setOpenMenu(false)}
        >
          <Image
            src="/images/icon/nav/contact.png"
            width={32}
            height={24}
            className="object-cover"
          />
          <h2>Contact</h2>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
