import Footer from "@/components/Footer/Footer";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import VideoSlider from "@/components/Slider/VideoSlider";
import DemoJewerlySection from "@/sections/DemoJewerlySection";

const SliderData = [
  {
    video:
      "https://res.cloudinary.com/cybermonkeysllc/image/upload/v1645464090/JoryeVera/DemoNeckless_y78kbr.jpg",
  },
  {
    video:
      "https://res.cloudinary.com/cybermonkeysllc/image/upload/v1645464090/JoryeVera/DemoEARINGS_p30clv.jpg",
  },
  {
    video:
      "https://res.cloudinary.com/cybermonkeysllc/image/upload/v1645464090/JoryeVera/DemoRING_e7rwko.jpg",
  },
];
const DemoJewerly = () => {
  return (
    <Layout>
      <Navbar />
      <VideoSlider slides={SliderData} />
      <DemoJewerlySection />
      {/* <VideosSection /> 
      <LatestNewsSection /> */}
      <Footer />
    </Layout>
  );
};

export default DemoJewerly;