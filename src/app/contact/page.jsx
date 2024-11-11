import React from 'react';
import Image from 'next/image';
function ContactPage() {
  return (
    <div className='py-[5em] text-white xl:h-auto'>
      <h1 className='text-8xl mb-[0.2em] mx-auto w-fit'>ติดต่อเรา</h1>
      <div className='w-3/5 flex flex-row justify-center items-center border-t-2 border-gray-200 py-[3em] mx-auto'>
        <Image src="/images/28781.jpg" alt='my picture' width={300} height={300} className='rounded-xl'/>
        <div className='ml-[3em] space-y-5 text-2xl'>
          <div className='flex flex-row space-x-5 items-center'>
            <Image src='/images/icon/calling.png' alt='my picture' width={64} height={64} className='w-[46px]'/>
            <p>092-985-3209</p>
          </div>
          <div className='flex flex-row space-x-5 items-center'>
            <Image src='/images/icon/mail.png' alt='my picture' width={64} height={64} className='w-[46px]'/>
            <p>sega.pamma@gmail.com</p>
          </div>
          <div className='flex flex-row space-x-5 items-center'>
            <Image src='/images/icon/ig.png' alt='my picture' width={64} height={64} className='w-[46px]' />
            <a href="https://www.instagram.com/iwant2b_ur.puppy/" target="_blank">Instragram</a>
          </div>      
          <div className='flex flex-row space-x-5 items-center'>
            <Image src='/images/icon/git.png' alt='my picture' width={64} height={64} className='w-[46px]' />
            <a href="https://github.com/Sekiuu" target="_blank">GitHub</a>
          </div>
          <div className='flex flex-row space-x-5 items-center text-xl'>
            <Image src='/images/icon/house.png' alt='my picture' width={64} height={64} className='w-[46px]' />
            <p>100/342 หมู่ 4 ถนนติวานนต์ ตำบลบางกะดี <br/>อำเภอเมืองปทุมธานี จังหวัดปทุมธานี 12000</p>
          </div>          
        </div>
      </div>
    </div>
  )
}

export default ContactPage