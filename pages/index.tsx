import React, { Suspense, lazy, useRef, useState } from "react"
import Layout from "@/components/Layout"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer/Footer"
import {AdvancedImage, AdvancedVideo} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
//import { SliderData } from "@/components/Slider/SliderData.js";

import BannerSection from "../sections/LandingSection"

const Home = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'cybermonkeysllc'
    }
  });
  const myImage = cld.image('CyberMonkeys/SLIDER_PRINCIPAL_JPG_ejwrkr.jpg'); 
  const myVideo = cld.video('CyberMonkeys/B1_zdvhe0'); 
  
  return (
    <Layout children={""}>
      <Navbar />
        <div>
        <AdvancedVideo cldVid={myVideo} autoPlay muted loop className="w-screen"/>
        </div>
      <hr className="lineSeperator"></hr>
        <div>
          <AdvancedImage cldImg={myImage} />
        </div>
      {/* <VideoSlider slides={SliderData} /> */}
      {/* <HomeSection /> */}
      <BannerSection />
      {/* <GlobeSection />
      <ServicesSection /> */}
      {/* <WhyChooseUsSection />
      <FAQSection />
      <LatestNewsSection /> */}
      <Footer />
    </Layout>
  )
}

export default Home
