/* eslint-disable react/no-unescaped-entities */
// src/pages/index.tsx
import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import {
  MY_CONTACT_EMAIL,
  MY_GITHUB_URL,
  MY_HASHNODE_BLOG_URL,
  MY_LINKEDIN_URL,
  MY_RESUME_URL,
  MY_TWITTER_URL,
  RECENT_ARTICLES_LIMIT,
  TOOLS_AND_SOFTWARES,
} from '@/config/constant';
import { ReactElement } from 'react';
import { PublicLayout } from '@/layouts/public-layout';
import { Link } from '@/components/link';
import profilePhoto from '../../public/me.jpeg';
// import ArticleItems from '@/components/widgets/article-cards/article-items';
import { ArticlesList } from '@/features/articles/components/articles-list';
import { AppSection } from '@/components/widgets/home/app-section';
import RecentArticles from '@/components/widgets/home/recent-articles/recent-articles';
import RecentProjects from '@/components/widgets/home/recent-projects/recent-projects'; // <--- NEW IMPORT

const Home = function () {
  return (
    <>
      <Head>
        <title>Shittu Muhammed</title>
        <meta
          name="description"
          content="Versatile Full-Stack Developer | Expert in Vue.js, React, TypeScript, and Node.js with Experience in Laravel, Django, and System Infrastructure Design"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="text-slate-700 dark:text-slate-200">
        <div className="container md:max-w-6xl px-4 md:px-0 mx-auto ">
          <section>
            <div className="container md:max-w-6xl flex flex-col items-center py-10 md:py-16 mx-auto md:flex-row">
              <div className="flex flex-col items-start text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 animate-slide-in-left">
                <h1 className="mb-4 md:mb-8 text-5xl font-black tracking-tighter md:text-8xl">
                  Muhammed Shittu{' '}
                </h1>
                <h3 className="mb-4 md:mb-8 text-3xl font-bold tracking-tighter md:text-5xl text-cyan-800 dark:text-cyan-400 ">
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

                <div className="flex flex-row flex-wrap lg:mb-0 mb-6 gap-8">
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
                    Github
                  </a>
                  <a
                    target="_blank"
                    href={MY_LINKEDIN_URL}
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
              <div className="w-full lg:w-1/3 lg:max-w-lg md:w-1/2 hidden md:block  animate-swing-in-right-fwd">
                <Image
                  width={600}
                  height={720}
                  className="object-cover object-center rounded-lg"
                  src={profilePhoto}
                  alt="me"
                  priority
                  loading="eager"
                />
              </div>
            </div>
          </section>
          <section className="py-20 md:py-24">
            <div className="flex md:flex-row flex-col justify-between gap-5">
              <div className="section-body w-full md:w-1/2">
                <div className=" relative float-left hidden md:block">
                  <Image
                    className="mb-0x w-14 h-14 md:w-28 md:h-28 rounded-full mr-3 md:mr-6"
                    src={profilePhoto}
                    alt="Muhammed Shittu"
                  />
                </div>
                <h2 className="text-5xl md:text-8xl font-extrabold ">
                  I build{' '}
                  <span className="text-cyan-800 dark:text-cyan-400"> delightful products</span>
                </h2>
              </div>
              <div className=" w-full md:w-5/12 text-lg md:text-xl leading-relaxed text-justify">
                <p>
                  A dynamic engineer with 5 years of experience building outstanding web
                  applications and optimizing code for peak performance, proficient in a wide range
                  of languages and frameworks.
                </p>{' '}
                <div className="grid grid-cols-2 md:max-w-xs mt-10 lg:mb-0 mb-6 w-10/12 gap-10">
                  <a
                    target="_blank"
                    href={MY_LINKEDIN_URL}
                    className="flex items-center font-normal rounded-lg"
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
                  <a
                    target="_blank"
                    href={MY_TWITTER_URL}
                    className="flex items-center font-normal rounded-lg"
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
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                    </svg>
                    <span className="flex-1 ml-3 whitespace-nowrap">Twitter</span>
                  </a>
                  <a
                    target="_blank"
                    href={`mailto:${MY_CONTACT_EMAIL}`}
                    className="flex items-center font-normal rounded-lg"
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
                      <circle cx="12" cy="12" r="4" />
                      <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" />
                    </svg>
                    <span className="flex-1 ml-3 whitespace-nowrap">Email</span>
                  </a>
                  <a
                    target="_blank"
                    href={MY_RESUME_URL}
                    className="flex items-center font-normal rounded-lg"
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
                      className="flex-shrink-0 h-6 w-6"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                    <span className="flex-1 ml-3 whitespace-nowrap">Resume</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* Recent Projects Section */}
          <RecentProjects
            description="
          My work largely revolves on the front-end with Vue/Nuxt.js, React/Next.js & TypeScript,
          Backend with and Node.js, Laravel and Django. Here are some of the projects I have worked
          on to showcase my skills:"
          />{' '}
          {/* <--- NEW COMPONENT USAGE */}
          {/* Articles */}
          <AppSection
            title="Articles I've written"
            description=" I have gained valuable insights and learned important lessons through my experience
                as a full stack software developer, and I'm excited to share them with you through
                my writing. Whether you're a beginner or an experienced developer, my goal is to
                provide clear, concise, and practical insights that can help you improve your skills
                and build better apps. Check out some of my articles below and share with others."
          >
            <div>
              <RecentArticles count={RECENT_ARTICLES_LIMIT} />
              {/* <ArticlesList /> */}
              <Link
                href={MY_HASHNODE_BLOG_URL}
                className=" font-semibold py-2 text-cyan-400  text-smx  mt-6 inline-flex items-center group"
              >
                <p> View all </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1 stroke-2 group-hover:translate-x-2 delay-100 duration-200 ease-in-out"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </AppSection>
          {/* Tools and Features */}
          <AppSection
            title="Tools & Software"
            description="
                Over the years, I had the opportunity to work with various software, tools and
                frameworks. Here are some of them:"
          >
            <ul className="list-none flex lg:flex-row flex-wrap md:w-10/12 mt-4 -mx-4 text-3xl md:text-3xl  text-cyan-800 dark:text-cyan-400">
              {TOOLS_AND_SOFTWARES.map((tool, i) => (
                <li key={i}>
                  <a target="_blank" className={`flex items-center font-normal rounded-lg`}>
                    <span className={` flex-1 whitespace-nowrap m-4`}>{tool}</span>
                  </a>
                </li>
              ))}
            </ul>
          </AppSection>
        </div>
      </main>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default Home;
