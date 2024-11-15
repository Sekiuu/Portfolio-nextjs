"use client"
import Image from "next/image";
export default function Home() {
  const works_port = [
    {
      id: 0,
      src: "/images/works/port-me.png"
    },
    {
      id: 1,
      src: "/images/works/port-p.png"
    },
    {
      id: 2,
      src: "/images/works/port-2.png"
    },
    {
      id: 3,
      src: "/images/works/port-3.png"
    },
    {
      id: 4,
      src: "/images/works/port-4.png"
    },
    {
      id: 5,
      src: "/images/works/port-1.png"
    }
  ]
  const works_futureSkill = [
    {
      id: 0,
      src: "/images/works/fskill-1.png"
    },
    {
      id: 1,
      src: "/images/works/fskill-2.png"
    },
  ]
  const cer_fskill = [
    {
      id: 0,
      src: "/images/future-cer/future-poke-cer.jpg"
    },
    {
      id: 1,
      src: "/images/future-cer/future-chat-app-cer.jpg"
    },
  ]
  return (
    <div>
      <section className="flex xl:px-[15em] px-[1em] pt-[3.5em] w-full justify-center bg-white shadow-lg">
        <div className="flex justify-between items-center max-w-[1024px]">
          <div className="hover:cursor-default overflow-hidden min-w-[516px] transform max-[1024px]:scale-75 ">
            <h3 className="text-2xl mb-5 pl-2 hover:font-bold hover:transition-all transition-all">Front-end | Full-stack</h3>
            <h1 className="text-8xl">มุนินทร <br /> ดรลิเคน</h1>
            <h3 className="text-2xl my-5 pl-2">
              ผู้มีความคิดสร้างสรรค์<br />พร้อมรับมือทุกความท้าทาย
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

      <section className="py-[5em] text-white">
        <h1 className="text-center text-6xl">Performances</h1>
        <hr className="border-t-2 border-white w-[70%] mx-auto" />
        <div className="flex flex-col items-center justify-center  mb-[5em]">
          <h2 className="mt-[3em] mb-[1.5em] text-4xl">รับสร้างเว็บพอร์ตโฟลิโอ</h2>
          <div className="grid grid-cols-3 w-5/6">
            {works_port.map(data => (
              <div key={data.id}
                className="bg-slate-500 m-10 overflow-hidden flex justify-center items-center rounded-[10%] aspect-square 
            border-4 shadow-xl bg-blend-lighten shadow-gray-700
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
                className="bg-slate-500 m-10 overflow-hidden flex justify-center items-center rounded-[10%]
            border-4 shadow-xl bg-blend-lighten shadow-gray-700
            transform hover:scale-[120%] transition-all duration-300">
                <Image src={data.src} width={512} height={512} alt="work" className="h-full object-cover" />
              </div>
            ))}
          </div>
          <div className="flex flex-row space-x-10 items-center w-3/5">
            {cer_fskill.map(data => (
              <div key={data.id}
                className="bg-slate-500 m-10 overflow-hidden flex justify-center items-center rounded-[10%]
            border-4 shadow-xl bg-blend-lighten shadow-gray-700
            transform hover:scale-[120%] transition-all duration-300">
                <Image src={data.src} width={512} height={512} alt="work" className="h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
