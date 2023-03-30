import React from 'react';
import ArticleItem from './article-item';
import nextEslint from '../../../../public/nextjs-vscode-eslint.png';
import reactWebpackTS from '../../../../public/react+webpack+typescript.jpeg';

const ArticleItems = () => {
  return (
    <ul className="list-none flex flex-col lg:flex-row flex-wrap md:w-10/12 mt-4 -mx-4">
      <ArticleItem
        thumbnail={reactWebpackTS}
        title="A Guide to Creating a React and TypeScript Project Using Webpack"
        description="React and TypeScript are two popular technologies used in web development. React is a JavaScript library used for building user interfaces, while..."
        liveUrl="https://mshittu.hashnode.dev/a-guide-to-creating-a-react-and-typescript-project-using-webpack"
        tags={['Typescript', 'Webpack', 'reactjs']}
      />

      <ArticleItem
        thumbnail={nextEslint}
        title="Setting up ESLint in a Next.js TypeScript Project: Improving Code Quality and Consistency"
        description="Linting is an essential process for ensuring that our codebase is free of errors, adheres to best practices, and follows a consistent style. By..."
        liveUrl="https://mshittu.hashnode.dev/setting-up-eslint-in-a-nextjs-typescript-project-improving-code-quality-and-consistency"
        tags={['typescript', 'nextjs', 'eslint', 'linting']}
      />
    </ul>
  );
};

export default ArticleItems;
