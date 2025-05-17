"use client"
import React from 'react'
import SkillsPage from '../skills/page'
import Image from 'next/image'
import { Services_data } from '../datas/data'
import { useState } from 'react'

export const metadata = {
  title: "Muninthon's Service",
  description: "portfolio of muninthon donliken includes munin's performances and certificates , contact",
  keyword: "portfolio"
};

function ServicesPage() {
  const [i, setIndex] = useState(null)
  return (
    <div className='w-full max-md:py-[20%] py-6'>
      <section className='w-11/12 max-w-[1024px] grid lg:grid-cols-3 md:grid-cols-2 gap-5 mx-auto'>
        {Services_data.map((data, index) => (
          <div key={index} className='bg-greenL p-5 pb-12 rounded-xl'>
            <Image alt='img' src={'/images/icon/no_img.svg'} width={128} height={128}
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
      <section className='mt-10 border-t border-greenL w-fit mx-auto'>
      <SkillsPage/>
      </section>
    </div>
  )
}

export default ServicesPage