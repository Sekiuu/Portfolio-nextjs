"use client"
import React from 'react'
import Image from 'next/image'
import { Services_data } from '../datas/data'

function ServicesPage() {
  return (
    <div className='md:w-full w-11/12 mx-auto max-md:pt-[20%] py-6'>
      <section className='lg:w-11/12 md:w-3/5 max-w-[1024px] grid lg:grid-cols-3 grid-cols-1 gap-5 mx-auto'>
        {Services_data.map((data, index) => (
          <div key={index} className='bg-greenL p-5 pb-12 rounded-xl'>
            <Image alt={data.img} src={data.img} width={128} height={128}
              className='w-1/4' />

            <h2 className='text-2xl mb-2'>{data.title}</h2>
            <p className='text-black/60 mb-2'>{data.description}</p>

            <a href={`services/more?${data.id}`} className='underline hover:cursor-pointer'>
              More
            </a>
          </div>
        ))}
        {/* specific skill */}
        <div className='lg:col-span-3 col-span-1 bg-greenL rounded-xl flex justify-around p-3 max-sm:overflow-x-scroll'>
          <Image src={"/images/icon/services/React.svg"} width={128} height={128} alt='img' className='p-1 w-1/6 max-w-[86px]' />
          <Image src={"/images/icon/services/Next.js.svg"} width={128} height={128} alt='img' className='p-1 w-1/6 max-w-[86px]' />
          <Image src={"/images/icon/services/TailwindCSS.svg"} width={128} height={128} alt='img' className='p-1 w-1/6 max-w-[86px]' />
          <Image src={"/images/icon/services/JavaScript.svg"} width={128} height={128} alt='img' className='p-1 w-1/6 max-w-[86px]' />
          <Image src={"/images/icon/services/HTML5.svg"} width={128} height={128} alt='img' className='p-1 w-1/6 max-w-[86px]' />
        </div>
        <div className='lg:col-span-3 col-span-1 bg-greenL rounded-xl text-center p-5'>
          <h1 className='text-5xl text-dark1 mb-2'> Title </h1>
          <p className='text-xl text-dark2/70 mb-10'> what the benefits of this frame work</p>
          <div className='grid lg:grid-cols-2 grid-cols-1 mx-auto w-4/5 gap-x-[10%] gap-y-10 pb-10'>
            <Image src={'/images/icon/no_img.svg'} alt='' width={720} height={720}
              className='bg-white aspect-square w-3/4 mx-auto' />
            <div>
              <p className='text-dark2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, repellat. Reiciendis, ut! Enim totam quisquam minima! Inventore aliquam expedita repellat! Atque et veritatis quae velit animi labore minima nostrum ex.</p>
            </div>
          </div>
        </div>
      </section>
      {/* <section className='mt-10 border-t border-greenL w-fit mx-auto'>
      <SkillsPage/>
      </section> */}
    </div>
  )
}

export default ServicesPage