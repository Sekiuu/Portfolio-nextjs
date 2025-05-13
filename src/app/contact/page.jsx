import React from "react";
import Image from "next/image";
import { personal_data } from "../datas/data.js";
function ContactPage() {
  return (
    <div className="py-[120px] text-white xl:h">
      <h1 className="lg:text-8xl text-4xl mb-[0.2em] mx-auto w-fit">
        ข้อมูลการติดต่อ
      </h1>
      <div className="min-[375px]:w-4/5 w-[90%] grid md:grid-cols-2 border-t-2 border-gray-200 pt-10 mx-auto space-y-5 text-xl lg:text-2xl">
        <a target="blank" href={`tel:${personal_data.tel}`} className="flex space-x-5 items-center">
          <Image
            src="/images/icon/calling.png"
            alt="my picture"
            width={64}
            height={64}
            className="w-[46px]"
          />
          <p>092-985-3209</p>
        </a>
        <a href={`mailto:${personal_data.gmail}`} className="flex space-x-5 items-center">
          <Image
            src="/images/icon/mail.png"
            alt="my picture"
            width={64}
            height={64}
            className="w-[46px]"
          />
          <p>sega.pamma@gmail.com</p>
        </a>
        <a target="blank" href={personal_data.ig} className="flex  space-x-5 items-center">
          <Image
            src="/images/icon/ig.png"
            alt="my picture"
            width={64}
            height={64}
            className="w-[46px]"
          />
          <p>
            Instragram
          </p>
        </a>
        <a target="blank" href={personal_data.git} className="flex space-x-5 items-center">
          <Image
            src="/images/icon/git.png"
            alt="my picture"
            width={64}
            height={64}
            className="w-[46px]"
          />
          <p>
            GitHub
          </p>
        </a>
      </div>
    </div>
  );
}

export default ContactPage;
