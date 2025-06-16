import FeatureCard from "./components/FeatureCard.jsx";
import ServicesContent from "./components/Services_content.jsx";
import Banner from "./components/Banner.jsx";
import Contact from "./components/Contact.jsx";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="w-full bg-dark1 py-5 pt-20 border-t border-greenL">
        <FeatureCard />
        <ServicesContent />
      </div>
      <Contact/>
    </>
  );
}
