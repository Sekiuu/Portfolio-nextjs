import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
function AboutPage() {
  return (
    <div className='flex justify-center flex-col mx-[15em] pt-[5em] text-white'>
      <h1 className='text-8xl  hover:cursor-default'>ประวัติ</h1>
      <div className='my-10 flex justify-between  hover:cursor-default'>
        <div className='mr-[8em] w-full'>
          <div className='w-full text-xl'>
            ชื่อ : นายมุนินทร ดรลิเคน | วันเกิด : 12 กรกฎาคม 2006 
            <br/>เชื้อชาติ : ไทย | สัญชาติ : ไทย
          </div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci sapiente molestias iste magni 
          rem optio quia ducimus excepturi ex labore, aliquid corporis facere nam distinctio earum dolorem! 
          Eius, perferendis accusantium?</p>
          <br/>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci sapiente molestias iste magni 
          rem optio quia ducimus excepturi ex labore, aliquid corporis facere nam distinctio earum dolorem! 
          Eius, perferendis accusantium?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci sapiente molestias iste magni 
          rem optio quia ducimus excepturi ex labore, aliquid corporis facere nam distinctio earum dolorem!
          Eius, perferendis accusantium?
          </p>
        </div>
        <Image src="/images/about-profile.jpg" alt='my photo' width={300} height={512} />
      </div>
    </div>
  )
}

export default AboutPage