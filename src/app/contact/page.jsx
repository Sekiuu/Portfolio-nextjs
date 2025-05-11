import React from 'react';
import Image from 'next/image';
function ContactPage() {
  return (
    <div className='py-[5em] text-white xl:h-auto'>
      <h1 className='text-8xl mb-[0.2em] mx-auto w-fit'>ข้อมูลการติดต่อ</h1>
      <div className='w-3/5 grid grid-cols-2 border-t-2 border-gray-200 pt-10 mx-auto space-y-5 text-2xl'>
        <div className='flex space-x-5 items-center'>
          <Image src='/images/icon/calling.png' alt='my picture' width={64} height={64} className='w-[46px]' />
          <p>092-985-3209</p>
        </div>
        <div className='flex space-x-5 items-center'>
          <Image src='/images/icon/mail.png' alt='my picture' width={64} height={64} className='w-[46px]' />
          <p>sega.pamma@gmail.com</p>
        </div>
        <div className='flex  space-x-5 items-center'>
          <Image src='/images/icon/ig.png' alt='my picture' width={64} height={64} className='w-[46px]' />
          <a href="https://www.instagram.com/iwant2b_ur.puppy/" target="_blank">Instragram</a>
        </div>
        <div className='flex space-x-5 items-center'>
          <Image src='/images/icon/git.png' alt='my picture' width={64} height={64} className='w-[46px]' />
          <a href="https://github.com/Sekiuu" target="_blank">GitHub</a>
        </div>
      </div>
    </div>
  )
}

export default ContactPage