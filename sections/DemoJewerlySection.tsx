import Link from "next/link";
import Image from "next/image";
import { ASSET_URL, CHOSEN_THEME } from "./constants";
import Container from "@/components/Container";
import { iframeResizer } from "iframe-resizer";
const embeddedUrl = `${ASSET_URL}?embed=${CHOSEN_THEME}`;

const DemoJewerlySection = () => {
  const componentDidMount = () => {
    iframeResizer({ log: false }, "#opensea-iframe");
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
            If you dont have a wallet, please click on the link below:
          </p>
          <p className="font-sans text-xl text-center">
            {" "}
            <Link href="https://support.opensea.io/hc/en-us/articles/1500007978402-Wallets-supported-by-OpenSea">
              Get a Wallet
            </Link>
          </p>

          <p>
            <iframe
              id="opensea-iframe"
              title="Embedded OpenSea Marketplace"
              src={embeddedUrl}
              width="100%"
              height="900px"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </p>
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
                src="/images/RockModelQRCode.png"
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
            <div className="pt-8">
              <Link href="/">
                <a className="uppercase bg-blue-600 px-6 py-3 rounded-full text-xl">
                  Buy Now
                </a>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DemoJewerlySection;
