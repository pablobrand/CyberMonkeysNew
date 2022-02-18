import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import VideoSlider from "@/components/Slider/VideoSlider";
//import { SliderData } from "@/components/Slider/SliderData.js";

import HomeSection from "@/sections/HomeSection";
import GlobeSection from "@/sections/GlobeSection";
import ServicesSection from "@/sections/ServicesSection";
import WhyChooseUsSection from "@/sections/WhyChooseUsSection";
import LatestNewsSection from "@/sections/LatestNewsSection";
import FAQSection from "@/sections/FAQSection";
import BannerSection from "@/sections/LandingSection";
const SliderData = [
  {
    video:
      "https://res.cloudinary.com/cybermonkeysllc/image/upload/v1630345570/CyberMonkeys/robert-murray-toCqTyxsT4Q-unsplash_qbofl1.jpg",
  },
  {
    video:
      "https://res.cloudinary.com/cybermonkeysllc/image/upload/v1630345568/CyberMonkeys/gautier-salles-uffQnKuJ-hc-unsplash_fl7nsn.jpg",
  },
  {
    video: "https://masteres.ugr.es/marketing/sites/master/marketing/public/imagenes/cabecera/2021-05/grupo-m%C3%A1rketing.jpg"
  },
  {
    video:
      "https://cdn.mos.cms.futurecdn.net/FQiMdRcDKGsgcxsMfhoXm3-1200-80.jpg",
  },
];
const Home = () => {
  return (
    <Layout>
      <Navbar />
      <VideoSlider slides={SliderData} />
      {/* <HomeSection /> */}
      <BannerSection />
      {/* <GlobeSection />
      <ServicesSection /> */}
      {/* <WhyChooseUsSection />
      <FAQSection />
      <LatestNewsSection /> */}
      <Footer />
    </Layout>
  );
};

export default Home;
