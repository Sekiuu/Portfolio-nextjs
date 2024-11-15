"use client"
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
function SkillsPage() {

  const skillsData = [
    {
      id: 0,
      name: "c lang",
      icon: "/images/icon/logo skills/c-program.png",
      discription: "ผมเริ่มเรียนภาษา c เนื่องจากจะใช้สร้างเกมบน unity ผมเคยใช้ภาษา C ทำระบบของเกมมาหลากหลายไม่ว่าจะเป็น movement system , inventory",
    },
    {
      id: 1,
      name: "unity",
      icon: "/images/icon/logo skills/unity.png",
      discription: "เนื่องจากผมสนใจในการสร้างเกมผมจึงเลือกใช้ unity ในการสร้างเกม ผมได้ลองสร้างเกมมาหลายครั้ง แต่ก็ไม่เสร็จสักครั้งเนื่องจากผมทำ graffic ไม่สวย TT",
    },
    {
      id: 2,
      name: "git",
      icon: "/images/icon/logo skills/git.png",
      discription: "ผมได้ใช้ git ในการ deploy web-application ครั้งแรกของผมหลังจากการลองฝึกเขียน Next.js ทำให้ผมได้เปิดโลกมากขึ้น",
    },
    {
      id: 3,
      name: "javascript",
      icon: "/images/icon/logo skills/javascript.png",
      discription: "ผมได้ลองเขียน javascript หลังจากช่วงที่ผมเลิกเขียนโปรแกรมควบคุมหุ่นยนต์ ผมได้มาลองพัฒนาด้านเว็บไซต์ และผมก็ได้เริ่มใช้ javascript ตั่งแต่นั้นเป็นต้นมา",
    },
    {
      id: 4,
      name: "next",
      icon: "/images/icon/logo skills/next.png",
      discription: "หลังจากผมได้ลองฝึกฝนดานการพัฒนาเว็บไปสักพักผมเริ่มหาคอร์สเรียน และ Next เป็น frame work แรกที่ผมได้เรียนรู้ผมได้ลองใช้มันสร้างเว็บขึ้นมาสามเว็บ",
    },
    {
      id: 5,
      name: "tailwind",
      icon: "/images/icon/logo skills/tailwind.png",
      discription: "หนังจากที่ผมได้ลงคอร์สเรียน React และ Next.js ไปผมได้ลงเรียนออีกคอร์สที่สอนเกี่ยวกับ Next.js และในนั้นมีการใช้ Tailwind CSS สอดแทรกด้วยจึงทำให้ผมใช้เป็นตั่งแต่นั้นเป็นต้นมา",
    },
  ]
  const [currentSkill, setCurrentSkill] = useState({
    id: null,
    name: "",
    icon: "",
    discription: "ผมได้เริ่มต้นสนใจด้านโปรแกรมตั่งแต่ยังเด็ก ผมเริ่มต้นเขียนโปรแกรมจากการฝึกสร้างเกม และการแข่งขันเขียนโปรแกรมบังคับหุ่นยนต์หลังจากเริ่มเขียนโปรแกรมมาซักพักผมได้ลองศึกษาการเขียนโปรแกรมอย่างอื่นด้วย สุดท้ายก็ได้มาลองพัฒนาเว็บแอพลิเคชั่น"
  });
  const changeCurrentSkill = (newSkill) => {
    setCurrentSkill(newSkill);
  };

  return (
    <div className='flex w-full justify-center py-[5em] pb-[10em]'>
      <section className='flex w-full mx-[10em] mt-10'>
        <div className='xl:w-1/2 flex flex-col space-y-10 px-[3em] py-10'>
          <h1 className='text-center text-white text-3xl font-bold'>Skills</h1>
          <div className='grid grid-cols-3 gap-x-[5em] gap-y-[3em] w-fit mx-auto text-gray-300'>
            {skillsData.map(data => (
              <div key={data.id}
                className={`transform w-[84px] h-[84px] p-2 rounded-[10%]
                   ${data.name === currentSkill.name ? 'shadow-md shadow-gray-400' : 'hover:scale-[120%]'} 
                   transition-all`}
                onClick={() => changeCurrentSkill(data)}>
                <Image src={data.icon} width={124} height={124} />
                <p className='text-sm text-center pt-2'>{data.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='xl:w-1/2 flex flex-col space-y-10 px-[3em] py-10'>
          <h1 className='text-center text-white text-3xl font-bold'>Discription</h1>
          <div className='text-gray-300 text-center' id="default">
            <p>
              {currentSkill.discription}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SkillsPage