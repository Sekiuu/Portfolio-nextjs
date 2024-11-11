import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function EducationPage() {
  return (
    <div className='py-[5em] pb-[10em]'>
      <h1 className='text-8xl mx-[2em] text-white'>ประวัติการศึกษา</h1>
      <section className='my-5 border-t-2 border-gray-200 mx-[10em]'>
        <div className='flex items-center justify-between w-full px-10 mx-auto h-[212px] border-b-2 border-gray-500'>
          <div className='bg-slate-950 shadow-lg p-5 rounded-[100px] h-[164px] w-[164px] flex justify-center items-center'>
            <Image src="/images/edu/kanarat-logo.png" width={216} height={216} alt='Kanaratbumrungpathumtani' />
          </div>
          <div className='text-gray-100 text-right'>
            <h1 className='text-5xl'>โรงเรียนคณะราษฎร์บำรุงปทุมธานี</h1>
            <h1 className='text-2xl '>ชั้นมัธยมศึกษาปีที่ 1 - 3 | GPAX : 3.77</h1>
            <p className='text-xl'>ห้องเรียนพิเศษวิทยาศาสตร์คณิตศาสตร์และเทคโนโลยี</p>
          </div>
        </div>
        <div className='flex items-center justify-between w-full px-10 mx-auto h-[212px]'>
          <div className='bg-slate-950 shadow-lg p-5 rounded-[100px] h-[164px] w-[164px] flex justify-center items-center'>
            <Image src="/images/edu/kanarat-logo.png" width={216} height={216} alt='Kanaratbumrungpathumtani' />
          </div>
          <div className='text-gray-100 text-right'>
            <h1 className='text-5xl'>โรงเรียนคณะราษฎร์บำรุงปทุมธานี</h1>
            <h1 className='text-2xl '>ชั้นมัธยมศึกษาปีที่ 4 - 6 | GPAX : 3.94</h1>
            <p className='text-xl'>ห้องเรียนคอมพิวเตอร์-ภาษาอังกฤษ</p>
          </div>
        </div>
      </section>
      <hr className='w-[90%] mx-auto border-t-2 border-gray-400'/>
      <section className='py-10 mt-[5em] mx-[10em]'>
        <h1 className="mx-auto w-fit text-5xl text-white">ใบประกาศนียบัตร</h1>
        <div className='flex space-x-10 justify-center py-5 mt-10 border-t-2 border-gray-300'>
          <Image src='/images/edu/ExAc-cer/excellent academic66.jpg' width={516} height={516} alt='excellent academic 66' />
          <Image src='/images/edu/ExAc-cer/excellent academic67.jpg' width={516} height={516} alt='excellent academic 67' />
        </div>
        <p className='text-center text-xl text-white'>&quot;ได้รับใบประกาศนียบัตร ความเป็นเลิศด้านวิชาการ สองปีซ้อน&quot;</p>
      </section>
      <section className='w-[90%] mx-auto border-t-2 border-gray-400'>
        <Link href="https://drive.google.com/drive/u/0/folders/1BRHMqIxEJ-TAYVrCi7RyApcLX2I7ofSQ"><h1 className='text-4xl'>Transctiption</h1></Link>
      </section>
    </div>
  )
}

export default EducationPage