"use client"
import { useState } from "react";
import { Services_data } from "../datas/data";
import Image from "next/image";

function ServicesContent() {
    const [service, setService] = useState(Services_data.at(0))
    return (
        <section id='services' className="md:w-3/4 max-w-[1024px] mx-auto my-10 mt-20 py-20 text-center text-greenL border-t">
            <h1 className="font-bold lg:text-6xl text-5xl my-5">บริการของเรา</h1>
            <hr className="w-3/5 mx-auto mb-5 rounded-md border-2 border-gray-500" />
            <div className="lg:grid grid-cols-2 max-lg:flex flex-col gap-y-2 max-md:gap-y-5 shadow-lg shadow-darksky/50 md:p-5 p-2 rounded-xl">
                <Image
                    src={service.sample_img[0] ?? "/images/icon/no_img.svg"}
                    alt="img"
                    width={1024}
                    height={720}
                    className={`object-contain ${service.sample_img[0] ?? "bg-white"} rounded-md my-auto mx-auto lg:min-h-[360px] lg:max-w-[500px] w-full`}
                />
                {/* service content */}
                <div className="space-y-8">
                    <h1 className="font-bold text-4xl text-center">{service.title}</h1>
                    <p className="text-base mx-auto w-[19em]">{service.description}</p>
                    <div className=" text-greenL2 flex flex-col w-fit h-fit justify-around text-left mx-auto">
                        {service.serviceDetails.map((data, index) => (
                            <li className="" key={index}> {data} </li>
                        ))}
                    </div>
                </div>
                {/* service nav */}
                <div className="flex w-full p-2 justify-around col-span-2 max-h-[128px] max-lg:order-first
                    transition-all bg-greenL rounded-md shadow-md shadow-greenL2/50 space-x-3">
                    {Services_data.map((item, index) => (
                        <div key={index} className="flex max-md:flex-col justify-center md:space-x-3 items-center">
                            <Image
                                src={item.img}
                                width={64} height={64} alt=""
                                className={`hover:cursor-pointer p-2 rounded-full
                                     ${item == service ? 'shadow-inner  shadow-greenN/50 ' : 'shadow-md shadow-darksky/50 hover:shadow-greenN/50 '}`}
                                onClick={() => {
                                    setService(item)
                                }} />
                            <p className="text-dark1">{item.title}</p>
                        </div>
                    ))}
                    <a className="hover:cursor-pointer p-2 rounded-full hover:shadow-xl  hover:shadow-greenN/50
                            shadow-md shadow-darksky/50 text-dark2 flex justify-center items-center w-[64px]"
                        href={`/services/${service.id}`}
                    >
                        <h1>More</h1>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default ServicesContent