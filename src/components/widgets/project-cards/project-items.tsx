import React from 'react'
import { ProjectItem } from './project-item';

export const ProjectItems = () => {
  return (
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
              <div className="">
                <ProjectItem />
                <ProjectItem />
              </div>
            </div>
          </section>

  )
}
