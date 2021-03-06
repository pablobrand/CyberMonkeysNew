import Image from "next/image";
import Link from "next/link";
import style from "./footerImg.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import Container from "@/components/Container";
import Input from "@/components/Input";
import Button from "@/components/Button";

const Footer = () => {
  return (
    <footer className={style.footerMain}>
      <Container>
        <div className="text-center mb-2 pt-40">
          <Image src="/images/CM-white.svg" width={150} height={111} />
        </div>
        {/* <h2 className="text-center font-bold text-3xl text-white mb-10">
          DON'T MISS OUT, STAY UPDATED
        </h2> */}
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-6 lg:col-start-4">
            {/* <form className="flex mb-8" onSubmit={(e) => e.preventDefault()}>
              <Input type="text" placeholder="EMAIL ADDRESS" />
              <div className="ml-6">
                <Button type="submit">Subscribe</Button>
              </div>
            </form> */}
            <ul className="list-none text-center mb-6">
              <li className="inline-block mr-4">
                <a
                  href="https://www.facebook.com/Cyber-Monkeys-LLC-101879512180258/?view_public_for=101879512180258"
                  className="rounded-full p-3 bg-black bg-opacity-60 inline-block"
                >
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className="w-4 h-4 text-white"
                  />
                </a>
              </li>
              <li className="inline-block mr-4">
                <a
                  href="https://twitter.com/CybermonkeysUSA"
                  className="rounded-full p-3 bg-black bg-opacity-60 inline-block"
                >
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="w-4 h-4 text-white"
                  />
                </a>
              </li>
              <li className="inline-block mr-4">
                <a
                  href="https://www.instagram.com/cybermonkeys21/"
                  className="rounded-full p-3 bg-black bg-opacity-60 inline-block"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="w-4 h-4 text-white"
                  />
                </a>
              </li>
              <li className="inline-block mr-4">
                <a
                  href="https://www.youtube.com/channel/UCU8ynCVA4Ie20gdgbIufWmg/featured"
                  className="rounded-full p-3 bg-black bg-opacity-60 inline-block"
                >
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className="w-4 h-4 text-white"
                  />
                </a>
              </li>
              {/* <li className="inline-block mr-4">
                <a
                  href="javascript:"
                  className="rounded-full p-3 bg-black bg-opacity-60 inline-block"
                >
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className="w-4 h-4 text-blue-600"
                  />
                </a>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="px-12 text-center text-white">
          {/* <hr className="mb-4 relative" /> */}
          <p className="mb-0">
            <Link href="/">
              <a> Copyright &copy; 2021, All rights reserves by your Company. </a>
            </Link>
          </p>
        </div>
        {/* fixfooter es una clase, guarde el file en componentes: footerImg.css*/}
      </Container>
      {/* <div className={style.imageContainer}>
        <Image
          src="/images/footerBackground.png"
          layout="fill"
          className={style.image}
        />
      </div> */}
    </footer>
  );
};

export default Footer;
