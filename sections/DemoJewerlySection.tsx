import Link from "next/link";
import Image from "next/image";
import { ASSET_URL_DEMO } from "./constants";
import Container from "@/components/Container";
import { iframeResizer } from "iframe-resizer";
const embeddedUrl = `${ASSET_URL_DEMO}`;

const DemoJewerlySection = () => {
  const componentDidMount = () => {
    iframeResizer({ log: false }, "#demoJV-iframe");
  };
  return (
    <section
      className="grid min-h-screen mt-20 mb-24 bg-no-repeat bg-contain text-white"
      style={{ backgroundImage: "url('/images/f-section-image.png')" }}
    >
      <Container>
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-5">
            <h1 className="text-5xl pt-32">
              <span className="block font-semibold">Demo Jewerly</span>
            </h1>
          </div>
        </div>
        <div className="grid">
          <p className="text-xl font-medium mb-8">
            Below you will find the Demo for the 3d Model
          </p>
          <p className="font-sans text-xl text-center"> <Link href="https://adobe.ly/3oYzfOC">Click To See in 3D</Link></p>
          {/* <p>
            <iframe
              id="demoJV-iframe"
              title="3D Jewlery Model Demo"
              src={embeddedUrl}
              width="100%"
              height="900px"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </p> */}
        </div>
      </Container>

      <Container>
        <div className="grid grid-cols-10">
          <div className="col-span-12 lg:col-span-5  text-center">
            <h1 className="text-4xl pt-24">
              <span className="block">3D Model</span>
              <span className="block font-semibold">Scan to see in AR</span>
            </h1>
            <div className="pt-2">
              <Image
                src="/images/Neckless AR Demo QR Code.png"
                width={540}
                height={540}
              />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 text-center">
            <h1 className="text-4xl pt-24">
              <span className="block">Rock</span>
              <span className="block font-semibold">Original model</span>
            </h1>
            <div className="pt-2">
              <Image src="/images/Rockin3dAR.png" width={540} height={540} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DemoJewerlySection;
