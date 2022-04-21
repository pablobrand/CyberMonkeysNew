import React from "react"
import { useState, useEffect } from "react"
import Layout from "@/components/Layout"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer/Footer"
import VideoSlider from "@/components/Slider/VideoSlider"
//import { SliderData } from "@/components/Slider/SliderData.js";

import HomeSection from "@/sections/HomeSection"
import GlobeSection from "@/sections/GlobeSection"
import ServicesSection from "@/sections/ServicesSection"
import WhyChooseUsSection from "@/sections/WhyChooseUsSection"
import LatestNewsSection from "@/sections/LatestNewsSection"
import FAQSection from "@/sections/FAQSection"
import BannerSection from "../sections/LandingSection"
import { Video, CloudinaryContext } from "cloudinary-react"
import { AdvancedVideo } from "@cloudinary/react"
import { Cloudinary } from "@cloudinary/url-gen"

// Import required actions and qualifiers.
import { fill } from "@cloudinary/url-gen/actions/resize"
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners"
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn"
import { Gravity } from "@cloudinary/url-gen/qualifiers"
import { AutoFocus } from "@cloudinary/url-gen/qualifiers/autoFocus"

// const SliderData = [
//   {
//     video:
//       "https://masteres.ugr.es/marketing/sites/master/marketing/public/imagenes/cabecera/2021-05/grupo-m%C3%A1rketing.jpg",
//   },
//   {
//     video:
//       "https://res.cloudinary.com/cybermonkeysllc/image/upload/v1630345568/CyberMonkeys/gautier-salles-uffQnKuJ-hc-unsplash_fl7nsn.jpg",
//   },
//   {
//     video:
//       "https://masteres.ugr.es/marketing/sites/master/marketing/public/imagenes/cabecera/2021-05/grupo-m%C3%A1rketing.jpg",
//   },
//   {
//     video:
//       "https://cdn.mos.cms.futurecdn.net/FQiMdRcDKGsgcxsMfhoXm3-1200-80.jpg",
//   },
// ]
const style1 = {
  display: "block",
  margin: "auto",
}
const Home = () => {
  // Create and configure your Cloudinary instance.
  const cld = new Cloudinary({
    cloud: {
      cloudName: "cybermonkeysllc",
    },
  })

  // Use the video with public ID, 'docs/walking_talking'.
  const myVideo = cld.video("CyberMonkeys/B1_zdvhe0")
  const useViewport = () => {
    const [width, setWidth] = React.useState(window.innerWidth)

    React.useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth)
      window.addEventListener("resize", handleWindowResize)
      return () => window.removeEventListener("resize", handleWindowResize)
    }, [])

    // Return the width so we can use it in our components
    return { width }
  }
  const { width } = useViewport()

  // Apply the transformation.
  myVideo
    .resize(fill().width(width)) // Crop the video, focusing on the faces.
    .roundCorners(byRadius(20)) // Round the corners.
  return (
    <Layout>
      <Navbar />
      {/* <VideoSlider slides={SliderData} /> */}
      <AdvancedVideo cldVid={myVideo} autoPlay controls />
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
