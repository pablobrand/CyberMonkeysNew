import Image from "next/image";

import Container from "@/components/Container";

const BannersSection = () => {
  return (
    <section>
      <Container>
        <div className="text-center mb-2">
          <Image
            src="/images/audiovisualProduction.png"
            width={2448}
            height={607}
          />
        </div>
      </Container>
    </section>
  );
};

export default BannersSection;
