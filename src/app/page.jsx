"use client"
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="flex xl:px-[15em] px-[1em] pt-[3.5em] w-full justify-center bg-white shadow-lg">
        <div className="flex justify-between items-center max-w-[1024px]">
          <div className="hover:cursor-default overflow-hidden min-w-[516px] transform max-[1024px]:scale-75 ">
            <h3 className="text-2xl mb-5 pl-2 hover:font-bold hover:transition-all transition-all">ผู้กำกับ | ผู้กำกับภาพ</h3>
            <h1 className="text-8xl">มุนินทร <br /> ดรลิเคน</h1>
            <h3 className="text-2xl my-5 pl-2">
              ผู้กำกับมือสมัครเล่น <br /> รักในการถ่ายภาพ และเป็นผู้ร่วมก่อตั้ง E-motion
            </h3>
          </div>
          <div className="overflow-hidden max-w-[512px] w-full"> {/* Container for the Image */}
            <Image
              className="transform hover:scale-110 transition-transform duration-300 w-full"
              src="/images/me02-croped.png"
              alt="My Picture"
              width={720}
              height={720}
            />
          </div>
        </div>
      </section>

      <section className="py-[12em] text-white">
        <h1 className="text-center text-6xl">Performances</h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-3 w-full">
            <div className="bg-slate-500 m-10">
              <Image src="" width={300} height={300} alt="work" />
            </div>
            <div className="bg-slate-500 m-10">
              <Image src="" width={300} height={300} alt="work" />
            </div>
            <div className="bg-slate-500 m-10">
              <Image src="" width={300} height={300} alt="work" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
