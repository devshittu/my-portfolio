import React from 'react';
import ProjectItem from './project-item';

const ProjectItems = () => {
  return (
    <ul className="list-none flex flex-col lg:flex-row flex-wrap md:w-10/12 mt-4 -mx-4">
      <ProjectItem
        title="Weather App"
        description="Built with Vite, ReactJS, and Vanilla JS, this weather website automatically detects your location or nearby areas and gives you the latest weather updates. Plus, it features a sleek dark mode theme, so you can stay up to date on the weather no matter the time of day. 🌙"
        githubLink="https://github.com/devshittu/weather-app"
      />
    </ul>
  );
};

export default ProjectItems;
