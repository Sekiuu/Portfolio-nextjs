'use client'
import Image from 'next/image'
import { personal_data, Services_data } from '@/app/datas/data'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react';
function ServiceInfo() {
  const params = useParams();
  const [service, setService] = useState(null)
  const [open_img, setOpen_img] = useState(false)
  useEffect(() => {
    console.log(params)
    const id = params.id
    setService(Services_data[id])
  })
  if (!service) return (
    <div className='w-full text-center items-center h-[720px] flex justify-center'>
      <h1 className='text-6xl'>
        Loading...
      </h1>
    </div>
  )
  return (

    <section className='py-14'>
      <div id='services' className="md:w-3/4 max-w-[768px] mx-auto lg:py-10 text-center text-greenL">

        <h1 className="font-bold lg:text-6xl text-5xl my-5">{service.title}</h1>
        <hr className="w-3/5 mx-auto mb-5 rounded-md border-2 border-gray-500" />
        <div className="flex flex-col md:p-5 p-2 md:space-y-10 space-y-5 rounded-xl border">
          {
            service.sample_img.length > 0 ?
              <>
                <h1>{service.title} Samples</h1>
                {
                  service.sample_img.map((item, index) => (
                    index > 1 && !open_img ? ""
                      :
                      <Image
                        src={item ?? "/images/icon/no_img.svg"}
                        alt="img"
                        width={1024}
                        height={720}
                        key={index}
                        className={`object-contain bg-white p-1 rounded-md max-w-[620px] w-full mx-auto`}
                      />))
                }
                {
                  service.sample_img.length > 2 ?
                    <div className='bg-greenL/10 underline italic hover:cursor-pointer' onClick={() => {
                      setOpen_img(!open_img)
                    }}>
                      {open_img ? "hide" : "see more?"}
                    </div> : ""
                }
              </>

              : ""
          }


          {/* service content */}
          <div>
            <p className="text-2xl mx-auto">{service.description_ful}</p>
          </div>
          {/* services detail */}
          <div className='flex flex-col list-disc space-y-4 text-left w-fit mx-auto'>
            {
              service.serviceDetails.map((item, index) => (
                <li className=" text-greenL2 text-xl" key={index}>
                  {item}
                </li>
              ))
            }
          </div>
          {/* details section */}
          <div className='bg-greenD2 text-4xl flex space-x-5 justify-center items-center rounded-md p-5'>
            <h1>Details</h1>
          </div>
          <div className='bg-greenL text-black p-5'>
            <h1 className='text-2xl pb-3'>
              {service.servicePrices}
            </h1>
            {
              service.options.length > 0 ?
                <div className='bg-greenD1/20'>
                  <h1 className='text-2xl'>Option{"(ส่วนเสริม)"}</h1>
                  <div className='w-fit mx-auto text-left list-none'>
                    {service.options.map((item, index) => (
                      <li key={index} className='text-base w-full'>
                        {item} {"(บวกเพิ่ม)"}
                      </li>
                    ))}
                  </div>
                </div> : ""
            }
          </div>
          {/* card footer */}
          <div className='flex w-full justify-around'>
            <div className='bg-greenL/10 text-2xl flex space-x-5 justify-center items-center py-2 px-5 w-fit rounded-lg'>
              <Image src={'/images/icon/time-svgrepo-com.svg'} alt='previous' width={46} height={46}
                className='bg-white p-2 rounded-full' />
              <p>{service.time}</p>
            </div>
            <a href={`tel:${personal_data.tel}`}
              className='bg-greenN text-2xl flex space-x-5 justify-center items-center py-2 px-5 rounded-lg'>
              <Image src={'/images/icon/calling.png'} alt='next' width={46} height={46}
                className='bg-white p-2 rounded-full' />
              <p>โทรเลย</p>
            </a>
          </div>


        </div>
      </div>
      {/* previous */}
      <a href='/' className='flex w-fit bg-greenL/10 rounded-md text-xl mt-5 items-center text-white/50 h-6'>
        <Image src={'/images/icon/previous-svgrepo-com.svg'} alt='time' width={46} height={46}
          className='bg-white p-2 rounded-full m-2' />
        <p className='mr-3 ml-2'>go back</p>
      </a>
    </section>
  )
}

export default ServiceInfo