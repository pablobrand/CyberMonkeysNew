import Image from "next/image";

import Container from "@/components/Container";

const BannersSection = () => {
  return (
    <section className="text-white mb-20">
      <Container>
      <div className="container mx-auto px-4 mt-48 w-full h-607">
        <div className="grid grid-rows-1 grid-flow-col gap-12">
          <div>
            <Image src="/images/blockchain.png" width={2448} height={607} />
          </div>
          <div>
            <Image src="/images/blockchain.png" width={2448} height={607} />
          </div>
        </div>

        <div className="grid grid-rows-1 grid-flow-col gap-12">
          <div>
            <Image
              src="/images/brandingAndGraphicDesign.png"
              width={2448}
              height={607}
            />
          </div>
          <div>
            <Image
              src="/images/brandingAndGraphicDesign.png"
              width={2448}
              height={607}
            />
          </div>
        </div>

        <div className="grid grid-rows-1 grid-flow-col gap-12">
          <div>
            <Image
              src="/images/audiovisualProduction.png"
              width={2448}
              height={607}
            />
          </div>
          <div>
            <Image
              src="/images/audiovisualProduction.png"
              width={2448}
              height={607}
            />
          </div>
        </div>

        <div className="grid grid-rows-1 grid-flow-col gap-12">
          <div>
            <Image src="/images/mediaContent.png" width={2448} height={607} />
          </div>

          <div>
            <Image src="/images/mediaContent.png" width={2448} height={607} />
          </div>
        </div>
      </div>
      </Container>
    </section>
  );
};

export default BannersSection;
