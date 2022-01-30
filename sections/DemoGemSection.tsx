import Link from "next/link";
import Image from "next/image";
import { SliderData } from "@/components/Slider/SliderData";

import Container from "@/components/Container";
import VideoSlider from "@/components/Slider/VideoSlider";


const DemoGemSection = () => {
    return (
        <section className="grid min-h-screen mt-20 mb-24 text-white">
            <Container>
                <div className="col-span-12 lg:col-span-5">
                    <h1 className="text-5xl pt-28 text-center pb-4">
                        <span className="block">
                            This is a demo for Gem Stones Image and Augemented Reality ecommerce
                            page
                        </span>
                    </h1>
                </div>
                <div className="md:container md:mx-auto">
                    <VideoSlider slides={SliderData} />
                </div>

                <div className="grid grid-cols-12">
                    <div className="col-span-12 lg:col-span-5">
                        <h1 className="text-5xl pt-32">
                            <span className="block">This is my DemoGemSection</span>
                            <span className="block font-semibold">Cybermonkeys LLC</span>
                        </h1>
                        <p className="text-xl font-medium mb-8">bla</p>
                    </div>
                    <div className="col-span-12 lg:col-span-7 text-right">
                        <div className="pt-16">
                            <Image src="/images/media.png" width={540} height={432} />
                        </div>
                        <Link href="/">
                            <a className="uppercase bg-blue-600 px-6 py-3 rounded-full">
                                Buy Now
                            </a>
                        </Link>
                    </div>
                </div>
            </Container>

        </section>
    );
};

export default DemoGemSection;
