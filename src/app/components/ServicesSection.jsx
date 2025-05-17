"use client"
import { useState } from "react";
import { Features, Services_data } from "../datas/data";
import Image from "next/image";
function ServicesSection() {
    const [service, setService] = useState(Services_data[0])

    const featuresCard = (max_array_lenght = 3,
        sectionClass = 'grid grid-cols-3 gap-5 w-5/6 mx-auto p-5 bg-greenN rounded-xl shadow-md shadow-greenL/50',
        elementClass = "p-5 flex flex-col items-center justify-center rounded-md text-center bg-greenL space-y-4",
        img_class = "w-1/4", h1_class = "text-2xl", p_class = "text-black/50"
    ) =>
    (<section className={sectionClass}>
        {Features.map((item, index) => (
            index < max_array_lenght ?
                <div key={index}
                    className={elementClass}>
                    <Image
                        src={'/images/icon/no_img.svg'}
                        width={128}
                        height={128}
                        alt=""
                        className={img_class}
                    />
                    <h1 className={h1_class}>{item.title}</h1>
                    <p className={p_class}>{item.des}</p>
                </div> : ''
        ))
        }
    </section >
    )

    return (
        <div className="w-full bg-dark1 py-5 pt-20 border-t border-greenL">
            {/* features */}
            {featuresCard(6)}
            {/* primary content */}
            <section className="w-3/4 max-w-[720px] mx-auto my-10 mt-20 text-center text-greenL border-t">
                <h1 className="text-6xl my-10">บริการของเรา</h1>
                <div className="grid grid-cols-2 gap-x-10 gap-y-5">
                    <Image
                        src={'/images/icon/no_img.svg'}
                        alt="img"
                        width={1024}
                        height={720}
                        className="bg-white object-cover"
                    />

                    <div className="space-y-10">
                        <h1 className="font-bold text-4xl">{service.title}</h1>
                        <p className="text-base">{service.description}</p>
                    </div>

                    <div className="flex w-full p-2 justify-around col-span-2 max-h-[128px]
                    transition-all bg-greenL rounded-md">
                        {Services_data.map((item, index) => (
                            <Image key={index}
                                src={'/images/icon/no_img.svg'}
                                width={64} height={64} alt=""
                                className={`hover:cursor-pointer p-2 rounded-full shadow-black/50 
                                     ${item == service ? 'shadow-md' : 'shadow-inner'}`}
                                onClick={() => {
                                    setService(item)
                                }} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ServicesSection