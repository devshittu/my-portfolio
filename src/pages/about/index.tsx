import { PublicLayout } from '@/layouts/public-layout';
import Image from 'next/image';
import Link from 'next/link';
import React, { ReactElement } from 'react';

const AboutPage = () => {
  return (
    <>
      <main className="py-10 md:py-16 ">
        <article className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter sm:text-7xl">
            <span className="sr-only">Muhammed Shittu - </span>About me
          </h1>
          <div className="mt-6 space-y-6 font-display md:text-xl md:text-2xl tracking-tight">
            <p>
              Welcome to my portfolio! I'm an experienced software engineer with a passion for
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
              I'm also passionate about investing in African startups and leveraging technology to
              drive social impact. I believe that innovation and entrepreneurship are the keys to
              unlocking Africa's full potential, and I'm committed to playing my part in making that
              vision a reality.
            </p>
            <p>
              Explore my portfolio to learn more about my skills, experience, and projects. If
              you're looking for a software engineer who can deliver exceptional results and drive
              business growth, I'm the right person for the job. Let's work together to bring your
              vision to life.
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
              <dt className="font-mono text-sm text-cyan-400">Speakers</dt>
              <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-cyan-700">18</dd>
            </div>
            <div>
              <dt className="font-mono text-sm text-cyan-400">People Attending</dt>
              <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-cyan-700">2,091</dd>
            </div>
            <div>
              <dt className="font-mono text-sm text-cyan-400">Venue</dt>
              <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-cyan-700">
                Staples Center
              </dd>
            </div>
            <div>
              <dt className="font-mono text-sm text-cyan-400">Location</dt>
              <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-cyan-700">
                Los Angeles
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
