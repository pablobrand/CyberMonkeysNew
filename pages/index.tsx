import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VideoSlider from '@/components/Slider/VideoSlider';

import HomeSection from '@/sections/HomeSection';
import GlobeSection from '@/sections/GlobeSection';
import ServicesSection from '@/sections/ServicesSection';
import WhyChooseUsSection from '@/sections/WhyChooseUsSection';
import LatestNewsSection from '@/sections/LatestNewsSection';
import FAQSection from '@/sections/FAQSection';

const Home = () => {
  return (
    <Layout>
      <Navbar />
      {/* <HomeSection /> */}
      <GlobeSection />
      <ServicesSection />
      {/* <WhyChooseUsSection />
      <FAQSection />
      <LatestNewsSection /> */}
      <Footer />
    </Layout>
  );
};

export default Home;
