import Image from "next/image";

import Container from "@/components/Container";

const BannersSection = () => {
  return (
    <section className="relative w-full h-700 mt-30 text-white">
      <div className="px-4 mt-48">
        <div className="grid lg:grid-cols-2 gap-4 mt-48">
          <div>
            <Image src="/images/blockchain.svg" width={2448} height={607} />
          </div>

          <div>
            <h2 className="font-black text-4xl">BLOCKCHAIN NEEDS</h2>
            <h2 className="font-medium text-banner-yellow">TECHNOLOGY</h2>
            <p className="text-xl">
              We are a group of technologically of innovative IT Engineers, in
              the field of the web, Digital Graphics, Video and Blockchain to
              help bussines adapt to this new wave of technological advancement
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-4">
          <div>
            <h2 className="font-black text-4xl">BRANDING &</h2>
            <h2 className="font-medium text-banner-yellow">GRAPHIC DESIGN</h2>
            <p className="text-xl">
              Today branding is essential to build a
              brand identity that distinguishes us
              and elevates us above other produts
              and services
            </p>
          </div>
          <div>
            <Image src="/images/graphic-design.svg" width={2448} height={607} />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-4">
          <div>
            <Image src="/images/audiovisual.svg" width={2448} height={607} />
          </div>
          <div>
            <h2 className="font-black text-4xl">AUDIOVISUAL</h2>
            <h2 className="font-medium text-banner-yellow">PRODUCTION</h2>
            <p className="text-xl">
              Our production team offers a wide range of
              audiovisual services. From music videos, content for social
              networks, peoduct photography documentaries,
              animation and much more.

              With an artistic background, the company is able
              to produce a high quality and unique product
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-4">
          <div>
            <h2 className="font-black text-4xl">MEDIA</h2>
            <h2 className="font-medium text-banner-yellow">CONTENT</h2>
            <p className="text-xl">
              We have a team with long experience
              in creativity and strategy to develop
              social media and content marketing campaings
            </p>
          </div>

          <div>
            <Image src="/images/social-media.svg" width={2448} height={607} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannersSection;
