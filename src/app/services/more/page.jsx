"use client"
import React from 'react'
import Image from 'next/image'
import { Services_data } from '@/app/datas/data'
function servicesInfo() {
  const service = Services_data[0]
  return (
    <section id='services' className="md:w-3/4 max-w-[768px] mx-auto py-10 text-center text-greenL">
      <h1 className="font-bold lg:text-6xl text-5xl my-5">{service.title}</h1>
      <hr className="w-3/5 mx-auto mb-5 rounded-md border-2 border-gray-500" />
      <div className="lg:grid grid-cols-2 max-lg:flex flex-col md:p-5 p-2 rounded-xl border">
        <Image
          src={'/images/icon/no_img.svg'}
          alt="img"
          width={1024}
          height={720}
          className="bg-white object-cover rounded-md max-w-[320px] mx-auto aspect-square"
        />
        {/* service content */}
        <div className="my-auto aspect-square">
          <p className="text-xl mx-auto">{service.description_ful}</p>
        </div>
        {/* services detail */}

        {
          service.serviceDetails.map((item, index) => (
            <div className=" text-greenL2 flex flex-col justify-around text-xl text-left max-lg:w-fit max-lg:mx-auto" key={index}>
              <p>{item}</p>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default servicesInfo