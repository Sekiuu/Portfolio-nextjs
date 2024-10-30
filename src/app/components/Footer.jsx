import React from 'react'

function Footer() {
  return (
    <footer className='h-[256px] bg-slate-800 bottom-0 py-[5em]'>
      <div className='px-[10em] text-white flex  justify-around items-center'>
        <h1 className='text-3xl'>&#64; Contact</h1>
        <div className='flex justify-between space-x-10'>
          <p className='text-left'>Tel : 092-985-3209 <br /> Email : sega.pamma@gmail.com</p>
          <p>100/342 หมู่ 4 ถนนติวานนต์ ตำบลบางกะดี <br /> อำเภอเมืองปทุมธานี จังหวัดปทุมธานี 12000</p>
        </div>
      </div>
      <div className='flex justify-center w-full pt-5'>
        <hr className='border-[2px] w-3/4' />
      </div>
      <p className="text-white px-[15em] pt-5">
      &copy; 2024 ภูมิใจสร้างสรรค์โดย นายมุนินทร ร่วมออกแบบโดย นางสาวรัตน์ฐาภัทร
      </p>
    </footer>
  )
}

export default Footer