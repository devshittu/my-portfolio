import { ReactNode } from 'react';

import { MY_CALENDLY_URL, MY_CONTACT_EMAIL } from '@/config/constant';
import { Link } from '@/components/link';
import { useTheme } from 'next-themes';

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
  const { theme, setTheme } = useTheme();
  return (
    <header className=" w-full  relative">
      <div className="bg-gradient-to-b from-sky-500/20 to-white/30x backdrop:blur-lg fixedx z-10x w-fullx">
        <nav className="mx-auto md:max-w-6xl py-14 md:py-16 flex justify-center md:justify-between md:justify-endx">
          <div className="inline-flex rounded-3xl shadow-xl shadow-cyan-700/10 my-3 bg-white ">
            {theme === 'light' ? (
              <Link
                href="/"
                className="p-3 sm:px-6 inline-flex items-center justify-center"
                onClick={() => setTheme('dark')}
                icon={
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
                    className=""
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                }
              />
            ) : (
              <Link
                href="/"
                className="p-3 sm:px-6 inline-flex items-center justify-center"
                onClick={() => setTheme('light')}
                icon={
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
                  >
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                }
              />
            )}
          </div>
          <div
            className="inline-flex rounded-3xl shadow-xl shadow-cyan-700/10 my-3 text-sm sm:text-base capitalize 
            bg-white "
          >
            <Link
              href="/about"
              className="!rounded-l-3xl py-[10px]  px-[12px] sm:px-6
            inline-flex items-center justify-center font-medium
            border border-gray-50 text-center focus:bg-primary"
            >
              {' '}
              About
            </Link>
            <Link
              href="/blog"
              className="py-[10px] px-[12px] sm:px-6 inline-flex items-center justify-center font-medium border 
            border-gray-50 text-center focus:bg-primary"
            >
              {' '}
              Blog/Articles
            </Link>
            <Link
              href="/blog"
              className="!rounded-r-3xl py-[10px] px-[12px] sm:px-6 inline-flex 
            items-center justify-center font-medium border border-gray-50 text-center focus:bg-primary "
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
