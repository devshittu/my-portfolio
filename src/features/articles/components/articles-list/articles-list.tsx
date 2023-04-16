import React from 'react';
import { Article } from '../../types';
import ArticleItem from './article-item';

export type ArticlesListProps = {
  articles: Article[];
  isLoading?: boolean;
};

export const ArticlesList = ({ articles }: ArticlesListProps) => {
  return (
    <ul className="list-none flex flex-col lg:flex-row flex-wrap md:w-10/12 mt-4 -mx-4">
      {articles.map((article, index) => {
        return <ArticleItem key={index} data={article} />;
      })}
    </ul>
  );
};
