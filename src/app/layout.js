import "./globals.css";
import { Kanit } from "next/font/google";
const kanit = Kanit({
  weight:"300",
  subsets:['latin','thai']
})
import Nav from "./components/Nav";
import Footer from "./components/Footer";



export const metadata = {
  title: 'รับทำเว็บไซต์ Landing Page และ Portfolio | mdev',
  description: 'บริการออกแบบและพัฒนาเว็บไซต์ด้วย React, Next.js, Tailwind CSS ครบวงจร ทั้ง Landing Page, เว็บไซต์ส่วนตัว และเว็บบริษัท',
  keywords: ['รับทำเว็บไซต์', 'landing page', 'portfolio website', 'personal website', 'React developer', 'Next.js', 'Tailwind CSS', 'responsive design', 'SEO friendly', 'ฟรีแลนซ์เขียนเว็บ'],
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-2T1Q72BKR3"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
               window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-2T1Q72BKR3');
            `,
          }}
        />
      </head>
      <body className={`bg-dark1 ${kanit.className}`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
