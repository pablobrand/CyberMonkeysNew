import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer/Footer';

import NFTSectionOpenSea from '@/sections/NftSectionOpenSea';

const NFT = () => {
    return (
        <Layout>
            <Navbar />
            <NFTSectionOpenSea />
            <Footer />
        </Layout>
    );
};

export default NFT;
