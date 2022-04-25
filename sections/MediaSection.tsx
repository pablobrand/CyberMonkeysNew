import Link from "next/link";
import Image from "next/image";

import Container from "@/components/Container";

const MediaSection = () => {
  return (
    <Container>
      <div className="grid grid-cols-12 min-h-screen mt-20 text-white">
        <div className="col-span-12 lg:col-span-5">
          <h1 className="text-5xl pt-32">
            <span className="block">Welcome to</span>
            <span className="block font-semibold">Cybermonkeys LLC</span>
          </h1>
          <p className="text-xl font-medium mb-8">
            We are currently working on some videos that will be of benefit to
            those looking to learn more about Blockchain. We look forward to
            providing you with valuable content, thank you for your patience
            and understanding.
          </p>
          <p>
            <Link href="/">
              <a className="uppercase bg-blue-600 px-6 py-3 rounded-full">
                Coming Soon!
              </a>
            </Link>
          </p>
        </div>
        <div className="col-span-12 lg:col-span-7 text-right">
          <div className="pt-16">
            <Image src="/images/media.png" width={540} height={432} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MediaSection;
