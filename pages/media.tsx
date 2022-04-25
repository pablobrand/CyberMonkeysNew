import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";


import MediaSection from "@/sections/MediaSection";
import TabsSection from "../sections/MediaTabSection";
import VideosSection from "@/sections/VideosSection";
import LatestNewsSection from "@/sections/LatestNewsSection";
import VideoSlider from "@/components/Slider/VideoSlider";
//import { SliderData } from '@/components/Slider/SliderData';

const Media = () => {
  return (
    <Layout children={""}>
      <Navbar />
      <MediaSection />
      {/* <VideosSection /> 
      <LatestNewsSection /> */
      }
      <TabsSection />
      <Footer />
    </Layout>
  );
};

export default Media;
