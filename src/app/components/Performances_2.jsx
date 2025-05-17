"use client";
import Image from "next/image";
import React from 'react'
import { GridSection } from "../function/unility.jsx";
import { works_port, works_futureSkill, cer_fskill } from "../datas/data.js";
function Performances_2() {
  return (
    <section className="py-[5em] bg-dark1 border-t-2 border-greenN text-greenL">
      <h1 className="text-center md:text-6xl text-4xl font-thin underline decoration-greenN">
        Performances
      </h1>
      {/* grid  */}
      {GridSection(
        3,
        "5/6",
        works_port,
        "รับสร้างเว็บพอร์ตโฟลิโอ",
        "rounded-[24px] aspect-square max-sm:my-5 shadow-xl bg-blend-lighten shadow-greenL transform hover:scale-[120%] transition-all duration-300 ",
        "gap-[10%] max-lg:grid-cols-2 max-sm:flex flex-col max-sm:py-10 px-10",
      )}
      <hr className="border-t-2 border-greenN w-[70%] mx-auto" />

      {GridSection(
        2,
        "5/6",
        works_futureSkill,
        "future skill workshops",
        "rounded-[24px] max-lg:my-10 shadow-xl bg-blend-lighten shadow-greenL transform hover:scale-[120%] transition-all duration-300",
        "gap-[10%] max-md:grid-cols-1 max-lg:w-full px-10 justify-center items-center",
      )}
      {/* grid - cer */}
      {GridSection(
        2,
        "5/6",
        cer_fskill,
        "",
        "rounded-[24px] max-lg:my-10 shadow-xl bg-blend-lighten shadow-greenL transform hover:scale-[120%] transition-all duration-300",
        "lg:gap-[10%] max-lg:flex max-lg:flex-col max-lg:w-full px-10 justify-center items-center",
      )}
    </section>
  )
}

export default Performances_2