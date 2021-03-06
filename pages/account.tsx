import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import VideoSlider from "@/components/Slider/VideoSlider";

import LoginSection from "@/sections/LoginSections/LoginSection"
//import { SliderData } from "@/components/Slider/SliderData.js";

const Account = () => {
  return (
    <Layout>
      <Navbar />
      <LoginSection/>
      {/* <HomeSection /> */}
      {/* <GlobeSection />
      <ServicesSection /> */}
      {/* <WhyChooseUsSection />
      <FAQSection />
      <LatestNewsSection /> */}
      <Footer />
    </Layout>
  );
};

export default Account;