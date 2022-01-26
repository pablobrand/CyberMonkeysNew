import Image from "next/image";

import Container from "@/components/Container";

const BannersSection = () => {
  return (
    <section>
      <div className="container mx-auto px-4 mt-12">
        <div className="grid grid-rows-4 grid-flow-col gap-4">
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
      </div>
    </section>
  );
};

export default BannersSection;
