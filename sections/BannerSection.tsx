import Image from "next/image";
import React, { useEffect, useState } from 'react'

import Container from "@/components/Container";

const BannersSection = () => {

  useEffect(() => {
    const timer = setTimeout(() => <BannersSection/>, 3000);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section className="relative w-full text-white text-center">
      <Container>
        <div className="">
          <div className="flex flex-col">
            <div className="">
              <Image src="/images/blockchain.svg" width={448} height={448} />
            </div>
            <div className="text-center sm:text-left">
              <h2 className="font-black text-4xl">BLOCKCHAIN NEEDS</h2>
              <h2 className="font-medium text-banner-yellow">TECHNOLOGY</h2>
              <p className="text-2xl">
                We are a group of technologically of innovative IT Engineers, in the
                field of the web, Digital Graphics, Video and Blockchain to help
                bussines adapt to this new wave of technological advancement
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="">
              <Image src="/images/graphic-design.svg" width={448} height={448} />
            </div>
            <div className="text-center sm:text-left">
              <h2 className="font-black text-4xl">BRANDING &</h2>
              <h2 className="font-medium text-banner-yellow">GRAPHIC DESIGN</h2>
              <p className="text-2xl">
                Today branding is essential to build a brand identity that
                distinguishes us and elevates us above other produts and services
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="">
              <Image src="/images/audiovisual.svg" width={448} height={448} />
            </div>
            <div className="text-center sm:text-left">
              <h2 className="font-black text-4xl">AUDIOVISUAL</h2>
              <h2 className="font-medium text-banner-yellow">PRODUCTION</h2>
              <p className="text-2xl">
                Our production team offers a wide range of audiovisual services.
                From music videos, content for social networks, peoduct
                photography documentaries, animation and much more. With an
                artistic background, the company is able to produce a high quality
                and unique product
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div>
              <Image src="/images/social-media.svg" width={448} height={448} />
            </div>
            <div className="text-center sm:text-left">
              <h2 className="font-black text-4xl">MEDIA</h2>
              <h2 className="font-medium text-banner-yellow">CONTENT</h2>
              <p className="text-2xl">
                We have a team with long experience in creativity and strategy to
                develop social media and content marketing campaings
            </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BannersSection;
