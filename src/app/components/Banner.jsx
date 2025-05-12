import React from "react";
import Image from "next/image";
function Banner() {
    return (
        <section className="flex xl:px-[15em]  px-[1em] py-[3.5em] w-full justify-center shadow-lg text-white md:aspect-video aspect-square">
            {/* bg */}
            <Image
                src={"/images/bg_myport.png"}
                alt="bg"
                fill
                className="-z-40 absolute blur-sm"
            />
            <div className="flex justify-between items-center text-center">
                <div className="hover:cursor-default overflow-hidden transform max-[1024px]:scale-75 space-y-10 ">
                    <h1 className="md:text-8xl text-5xl">มุนินทร ดรลิเคน</h1>
                    <h3 className="md:text-2xl my-5 hover:font-bold hover:transition-all transition-all">
                        Front-end | Game-Dev
                    </h3>
                    <h3 className="md:text-2xl text-xl my-5">
                        รับทำเว็บไซต์พื้นฐาน แปลงดีไซน์ให้เป็นเว็บสวย
                        พร้อมลุยทุกโปรเจกต์ ไม่ว่าจะเล็กหรือใหญ่
                    </h3>
                </div>
            </div>
        </section>
    );
}

export default Banner;
