import React from 'react';
import ArticleItem from './article-item';
import WeatherAppThumbnail from '../../../../public/project-weather-app.jpg';

const ArticleItems = () => {
  return (
    <ul className="list-none flex flex-col lg:flex-row flex-wrap md:w-10/12 mt-4 -mx-4">
      <ArticleItem
        thumbnail={WeatherAppThumbnail}
        title="A Guide to Creating a React and TypeScript Project Using Webpack"
        description="React and TypeScript are two popular technologies used in web development. React is a JavaScript library used for building user interfaces, while..."
        liveUrl="https://mshittu.hashnode.dev/a-guide-to-creating-a-react-and-typescript-project-using-webpack"
      />

      <ArticleItem
        thumbnail={WeatherAppThumbnail}
        title="Setting up ESLint in a Next.js TypeScript Project: Improving Code Quality and Consistency"
        description="Linting is an essential process for ensuring that our codebase is free of errors, adheres to best practices, and follows a consistent style. By..."
        liveUrl="https://mshittu.hashnode.dev/setting-up-eslint-in-a-nextjs-typescript-project-improving-code-quality-and-consistency"
      />
    </ul>
  );
};

export default ArticleItems;
