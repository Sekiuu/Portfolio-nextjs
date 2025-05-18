"use client"
import { useState } from "react";
import { Services_data } from "../datas/data";
import Image from "next/image";

function ServicesContent() {
    const [service, setService] = useState(Services_data.at(0))
    return (
        <section id='services' className="w-3/4 max-w-[768px] mx-auto my-10 mt-20 py-20 text-center text-greenL border-t">
            <h1 className="font-bold text-6xl my-5">บริการของเรา</h1>
            <hr className="w-3/5 mx-auto mb-5 rounded-md border-2 border-gray-500" />
            <div className="grid grid-cols-2 gap-x-10 gap-y-5 shadow-lg shadow-darksky/50 p-5 rounded-xl">
                <Image
                    src={'/images/icon/no_img.svg'}
                    alt="img"
                    width={1024}
                    height={720}
                    className="bg-white object-cover rounded-md"
                />
                {/* service content */}
                <div className="space-y-8">
                    <h1 className="font-bold text-4xl text-center">{service.title}</h1>
                    <p className="text-base mx-auto w-[19em]">{service.description}</p>
                    <div className=" text-greenL2 flex flex-col h-[45%] justify-around text-left">
                        {service.serviceDetails.map((data, index) => (
                            <li className="" key={index}> {data} </li>
                        ))}
                    </div>
                </div>
                {/* service nav */}
                <div className="flex w-full p-2 justify-around col-span-2 max-h-[128px]
                    transition-all bg-greenL rounded-md shadow-md shadow-greenL2/50">
                    {Services_data.map((item, index) => (
                        <Image key={index}
                            src={'/images/icon/no_img.svg'}
                            width={64} height={64} alt=""
                            className={`hover:cursor-pointer p-2 rounded-full
                                     ${item == service ? 'shadow-inner  shadow-greenN/50 ' : 'shadow-md shadow-darksky/50'}`}
                            onClick={() => {
                                setService(item)
                            }} />
                    ))}
                    <a className="hover:cursor-pointer p-2 rounded-full hover:shadow-xl  hover:shadow-greenN/50
                            shadow-md shadow-darksky/50 text-dark2 flex justify-center items-center w-[64px]"
                        href="/services"
                    >
                        <h1>More</h1>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default ServicesContent