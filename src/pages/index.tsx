import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { TOOLS_AND_SOFTWARES } from '@/config/constant';
import { ReactElement } from 'react';
import { PublicLayout } from '@/layouts/public-layout';
import { Link } from '@/components/link';
import profilePhoto from '../../public/me.jpeg';
import ProjectItems from '@/components/widgets/project-cards/project-items';

const Home = function () {
  return (
    <>
      <Head>
        <title>Shittu Muhammed</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="text-slate-700 dark:text-slate-200">
        <div className="container md:max-w-6xl px-4 md:px-0 mx-auto ">
          <section>
            <div className="container md:max-w-6xl flex flex-col items-center py-10 md:py-16 mx-auto md:flex-row">
              <div className="flex flex-col items-start text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 animate-slide-in-left">
                {/* <h2 className="mb-8 text-xs font-semibold tracking-widest uppercase title-font">
                {' '}
                Hi, I &apos;m{' '}
              </h2> */}
                <h1 className="mb-4 md:mb-8 text-6xl font-black tracking-tighter md:text-8xl">
                  Muhammed Shittu{' '}
                </h1>
                <h3 className="mb-4 md:mb-8 text-4xl font-bold tracking-tighter md:text-5xl text-cyan-800 dark:text-cyan-400 ">
                  Full Stack Software Engineer{' '}
                </h3>
                <p className="mb-8 md:text-2xl leading-relaxed text-left">
                  {' '}
                  I&apos;m passionate about collaborating with talented individuals to create
                  outstanding software.
                  {/* I'm passionate about crafting innovative and high-performance web
                  applications using my skills in FullStack development, cloud technologies, and
                  automated testing to deliver outstanding results that exceed expectations. */}
                </p>
                <div className="flex flex-col justify-center lg:flex-row ">
                  <Link
                    href="#"
                    text="LinkedIn"
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
                        className="flex-shrink-0 w-6 h-6 transition duration-75 dark:text-gray-400 "
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    }
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/3 lg:max-w-lg md:w-1/2 hidden md:block  animate-swing-in-right-fwd">
                <Image
                  width={600}
                  height={720}
                  className="object-cover object-center rounded-lg"
                  src={profilePhoto}
                  alt="me"
                  priority
                />
              </div>
            </div>
          </section>
          <section className="py-20 md:py-24">
            <div className="flex md:flex-row flex-col justify-between gap-5">
              <div className="section-body w-full md:w-1/2">
                <div className=" relative float-left hidden md:block">
                  {/* <Image
                    width={112}
                    height={112}
                    className="mb-0x w-14 h-14 md:w-28 md:h-28 rounded-full mr-3 md:mr-6"
                    src="https://dummyimage.com/128x128/F3F4F7/8693ac"
                    alt="product designer"
                  /> */}
                  <Image
                    className="mb-0x w-14 h-14 md:w-28 md:h-28 rounded-full mr-3 md:mr-6"
                    src={profilePhoto}
                    alt="product designer"
                  />
                </div>
                <h2 className="text-5xl md:text-8xl font-extrabold ">
                  I build{' '}
                  <span className="text-cyan-800 dark:text-cyan-400"> delightful products</span>
                </h2>
              </div>
              <div className=" w-full md:w-5/12 text-lg md:text-2xl leading-relaxed">
                <p>
                  A dynamic engineer with 2 years of experience building outstanding web
                  applications and optimizing code for peak performance, proficient in a wide range
                  of languages and frameworks.
                </p>{' '}
                {/* <div className="">LinkedIn Resume</div> */}
                <div className="flex flex-wrap flex-row mt-6 lg:mb-0 mb-6 w-10/12 gap-4">
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
                    <span className="flex-1 ml-3 whitespace-nowrap">Twitter</span>
                  </a>
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
                    <span className="flex-1 ml-3 whitespace-nowrap">Email</span>
                  </a>
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
                    <span className="flex-1 ml-3 whitespace-nowrap">Resume</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="py-20">
            <div className="section-heading">
              <h1 className="text-6xl font-bold">Projects</h1>
              <p className="md:w-8/12 mt-4 mr-auto">
                My work largely revolves on the front-end with Vue/Nuxt.js, React/Next.js &
                TypeScript, Backend with and Node.js, Laravel and Django. Here are some of the
                projects I have worked on to showcase my skills:
              </p>
            </div>
            <div className="section-body mt-12">
              <ProjectItems />
            </div>
          </section>
          {/* Tools and Features */}
          <section className="border-t border-slate-300  py-24">
            <div className="section-heading">
              <h1 className="text-6xl font-bold">Tools & Software</h1>
              <p className="md:w-8/12 mt-4 mr-auto">
                Over the years, I had the opportunity to work with various software, tools and
                frameworks. Here are some of them:
              </p>
            </div>
            <div className="section-body mt-12">
              <ul className="list-none flex flex-colx lg:flex-row flex-wrap md:w-10/12 mt-4 -mx-4 text-3xl md:text-3xl  text-cyan-800 dark:text-cyan-400">
                {TOOLS_AND_SOFTWARES.map((tool, i) => (
                  <li key={i}>
                    <a target="_blank" className={`flex items-center font-normal rounded-lg`}>
                      <span className={` flex-1 whitespace-nowrap m-4`}>{tool}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          {/* Subscribe */}
          {/* <!-- COMPONENT CODE --> */}
          <section className="w-full rounded-lg">
            <div className="md:mx-auto py-24  border-t border-slate-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className=" ">
                  <h1 className="font-bold text-4xl">Stay up to date </h1>
                  <p className="text-lg mt-8">
                    Get emails from me about web development, tech, and early access to new
                    projects.
                  </p>
                </div>
                <div className="md:py-2 md:mx-4 lg:py-10">
                  <div className="rounded-full bg-white shadow flex w-full">
                    <input
                      type="text"
                      placeholder="Enter your email to join our mailing list"
                      className="w-full rounded-tl-full rounded-bl-full py-2 px-4"
                    />
                    <button className="bg-gray-400 rounded-tr-full rounded-br-full py-2 px-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- COMPONENT CODE --> */}
        </div>
      </main>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default Home;
