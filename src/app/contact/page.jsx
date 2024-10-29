import React from 'react';
import Image from 'next/image';
function ContactPage() {
  return (
    <div className='flex flex-col items-center justify-center py-[5em]  text-white'>
      <h1 className='text-8xl mb-[1em]'>Contact Me</h1>
      <div className='w-3/5 flex flex-row'>
        <Image src="/images/28781.jpg" alt='my picture' width={300} height={300} />
        <div className='ml-[5em] space-y-5'>
          <div className='w-full flex flex-row space-x-5 text-2xl '>
            <Image src='/images/icon/calling.png' alt='my picture' width={32} height={32} className='w-[32px] h-[32px]'/>
            <p>092-985-3209</p>
          </div>
          <div className='w-full flex flex-row space-x-5 text-2xl'>
            <Image src='/images/icon/mail.png' alt='my picture' width={32} height={32} className='w-[32px] h-[32px]'/>
            <p>sega.pamma@gmail.com</p>
          </div>
          <div className='w-full flex flex-row space-x-5 text-2xl'>
            <Image src='/images/icon/house.png' alt='my picture' width={32} height={32} className='w-[32px] h-[32px]' />
            <p>100/342 หมู่ 4 ถนนติวานนต์ ตำบลบางกะดี อำเภอเมืองปทุมธานี จังหวัดปทุมธานี 12000</p>
          </div>          
          <div className='w-full flex flex-row space-x-5 text-2xl'>
            <Image src='/images/icon/ig.png' alt='my picture' width={32} height={32} className='w-[32px] h-[32px]' />
            <a href="https://www.instagram.com/iwant2b_ur.puppy/" target="_blank">Instragram</a>
          </div>      
          <div className='w-full flex flex-row space-x-5 text-2xl'>
            <Image src='/images/icon/git.png' alt='my picture' width={32} height={32} className='w-[32px] h-[32px]' />
            <a href="https://github.com/Sekiuu" target="_blank">GitHub</a>
          </div>    
        </div>
      </div>
    </div>
  )
}

export default ContactPage