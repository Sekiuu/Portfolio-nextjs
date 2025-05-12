import React from "react";
import Image from "next/image";
import Link from "next/link";
function Footer() {
  return <footer className="bg-greenD1 border-t-2 border-greenL grid grid-cols-3 text-white py-5 px-10">
    <div className="flex flex-col justify-center">
      <Image
        alt="logo"
        src={"/images/MUNIN_logo.svg"}
        width={128}
        height={128}
        className="my-2"
      />
    </div>
    <div className="flex justify-end col-span-2">
      <div className="flex flex-col items-center space-y-2">
        <h1 className="text-2xl">- NAVIGATION -</h1>
        <div className="flex flex-col space-y-2 text-greenD2">
          <Link
            href="/"
            className=" flex space-x-5 items-center">
            <h2 className="text-2xl">Home</h2>
          </Link>
          <Link
            href="/skills"
            className=" flex space-x-5 items-center">
            <h2 className="text-2xl">Skill</h2>
          </Link>
          <Link
            href="/contact"
            className=" flex space-x-5 items-center">
            <h2 className="text-2xl">Contact</h2>
          </Link>
        </div>
      </div>

      <div className="flex justify-end">
        <div className="grid grid-cols-2 gap-2 mx-10">
          <div className="col-span-2 flex flex-col justify-center">
            <h1 className="text-2xl mb-2"> - CONTACT - </h1>
          </div>
          <Image
            src="/images/icon/calling.png"
            alt="my picture"
            width={64}
            height={64}
            className="w-[42px] mx-auto"
          />
          <Image
            src="/images/icon/mail.png"
            alt="my picture"
            width={64}
            height={64}
            className="w-[42px] mx-auto"
          />
          <Image
            src="/images/icon/git.png"
            alt="my picture"
            width={64}
            height={64}
            className="w-[42px] mx-auto"
          />
          <Image
            src="/images/icon/ig.png"
            alt="my picture"
            width={64}
            height={64}
            className="w-[42px] mx-auto"
          />
        </div>
      </div>
    </div>
    <p> &#169; created by muninthon 2024</p>
  </footer>;
}

export default Footer;
