import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import ContactSection from '@/sections/ContactSection';
import ContactFormSection from '@/sections/ContactFormSection';

const Contact = () => {
  return (
    <Layout>
      <Navbar />
      <ContactSection />
      {/* <ContactFormSection /> */}
      <Footer />
    </Layout>
  );
};

export default Contact;