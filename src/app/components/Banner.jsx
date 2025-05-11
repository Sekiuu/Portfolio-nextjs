import React from 'react'
import Image from "next/image";
function Banner() {
    return (
        <section className="flex xl:px-[15em]  px-[1em] py-[3.5em] w-full justify-centershadow-lg text-white h-[720px]">
            <Image src={"/images/bg_myport.png"} alt="bg" fill className="-z-40 absolute blur-sm" />
            <div className="flex justify-between items-center max-w-[1024px] text-center">
                <div className="hover:cursor-default overflow-hidden min-w-[516px] transform max-[1024px]:scale-75 space-y-10 ">
                    <h1 className="text-8xl">มุนินทร ดรลิเคน</h1>
                    <h3 className="text-2xl my-5 hover:font-bold hover:transition-all transition-all">Front-end | Game-Dev</h3>
                    <h3 className="text-2xl my-5">
                        รับทำเว็บไซต์พื้นฐาน แปลงดีไซน์ให้เป็นเว็บสวย
                        พร้อมลุยทุกโปรเจกต์ ไม่ว่าจะเล็กหรือใหญ่
                    </h3>
                </div>
            </div>
        </section>
    )
}

export default Banner