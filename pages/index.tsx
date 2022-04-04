import React, { Suspense, lazy } from "react";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import VideoSlider from "@/components/Slider/VideoSlider";
import Vidd from "@/components/Video";
//import { SliderData } from "@/components/Slider/SliderData.js";

import BannerSection from "../sections/LandingSection";

const SliderData = [
  {
    video:
      "https://res.cloudinary.com/cybermonkeysllc/video/upload/v1647887060/CyberMonkeys/B1_zdvhe0.mp4",
  },
  {
    image:
      "https://res.cloudinary.com/cybermonkeysllc/image/upload/v1630345568/CyberMonkeys/gautier-salles-uffQnKuJ-hc-unsplash_fl7nsn.jpg",
  },
  {
    image:
      "https://masteres.ugr.es/marketing/sites/master/marketing/public/imagenes/cabecera/2021-05/grupo-m%C3%A1rketing.jpg",
  },
  {
    image:
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
