import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoSlider from "@/components/Slider/VideoSlider";
import { SliderData } from "@/components/Slider/SliderData.js";
import VideoSlider1 from "@/components/Slider/VideoSlider"

import HomeSection from "@/sections/HomeSection";
import GlobeSection from "@/sections/GlobeSection";
import ServicesSection from "@/sections/ServicesSection";
import WhyChooseUsSection from "@/sections/WhyChooseUsSection";
import LatestNewsSection from "@/sections/LatestNewsSection";
import FAQSection from "@/sections/FAQSection";
import BannerSection from "@/sections/BannerSection";
const HomeSliderData = [
  {
    video:
      "https://www.eleconomista.com.mx/__export/1620932331582/sites/eleconomista/img/2021/05/11/bc_ocere_bitcoin-blockchain.png_673822677.png",
  },
  {
    video:
      "https://www.prosamexico.mx/wp-content/uploads/2020/09/post_blockchain.jpg",
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
