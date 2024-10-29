import { Kanit } from '@next/font/google';
const kanit = Kanit({
  subsets: ['latin', 'thai'], // เลือก subset ที่ต้องการ
  weight: ['400', '700'], // สามารถเลือกน้ำหนักฟอนต์
});

export default kanit;