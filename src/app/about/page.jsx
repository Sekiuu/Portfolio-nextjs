import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
function AboutPage() {
  return (
    <div className='flex justify-center xl:mx-[15em] mx-[10em] py-[5em] text-white xl:h-auto'>
      <div className='max-w-[1024px]'>
        <h1 className='text-8xl  hover:cursor-default xl:text-left text-center'>ประวัติส่วนตัว</h1>
        <div className='my-5 pt-5 flex xl:flex-row flex-col xl:justify-between justify-center items-center hover:cursor-default
         border-t-2 border-gray-200'>
          <div className='xl:mr-[5em] xl:text-left text-center w-full max-w-[1024px] min-w-[164px]'>
            <div className='w-full text-xl mb-5'>
              ชื่อ : นายมุนินทร ดรลิเคน <br className='xl:hidden' /> วันเกิด : 12 กรกฎาคม 2006
              <br />เชื้อชาติ : ไทย | สัญชาติ : ไทย
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci sapiente molestias iste magni
              rem optio quia ducimus excepturi ex labore, aliquid corporis facere nam distinctio earum dolorem!
              Eius, perferendis accusantium?</p>
            <br />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci sapiente molestias iste magni
              rem optio quia ducimus excepturi ex labore, aliquid corporis facere nam distinctio earum dolorem!
              Eius, perferendis accusantium?
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci sapiente molestias iste magni
              rem optio quia ducimus excepturi ex labore, aliquid corporis facere nam distinctio earum dolorem!
              Eius, perferendis accusantium?
            </p>
          </div>
          <Image src="/images/about-profile.jpg" alt='my photo' width={512} height={512} 
          className='max-w-[512px] min-w-[116px] max-h-[512px] aspect-[2/3] object-cover xl:w-auto w-1/2 mt-[5em]
          rounded-[24px] xl:mt-auto' />
        </div>
      </div>
    </div>
  )
}

export default AboutPage