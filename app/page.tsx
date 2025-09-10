import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import WhoItsFor from "../components/WhoItsFor";
import WhyChooseKudger from "../components/WhyChooseKudger";
import Testimonials from "../components/Testimonials";
import PartnerWithKudger from "../components/PartnerWithKudger";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import PaymentProcess from "../components/paymentProcess";
import TechnologyBehind from "@/components/TechnologyBehind";
import WhoCanUseIt from "@/components/WhoCanUseIt";



export default function Home() {
  return (
    <>
    <section>
      <Navbar />

      <Hero />

      <HowItWorks />
      
      <WhoItsFor />

      <PaymentProcess />

      <WhyChooseKudger />

      <TechnologyBehind />

      <WhoCanUseIt />
      
      {/* <Testimonials /> */}
      
      {/* <PartnerWithKudger /> */}

      {/* <ContactUs /> */}
      
      <Footer />
    </section>
    </>
  );
}
