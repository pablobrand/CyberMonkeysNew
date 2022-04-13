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
    source:
      "https://res.cloudinary.com/cybermonkeysllc/video/upload/v1647887060/CyberMonkeys/B1_zdvhe0.mp4",
  },
  {
    source:
      "CyberMonkeys/robert-murray-toCqTyxsT4Q-unsplash_qbofl1.jpg",
  },
  {
    source:
      "CyberMonkeys/gautier-salles-uffQnKuJ-hc-unsplash_fl7nsn.jpg",
  },
  {
    source:
      "CyberMonkeys/20100925_WBP504_ft3ywl.webp",
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
