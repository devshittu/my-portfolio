import { PublicLayout } from '@/layouts/public-layout';
import Image from 'next/image';
import Link from 'next/link';
import React, { ReactElement } from 'react';

const AboutPage = () => {
  return (
    <>
      <main className="py-10 md:py-24">
        <article className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12 text-justify">
          {/* <div>
            <div className="order-first -mx-4x flex flex-auto basis-full overflow-x-auto whitespace-nowrap py-4 font-mono text-sm text-cyan-600 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
              <div className="mx-auto flex items-center gap-4 px-4">
                <p>
                  <time datetime="2022-04-04">04</time>-
                  <time datetime="2022-04-06">06 of April, 2022</time>
                </p>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 6 6"
                  className="h-1.5 w-1.5 overflow-visible fill-current stroke-current"
                >
                  <path d="M3 0L6 3L3 6L0 3Z" strokeWidth="2" strokeLinejoin="round"></path>
                </svg>
                <p>Los Angeles, CA</p>
              </div>
            </div>
          </div> */}
          <h1 className="font-display text-5xl font-bold tracking-tighter sm:text-7xl mb-14">
            <span className="sr-only">Muhammed Shittu - </span>About me
          </h1>
          <div className="mt-6 space-y-6 font-display md:text-xl !leading-relaxed">
            <p>
              Welcome to my portfolio! I&apos;m an experienced software engineer with a passion for
              creating user-centric products that solve real-world problems. My work largely
              revolves around the front-end, utilizing frameworks such as Vue, React, and
              TypeScript, as well as the backend with Node.js and system infrastructure design.
            </p>
            <p>
              With a track record of delivering complex projects on time and within budget, I
              possess the technical expertise and project management skills to take on any
              challenge. My experience includes developing enterprise-level software solutions for
              leading companies in various industries, including healthcare, finance, and
              e-commerce.
            </p>
            <p>
              {' '}
              I&apos;m also passionate about investing in African startups and leveraging technology
              to drive social impact. I believe that innovation and entrepreneurship are the keys to
              unlocking Africa&apos;s full potential, and I&apos;m committed to playing my part in
              making that vision a reality.
            </p>
            <p>
              {''}
              Explore my portfolio to learn more about my skills, experience, and projects. If
              you&apos;re looking for a software engineer who can deliver exceptional results and
              drive business growth, I&apos;m the right person for the job. Let&apos;s work together
              to bring your vision to life.
            </p>
            <p></p>
          </div>
          {/* <Link
            className="inline-flex justify-center rounded-2xl bg-cyan-600 p-4 text-base font-semibold text-white hover:bg-cyan-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 active:text-white/70 mt-10 w-full sm:hiddenx"
            href="/#"
          >
            Get your tickets
          </Link> */}
          <dl className="mt-10 grid grid-cols-2 gap-y-6 gap-x-10 sm:mt-16 sm:gap-y-10 sm:gap-x-16 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            <div>
              <dt className="font-mono text-sm text-cyan-400">Github</dt>
              <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-cyan-700">
                <div className="flex flex-col lg:flex-row mt-6x lg:mb-0 mb-6 gap-8">
                  <a
                    href="http://www.github.com/devshittu"
                    className="inline-flex  items-center py-3 hover:underline border border-transparent rounded-md"
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
                    <span className="flex-1 ml-3 whitespace-nowrap">@devshittu</span>
                  </a>
                  {/* <a
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
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      https://linkedin.com/in/muhammedshittu
                    </span>
                  </a> */}
                </div>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-sm text-cyan-400">LinkedIn</dt>
              <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-cyan-700">
                <div className="flex flex-col lg:flex-row mt-6x lg:mb-0 mb-6 gap-8">
                  <a
                    target="_blank"
                    href="https://linkedin.com/in/muhammedshittu"
                    className="inline-flex  items-center py-3 hover:underline border border-transparent rounded-md"
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
                    <span className="flex-1 ml-3 whitespace-nowrap">/muhammedshittu</span>
                  </a>
                </div>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-sm text-cyan-400">Location</dt>
              <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-cyan-700">
                <div className="flex flex-col lg:flex-row mt-6x lg:mb-0 mb-6 gap-8">
                  <div className="inline-flex  items-center py-3 hover:underline border border-transparent rounded-md">
                    <span className="flex-1 whitespace-nowrap">London, UK</span>
                  </div>
                </div>
              </dd>
            </div>
          </dl>
        </article>
      </main>
    </>
  );
};
AboutPage.getLayout = function getLayout(page: ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};
// AboutPage.theme = 'dark';

export default AboutPage;
