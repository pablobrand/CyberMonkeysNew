import React, { Suspense, lazy, useRef } from "react"
import Layout from "@/components/Layout"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer/Footer"
import VideoSlider from "@/components/Slider/VideoSlider"
import Vidd from "@/components/Video"
import {
  Video,
  Image,
  CloudinaryContext,
  Transformation,
} from "cloudinary-react"
//import { SliderData } from "@/components/Slider/SliderData.js";

import BannerSection from "../sections/LandingSection"

const SliderData = [
  {
    source:
      "https://res.cloudinary.com/cybermonkeysllc/video/upload/v1647887060/CyberMonkeys/B1_zdvhe0.mp4",
  },
  {
    source: "CyberMonkeys/robert-murray-toCqTyxsT4Q-unsplash_qbofl1.jpg",
  },
  {
    source: "CyberMonkeys/gautier-salles-uffQnKuJ-hc-unsplash_fl7nsn.jpg",
  },
  {
    source: "CyberMonkeys/20100925_WBP504_ft3ywl.webp",
  },
]
const Home = () => {
  const videoRef = useRef()
  return (
    <Layout>
      <Navbar />
      <CloudinaryContext cloud_name="cybermonkeysllc">
        <div>
          <Video
            publicId="CyberMonkeys/B1_zdvhe0"
            autoplay="true"
            sound="false"
            loop="true"
            className="w-screen"
            innerRef={videoRef}
          >
            <Transformation effect="fade:500" />
          </Video>
        </div>
      </CloudinaryContext>
      <hr className="lineSeperator"></hr>
      <CloudinaryContext cloud_name="cybermonkeysllc">
        <div>
          <Image
            publicId="CyberMonkeys/SLIDER_PRINCIPAL_JPG_ejwrkr.jpg"
            innerRef={videoRef}
          ></Image>
        </div>
      </CloudinaryContext>
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
