import { ReactNode } from 'react';

import {
  MY_CALENDLY_URL,
  MY_CONTACT_EMAIL,
  MY_GITHUB_URL,
  MY_HASHNODE_BLOG_URL,
  MY_RESUME_URL,
} from '@/config/constant';
import { Link } from '@/components/link';
import Image from 'next/image';
import ThemeSwitch from '@/components/theme-switch/theme-switch';
import profilePhoto from '../../public/me.jpeg';

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
        <nav className="mx-auto md:max-w-6xl py-2 md:py-16 flex justify-center md:justify-between">
          <div className="flex items-center">
            <Link href="/" className="">
              <Image
                width={112}
                height={112}
                className="w-8 h-8 md:w-16 md:h-16 rounded-full mr-3 md:mr-6 shadow-xl shadow-cyan-700/10 ring-offset-2 ring-offset-white dark:ring-offset-black ring ring-cyan-500"
                src={profilePhoto || 'https://dummyimage.com/128x128/F3F4F7/8693ac'}
                alt=""
              />
            </Link>
            <div className="rounded-3xl shadow-cyan-700/10 my-3 ">
              <ThemeSwitch />
            </div>
          </div>
          <div
            className="inline-flex h-fit rounded-3xl items-center shadow-xl shadow-cyan-700/10 my-3x text-sm sm:text-base capitalize 
            bg-white dark:bg-cyan-600 self-center "
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
              href={MY_RESUME_URL}
              className="py-[10px] px-[12px] sm:px-6 inline-flex items-center justify-center font-medium text-center focus:bg-primary"
            >
              {' '}
              Resume
            </Link>
            <Link
              href={MY_HASHNODE_BLOG_URL}
              className="!rounded-r-3xl py-[10px] px-[12px] sm:px-6 inline-flex 
            items-center justify-center font-medium  text-center focus:bg-primary "
            >
              {' '}
              Blog
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
            <h4 className="text-3xl font-bold block mb-4"> Muhammed Shittu</h4>
            <h5 className="text-lg mt-0 mb-2 md:w-9/12">
              Passionate about collaborating with talented individuals to building outstanding
              software.
            </h5>

            <div className="flex flex-col lg:flex-row mt-6 lg:mb-0 mb-6 gap-8">
              <a
                href={MY_GITHUB_URL}
                className="inline-flex  items-center py-3 hover:underline text-cyan-500 border border-transparent rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 mr-2"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Github</span>
              </a>
              <a
                target="_blank"
                href="https://linkedin.com/in/muhammedshittu"
                className="inline-flex  items-center py-3 hover:underline text-cyan-500 border border-transparent rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0 w-6 h-6"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">LinkedIn</span>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4x">
            <div className="flex flex-wrap mb-6">
              <div className="w-full lg:w-1/2 px-4">
                <h4 className="block text-3xl font-bold mb-4">Contact</h4>
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
                <h4 className="block text-3xl font-bold mb-4">General</h4>
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
              <a href="/" className=" hover:text-cyan-400" target="_blank">
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
