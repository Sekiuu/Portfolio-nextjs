"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { skillsData } from "../datas/data.js";
function SkillsPage() {
  //skills data setup
  const [currentSkill, setCurrentSkill] = useState({
    id: null,
    name: "",
    icon: "",
    discription:
      "ผมได้เริ่มต้นสนใจด้านโปรแกรมตั่งแต่ยังเด็ก ผมเริ่มต้นเขียนโปรแกรมจากการฝึกสร้างเกม และการแข่งขันเขียนโปรแกรมบังคับหุ่นยนต์หลังจากเริ่มเขียนโปรแกรมมาซักพักผมได้ลองศึกษาการเขียนโปรแกรมอย่างอื่นด้วย สุดท้ายก็ได้มาลองพัฒนาเว็บแอพลิเคชั่น",
  });
  const changeCurrentSkill = (newSkill) => {
    setCurrentSkill(newSkill);
  };
  //--

  return (
    <section className="flex max-lg:flex-col w-full max-w-[720px] py-5 px-5 lg:justify-around mx-auto">
      <div className="lg:w-1/2 flex flex-col space-y-10 md:px-[3em] py-10">
        <h1 className="text-center text-white text-3xl font-bold">Skills</h1>
        <div className="grid grid-cols-3 max-lg:grid-cols-6 max-sm:grid-cols-3 gap-x-5 gap-y-5 mx-auto text-gray-300">
          {skillsData.map((data) => (
            <div
              key={data.id}
              className={`transform w-[84px] h-[84px] p-2 rounded-[10%]
                 ${data.name === currentSkill.name ? "shadow-md shadow-gray-400" : "hover:scale-[120%]"} 
                 transition-all`}
              onClick={() => changeCurrentSkill(data)}
            >
              <Image src={data.icon} width={124} height={124} />
              <p className="text-sm text-center pt-2">{data.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col space-y-10 md:px-[3em] py-10 lg:w-1/2">
        <h1 className="text-center text-white text-3xl font-bold">
          Discription
        </h1>
        <div className="text-gray-300 text-center" id="default">
          <p>{currentSkill.discription}</p>
        </div>
      </div>
    </section>
  );
}

export default SkillsPage;
