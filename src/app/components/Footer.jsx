import React from "react";
import Image from "next/image";
import Link from "next/link";
import { personal_data } from "../datas/data.js";
function Footer() {
  return <footer className="bg-greenD1 border-t-2 border-greenL grid grid-cols-4 
  max-lg:grid-cols-3 max-md:grid-cols-2 text-white py-5 md:px-10 max-md:gap-y-10">
    <div className="flex flex-col justify-center lg:col-span-2 max-sm:col-span-2 max-md:items-center">
      <Image
        alt="logo"
        src={"/images/MUNIN_logo.svg"}
        width={128}
        height={128}
        className="my-2"
      />
    </div>

    <div className="flex md:justify-end justify-center max-md:col-span-2 max-md:items-center">
      <div className="flex flex-col items-center space-y-2 text-2xl">
        <h1>- NAVIGATION -</h1>
        <div className="flex flex-col space-y-2 text-greenD2">
          <Link
            href="/"
            className="hover:text-greenL flex space-x-5 items-center">
            <h2>Home</h2>
          </Link>
          <Link
            href="/services"
            className="hover:text-greenL flex space-x-5 items-center">
            <h2>Services</h2>
          </Link>
          <Link
            href="/contact"
            className="hover:text-greenL flex space-x-5 items-center">
            <h2>Contact</h2>
          </Link>
        </div>
      </div>
    </div>
    <div className="flex md:justify-end justify-center max-md:col-span-2 max-md:items-center">
        <div className="grid grid-cols-2 gap-2 mx-10 text-2xl">
          <div className="col-span-2 flex flex-col justify-center">
            <h1 className="mb-2"> - CONTACT - </h1>
          </div>
          <a href={`tel:${personal_data.tel}`}>
            <Image
              src="/images/icon/calling.png"
              alt="my picture"
              width={64}
              height={64}
              className="w-[42px] mx-auto"
            />
          </a>
          <a href={`mailto:${personal_data.gmail}`}>
            <Image
              src="/images/icon/mail.png"
              alt="my picture"
              width={64}
              height={64}
              className="w-[42px] mx-auto"
            />
          </a>
          <a href={personal_data.git} target="blank">
            <Image
              src="/images/icon/git.png"
              alt="my picture"
              width={64}
              height={64}
              className="w-[42px] mx-auto"
            />
          </a>
          <a href={personal_data.ig} target="blank">
            <Image
              src="/images/icon/ig.png"
              alt="my picture"
              width={64}
              height={64}
              className="w-[42px] mx-auto"
            />
          </a>
        </div>
      </div>

    <p className="grid col-span-2 max-md:py-10 text-[1pm] max-sm:text-center"> &#169; created by muninthon 2024</p>
  </footer>;
}

export default Footer;
