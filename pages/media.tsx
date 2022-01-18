import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Slider from "@/components/Slider";

import MediaSection from "@/sections/MediaSection";
import VideosSection from "@/sections/VideosSection";
import LatestNewsSection from "@/sections/LatestNewsSection";

const Media = () => {
  return (
    <Layout>
      <Navbar />
      <Slider />
      <MediaSection />
      {/* <VideosSection />
      <LatestNewsSection /> */}
      <Footer />
    </Layout>
  );
};

export default Media;
