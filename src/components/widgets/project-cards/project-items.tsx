import React from 'react'
import { ProjectItem } from './project-item';
import WeatherAppThumbnail from '../../../../public/project-weather-app.jpg';

export const ProjectItems = () => {
  return (
    <section className="py-20">
      <div className="section-heading">
        <h1 className="text-6xl font-bold">Projects</h1>
        <p className="md:w-8/12 mt-4 mr-auto">
          My work largely revolves on the front-end with Vue/Nuxt.js, React/Next.js & TypeScript,
          Backend with and Node.js, Laravel and Django. Here are some of the projects I have worked
          on to showcase my skills:
        </p>
      </div>
      <div className="section-body mt-12">
        <div className="">
          <ProjectItem
            thumbnail={WeatherAppThumbnail}
            title="Weather App"
            description="Built with Vite, ReactJS, and Vanilla JS, this weather website automatically detects your location or nearby areas and gives you the latest weather updates. Plus, it features a sleek dark mode theme, so you can stay up to date on the weather no matter the time of day. 🌙"
            githubUrl="https://github.com/devshittu/weather-app"/>
        </div>
      </div>
    </section>
  );
}
