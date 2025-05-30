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
            <p>
              และประสบการณ์ของกระผม
              กระผมเริ่มต้นความสนใจในเทคโนโลยีและการเขียนโปรแกรมจากการเล่นเกม ซึ่งในวัยเด็ก เกมไม่ใช่แค่ความบันเทิงสำหรับกระผม แต่เป็นแรงบันดาลใจที่ทำให้กระผมตั้งคำถามว่า
              “สิ่งที่อยู่เบื้องหลังเกมเหล่านี้คืออะไร?” และ “เราจะสร้างเกมขึ้นมาเองได้อย่างไร?” ด้วยความคิดที่ว่าการเขียนโปรแกรมคือสิ่งมหัศจรรย์ เพราะสามารถสร้างสิ่งที่มาจากความคิดและจินตนาการให้เป็นรูปธรรม
              และนำไปใช้ประโยชน์ได้ทำให้กระผมเริ่มสนใจคอมพิวเตอร์และเทคโนโลยีตั่งแต่นั้นเป็นต้นมา
            </p>
            <br />
            <p> กระผมมีประสบการณ์ในการเขียนเว็บไซต์ และ สร้างเกม อีกทั้งยังได้เข้าร่วมการแข่งขันเขียนโปรแกรมควบคุมหุ่นยนต์ตั้งแต่อายุ 13 ปี การแข่งขันเหล่านี้ไม่เพียงแต่ทดสอบความสามารถทางเทคนิค
              แต่ยังสอนให้กระผมรู้จักการทำงานเป็นทีม การแก้ปัญหาเชิงสร้างสรรค์ และการปรับตัวในสถานการณ์ต่าง ๆ นอกจากนี้ กระผมยังมีความสนใจและหมั่นศึกษาเกี่ยวกับคณิตศาสตร์ และ
              เคยได้รับรางวัลโครงงานคณิตศาสตร์ประยุกต์สร้างสรรค์อันดับที่11ของประเทศ ซึ่งเป็นพื้นฐานสำคัญสำหรับการพัฒนาเทคโนโลยีสารสนเทศ
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