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
      <body className={`bg-gradient-to-b from-teal-800 via-slate-800 to-slate-800 ${kanit.className}`}>
        <Nav/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
