import React from 'react';
import { ProjectItem } from './project-item';
import WeatherAppThumbnail from '../../../../public/project-weather-app.jpg';

export const ProjectItems = () => {
  return (
    <div className="">
      <ProjectItem
        thumbnail={WeatherAppThumbnail}
        title="Weather App"
        description="Built with Vite, ReactJS, and Vanilla JS, this weather website automatically detects your location or nearby areas and gives you the latest weather updates. Plus, it features a sleek dark mode theme, so you can stay up to date on the weather no matter the time of day. 🌙"
        githubUrl="https://github.com/devshittu/weather-app"
      />
    </div>
  );
};
