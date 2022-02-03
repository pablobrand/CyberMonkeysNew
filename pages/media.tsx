import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


import MediaSection from "@/sections/MediaSection";
import VideosSection from "@/sections/VideosSection";
import LatestNewsSection from "@/sections/LatestNewsSection";
import VideoSlider from "@/components/Slider/VideoSlider";
//import { SliderData } from '@/components/Slider/SliderData';

const Media = () => {
  return (
    <Layout>
      <Navbar />
      <MediaSection />
      {/* <VideosSection /> 
      <LatestNewsSection /> */
      }
      <Footer />
    </Layout>
  );
};

export default Media;
  