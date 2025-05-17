"use client"
import React from 'react'
import SkillsPage from '../skills/page'
import Image from 'next/image'
import { Services_data } from '../datas/data'
import { useState } from 'react'

function ServicesPage() {
  const [i, setIndex] = useState(null)
  return (
    <div className='md:w-full w-11/12 mx-auto max-md:pt-[20%] py-6'>
      <section className='lg:w-11/12 md:w-3/5 max-w-[1024px] grid lg:grid-cols-3 grid-cols-1 gap-5 mx-auto'>
        {Services_data.map((data, index) => (
          <div key={index} className='bg-greenL p-5 pb-12 rounded-xl'>
            <Image alt={data.img} src={data.img} width={128} height={128}
              className='w-1/4' />

            <h2 className='text-2xl mb-2'>{data.title}</h2>
            <p className='text-black/60 mb-2'>{data.description}</p>

            <div className='underline hover:cursor-pointer' onClick={() => {
              i == index ? setIndex(null) : setIndex(index)
            }}>
              {
                i == index ? <>price : {data.minCost} - {data.maxCost}</> :
                  <>More</>
              }
            </div>
          </div>
        ))}
      </section>

      {/* specific skill */}
      <div className='bg-greenL rounded-xl flex justify-around p-3 mx-auto my-5 max-w-[1024px] lg:w-11/12 md:w-3/5 max-sm:overflow-x-scroll'>
        <Image src={"/images/icon/services/React.svg"} width={128} height={128} alt='img' className='p-1 w-1/6 max-w-[86px]' />
        <Image src={"/images/icon/services/Next.js.svg"} width={128} height={128} alt='img' className='p-1 w-1/6 max-w-[86px]' />
        <Image src={"/images/icon/services/TailwindCSS.svg"} width={128} height={128} alt='img' className='p-1 w-1/6 max-w-[86px]' />
        <Image src={"/images/icon/services/JavaScript.svg"} width={128} height={128} alt='img' className='p-1 w-1/6 max-w-[86px]' />
        <Image src={"/images/icon/services/HTML5.svg"} width={128} height={128} alt='img' className='p-1 w-1/6 max-w-[86px]' />
      </div>
      {/* <section className='mt-10 border-t border-greenL w-fit mx-auto'>
      <SkillsPage/>
      </section> */}
    </div>
  )
}

export default ServicesPage