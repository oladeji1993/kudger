import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import WhoItsFor from "../components/WhoItsFor";
import WhyChooseKudger from "../components/WhyChooseKudger";
import Testimonials from "../components/Testimonials";
import PartnerWithKudger from "../components/PartnerWithKudger";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
    <section>
      <Navbar />

      <Hero />

      <HowItWorks />
      
      <WhoItsFor />
      
      <WhyChooseKudger />
      
      <Testimonials />
      
      <PartnerWithKudger />

      <ContactUs />
      
      <Footer />
    </section>
    </>
  );
}
