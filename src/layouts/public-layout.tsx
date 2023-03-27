import { ReactNode } from 'react';

import { MY_CALENDLY_URL, MY_CONTACT_EMAIL } from '@/config/constant';
import { Link } from '@/components/link';
import Image from 'next/image';
import ThemeSwitch from '@/components/theme-switch/theme-switch';

type PublicLayoutProps = {
  children: ReactNode;
};

export const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

const Header = () => {
  return (
    <header className=" w-full  relative">
      <div className="bg-gradient-to-b from-sky-500/20 to-white/30x backdrop:blur-lg fixedx z-10x w-fullx">
        <nav className="mx-auto md:max-w-6xl py-14 md:py-16 flex justify-center md:justify-between md:justify-endx">
          <div className="flex items-center">
            <Link href="/">
              <Image
                width={112}
                height={112}
                className="w-8 h-8 md:w-20 md:h-20 rounded-full mr-3 md:mr-6 shadow-xl shadow-cyan-700/10"
                src="https://dummyimage.com/128x128/F3F4F7/8693ac"
                alt=""
              />
            </Link>
            <div className="rounded-3xl shadow-cyan-700/10 my-3 ">
              <ThemeSwitch />
            </div>
          </div>
          <div
            className="inline-flex h-fit rounded-3xl items-center shadow-xl shadow-cyan-700/10 my-3 text-sm sm:text-base capitalize 
            bg-white dark:bg-cyan-700/25 text-slate-800 "
          >
            <Link
              href="/about"
              className="!rounded-l-3xl py-[10px]  px-[12px] sm:px-6
            inline-flex items-center justify-center font-medium
            text-center focus:bg-primary"
            >
              {' '}
              About
            </Link>
            <Link
              href="/blog"
              className="py-[10px] px-[12px] sm:px-6 inline-flex items-center justify-center font-medium text-center focus:bg-primary"
            >
              {' '}
              Blog/Articles
            </Link>
            <Link
              href="/blog"
              className="!rounded-r-3xl py-[10px] px-[12px] sm:px-6 inline-flex 
            items-center justify-center font-medium  text-center focus:bg-primary "
            >
              {' '}
              Work
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className="container md:max-w-6xl mx-auto  py-20 border-t border-slate-300">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4 md:-ml-4">
            <h4 className="text-3xl font-semibold block mb-4"> Muhammed Shittu</h4>
            <h5 className="text-lg mt-0 mb-2 md:w-9/12">
              Passionate UI engineer looking bridge the gap between design and code
            </h5>

            <div className="flex flex-col lg:flex-row mt-6 lg:mb-0 mb-6">
              <a
                target="_blank"
                href="https://linkedin.com/in/muhammedshittu"
                className="flex items-center font-normal rounded-lg"
              >
                <svg
                  className="flex-shrink-0 w-8 h-8 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">LinkedIn</span>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4x">
            <div className="flex flex-wrap mb-6">
              <div className="w-full lg:w-1/2 px-4">
                <h4 className="block text-3xl font-semibold mb-4">Contact</h4>
                <ul className="list-unstyled">
                  <li>
                    <a className="block pb-2" href={`mailto:${MY_CONTACT_EMAIL}`}>
                      Email Muhammed
                    </a>
                  </li>
                  <li>
                    <a className="block pb-2" href={MY_CALENDLY_URL}>
                      Chat with Muhammed
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-1/2 px-4">
                <h4 className="block text-3xl font-semibold mb-4">General</h4>
                <ul className="list-unstyled">
                  <li>
                    <a className="block pb-2" href="/mission">
                      Mission
                    </a>
                  </li>
                  <li>
                    <a className="block pb-2" href="/story">
                      Story
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="px-4 md:mx-auto md:mt-6">
            <div className="">
              All rights reserved © <span id="">2023</span>
              <a href="#" className=" hover:text-gray-800" target="_blank">
                {' '}
                Muhammed Shittu
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
