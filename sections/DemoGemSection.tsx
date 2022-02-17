import Link from "next/link";
import Image from "next/image";

import Container from "@/components/Container";
import VideoSlider from "@/components/Slider/VideoSlider";

const SliderDataGemstone = [
    {
      video:
        "https://res.cloudinary.com/cybermonkeysllc/image/upload/v1630345570/CyberMonkeys/robert-murray-toCqTyxsT4Q-unsplash_qbofl1.jpg",
    },
    {
      video:
        "https://res.cloudinary.com/cybermonkeysllc/image/upload/v1630345568/CyberMonkeys/gautier-salles-uffQnKuJ-hc-unsplash_fl7nsn.jpg",
    },
    {
      video: "https://masteres.ugr.es/marketing/sites/master/marketing/public/imagenes/cabecera/2021-05/grupo-m%C3%A1rketing.jpg"
    },
    {
      video:
        "https://cdn.mos.cms.futurecdn.net/FQiMdRcDKGsgcxsMfhoXm3-1200-80.jpg",
    },
  ];

const DemoGemSection = () => {
    return (
        <section className="grid min-h-screen mt-20 mb-24 text-white">
            <Container>
                <div className="col-span-12 lg:col-span-5">
                    <h1 className="text-5xl pt-28 text-center">
                        <span className="block">
                            This is a demo for Gem Stones Image and Augemented Reality ecommerce
                            page
                        </span>
                    </h1>
                </div>
                <div className="md:container md:mx-auto pb-12 pt-32">
                    <VideoSlider slides={SliderDataGemstone} />
                </div>
            </Container>
            <Container>
                <div className="grid grid-cols-10">
                    <div className="col-span-12 lg:col-span-5  text-center">
                        <h1 className="text-4xl pt-24">
                            <span className="block">We canned a real Rock into a 3D model, that buyers and see in front of them.</span>
                            <span className="block font-semibold">Scan to see in AR</span>
                        </h1>
                        <Image src="/images/RockModelQRCode.png" width={540} height={540} />
                    </div>
                    <div className="col-span-12 lg:col-span-5 text-center">
                        <h1 className="text-4xl pt-24">
                            <span className="block">Below is the image on in 3D, which is then pass to AR tool.</span>
                        </h1>
                        <div className="pt-2">
                            <Image src="/images/Rockin3dAR.png" width={540} height={432} />
                        </div>
                        <div className="pt-8">
                            <Link href="/">
                                <a className="uppercase bg-blue-600 px-6 py-3 rounded-full text-xl">
                                    Buy Now
                                </a>
                            </Link>
                        </div>
                        
                    </div>
                </div>
            </Container>

        </section>
    );
};

export default DemoGemSection;
