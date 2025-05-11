"use client"
import Image from "next/image";
import { works_port, works_futureSkill, cer_fskill } from "./datas/data.js"
import Banner from "./components/Banner.jsx";
export default function Home() {

  return (
    <>
      <Banner/>
      <section className="py-[5em] bg-dark1 border-t-2 border-white text-greenL">
        <h1 className="text-center text-6xl font-bold underline">Performances</h1>
        <div className="flex flex-col items-center justify-center mb-[5em]">
          <h2 className="mt-[3em] mb-[1.5em] text-4xl italic">รับสร้างเว็บพอร์ตโฟลิโอ</h2>
          <div className="grid grid-cols-3 w-5/6">
            {works_port.map(data => (
              <div key={data.id}
                className="m-10 overflow-hidden flex justify-center items-center rounded-[24px] aspect-square 
                shadow-xl bg-blend-lighten shadow-gray-700
            transform hover:scale-[120%] transition-all duration-300">
                <Image src={data.src} width={512} height={512} alt="work" className="h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
        <hr className="border-t-2 border-white w-[70%] mx-auto" />

        <div className="flex flex-col items-center justify-center  mb-[5em]">
          <h2 className="mt-[3em] mb-[1.5em] text-4xl">Future Skills Workshop</h2>
          <div className="flex flex-row space-x-10 items-center w-3/5">
            {works_futureSkill.map(data => (
              <div key={data.id}
                className="bg-slate-500 m-10 overflow-hidden flex justify-center items-center
            shadow-xl bg-blend-lighten shadow-gray-700
            transform hover:scale-[120%] transition-all duration-300">
                <Image src={data.src} width={512} height={512} alt="work" className="h-full object-cover" />
              </div>
            ))}
          </div>
          <div className="flex flex-row space-x-10 items-center w-3/5">
            {cer_fskill.map(data => (
              <div key={data.id}
                className="bg-slate-500 m-10 overflow-hidden flex justify-center items-center rounded-[24px]
            shadow-xl bg-blend-lighten shadow-gray-700
            transform hover:scale-[120%] transition-all duration-300">
                <Image src={data.src} width={512} height={512} alt="work" className="h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
