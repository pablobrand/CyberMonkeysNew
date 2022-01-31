import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import DemoGemSection from '@/sections/DemoGemSection';

const DemoGem = () => {
    return (
        <Layout>
            <Navbar />
            <DemoGemSection />
            <Footer />
        </Layout>
    );
};

export default DemoGem;
