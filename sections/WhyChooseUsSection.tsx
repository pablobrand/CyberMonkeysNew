import Image from 'next/image';

import Container from '@/components/Container';

const WhyChooseUsSection = () => {
  return (
    <section className="text-white mb-4">
      <Container>
        <div className="grid lg:grid-cols-2 gap-4">
          <div>
            <Image
              src="/images/why-choose-us-image.png"
              width={870}
              height={958}
            />
          </div>
          <div className="mb-4">
            <h4 className="text-2xl uppercase font-bold text-blue-600">
              Why Choose Us
            </h4>
            <h2 className="text-3xl font-bold mb-8">
              WE'VE BUILT A PLATFORM TO BUY AND SELL SHARES
            </h2>
            <div className="flex mb-6">
              <div className="flex-none mr-8">
                <Image src="/images/n-4.svg" width={113} height={113} />
              </div>
              <div>
                <h5 className="text-2xl font-bold mb-2">SECURE USER DATA</h5>
                <p>
                  Lorem ipsum dolor sit amet, consect adipiscing elit, sed do
                  eiusmod tempor incidiunt ut labore et dolore magna aliqua
                </p>
              </div>
            </div>
            <div className="flex mb-6">
              <div className="flex-none mr-8">
                <Image src="/images/n-5.svg" width={113} height={113} />
              </div>
              <div>
                <h5 className="text-2xl font-bold mb-2">MOST CREDIBILITY</h5>
                <p>
                  Lorem ipsum dolor sit amet, consect adipiscing elit, sed do
                  eiusmod tempor incidiunt ut labore et dolore magna aliqua
                </p>
              </div>
            </div>
            <div className="flex mb-6">
              <div className="flex-none mr-8">
                <Image src="/images/n-6.svg" width={113} height={113} />
              </div>
              <div>
                <h5 className="text-2xl font-bold mb-2">BIG DATA INSIGHTS</h5>
                <p>
                  Lorem ipsum dolor sit amet, consect adipiscing elit, sed do
                  eiusmod tempor incidiunt ut labore et dolore magna aliqua
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUsSection;
