import React from "react";
import Image from "next/image";
function Banner() {
    return (
        <section className="flex w-full justify-center shadow-lg text-white md:aspect-[2/1] aspect-square">
            {/* bg */}
            <Image
                src={"/images/bg_myport.png"}
                alt="bg"
                width={1440}
                height={1024}
                className="-z-40 absolute blur-sm object-cover h-full"
            />
            <div className="flex justify-between items-center text-center">
                <div className="hover:cursor-default overflow-hidden md:space-y-10 max-md:pt-10">
                    <h1 className="md:text-8xl max-sm:text-4xl text-5xl">มุนินทร ดรลิเคน</h1>
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
