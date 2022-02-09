import Image from "next/image";
import React, { useEffect, useState } from 'react'

import Container from "@/components/Container";

const BannersSection = () => {

  useEffect(() => {
    const timer = setTimeout(() => <BannersSection />, 3000);
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
                Want to learn more about how blockchain can help your business? Need to update your website to receive Crypto payments? Or maybe you want to build an NFT? We are here to help with your Blockchain needs! From consultation to building or managing a solution that your business needs.
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
                It is no secret that in today’s world, branding is a must for your business. We can help with your branding essentials, from graphics, product presentation, 3D rendering and much, much more. Let us help with your digital presence!
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
                Our production team offers a wide range of audiovisual services. From music videos, content for social networks, production photography documentaries, animation, commercials and much more. With our artistic background, our company can produce high quality and unique products.
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
                We have a team with long experience in creativity and strategy, to develop social media and content marketing campaigns with extreme customization to fit your needs.
            </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BannersSection;
