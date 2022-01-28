import Image from "next/image";

import Container from "@/components/Container";

const BannersSection = () => {
  return (
    <section className="w-full h-700">
      <div className="px-4 mt-48">
        <div className="grid lg:grid-cols-2 gap-4">
          <div>
            <Image src="/images/blockchain.svg" width={2448} height={607} />
          </div>

          <div>
            <h2 className="font-black text-white">BLOCKCHAIN NEEDS</h2>
            <h2 className="font-medium text-banner-yellow">TECHNOLOGY</h2>
            <p className="text-white">
              We are a group of technologically of innovative IT Engineers, in
              the field of the web, Digital Graphics, Video and Blockchain to
              help bussines adapt to this new wave of technological advancement
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-4">
          <div>
            <Image
              src="/images/graphic-design-text.svg"
              width={2448}
              height={607}
            />
          </div>
          <div>
            <Image
              src="/images/graphic-design.svg"
              width={2448}
              height={607}
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-4">
          <div>
            <Image
              src="/images/audiovisual.svg"
              width={2448}
              height={607}
            />
          </div>
          <div>
            <Image
              src="/images/audiovisual-text.svg"
              width={2448}
              height={607}
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-4">
          <div>
            <Image src="/images/social-media-text.svg" width={2448} height={607} />
          </div>

          <div>
            <Image src="/images/social-media" width={2448} height={607} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannersSection;
