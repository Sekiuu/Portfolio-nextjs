import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import kanit from "./ThaiFont/Kanit";
export const metadata = {
  title: "Muninthon's portfolio",
  description: "portfolio of muninthon donliken includes munin's performances and certificates , contact",
  keyword: "portfolio"
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
            `,
          }}
        />
      </head>
      <body className={`bg-zinc-800 ${kanit.className}`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
