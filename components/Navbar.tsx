import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { MenuIcon, XIcon } from '@heroicons/react/solid';

import Container from '@/components/Container';
import NavItem from './NavItem';

const Navbar = () => {
  const [bgColor, setBgColor] = React.useState('top');
  const [dropdownMenuOpen, setDropdownMenuOpen] = React.useState(false);

  let scrollListener = null;

  React.useEffect(() => {
    scrollListener = document.addEventListener('scroll', () => {
      var scrolled = document.scrollingElement.scrollTop;

      setBgColor(scrolled >= 100 ? 'bg-blue-600' : 'bg-transparent');
    });

    return () => document.removeEventListener('scroll', scrollListener);
  }, [bgColor]);

  return (
    <nav
      className={`${bgColor} transition-colors duration-500 ease-in-out pt-3 pb-2 fixed top-0 left-0 right-0 z-10`}
    >
      <Container>
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-full lg:w-auto lg:mr-12 flex items-center justify-between py-1 lg:py-0 lg:px-0">
            <div>
              <Link href="/">
                <a>
                  <Image src="/images/logo.svg" width={70} height={70} />
                </a>
              </Link>
            </div>
            <div className="lg:hidden">
              <button
                className="p-1 text-white border px-3 py-1.5 rounded-md"
                onClick={() => setDropdownMenuOpen(!dropdownMenuOpen)}
              >
                {dropdownMenuOpen ? (
                  <XIcon className="w-6 h-6 inline-block" />
                ) : (
                    <MenuIcon className="w-6 h-6 inline-block" />
                  )}
              </button>
            </div>
          </div>
          <div
            className={`text-white lg:bg-transparent bg-pink-800 w-full lg:w-auto lg:flex-grow lg:flex lg:items-center justify-end ${
              dropdownMenuOpen ? 'block' : 'hidden'
              }`}
          >
            <div className="lg:mb-0 mb-4">
              <NavItem title="Home" path="/" />
              <NavItem title="Media Content" path="/media" />
              <NavItem title="NFTs" path="/nft" />
              <NavItem title="Contact Us" path="/contact" />
              <NavItem title="Account" path="/login" />
              {/* <NavItem
                title="Log In"
                path="/"
                bordered={true}
                lastItem={true}
              /> */}
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
