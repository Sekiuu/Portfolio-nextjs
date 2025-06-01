'use client'
import Image from 'next/image'
import { personal_data, Services_data } from '@/app/datas/data'
import { useSearchParams } from 'next/navigation'
function ServiceInfo() {
  const params = useSearchParams();
  const id = parseInt(params.get('id') ?? '', 10)
  const service = Services_data[id]

  if (!service) return <p>Loading</p>

  return (
    <section id='services' className="md:w-3/4 max-w-[768px] mx-auto py-10 text-center text-greenL">
      <h1 className="font-bold lg:text-6xl text-5xl my-5">{service.title}</h1>
      <hr className="w-3/5 mx-auto mb-5 rounded-md border-2 border-gray-500" />
      <div className="flex flex-col md:p-5 p-2 space-y-10 rounded-xl border">
        <Image
          src={'/images/icon/no_img.svg'}
          alt="img"
          width={1024}
          height={720}
          className="bg-white object-cover rounded-md max-w-[620px] mx-auto aspect-video"
        />
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
      {/* previous next */}
      <a href='/services' className='flex w-fit px-5 bg-greenL/10 rounded-md my-5 text-2xl items-center'>
        <Image src={'/images/icon/previous-svgrepo-com.svg'} alt='time' width={46} height={46}
          className='bg-white p-2 rounded-full m-2' />
        <p>go back</p>
      </a>

    </section>
  )
}

export default ServiceInfo