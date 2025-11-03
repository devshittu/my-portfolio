// src/features/articles/components/articles-list.tsx
import React from 'react';
import { ArticleNode } from '../../types';
import ArticleItem from './article-item';
import { ArticleShimmer } from '@/components/ui/article-shimmer';

export type ArticlesListProps = {
  articles?: ArticleNode[];
  isLoading?: boolean;
  shimmerCount?: number;
};

export const ArticlesList = ({
  articles = [],
  isLoading = false,
  shimmerCount = 3,
}: ArticlesListProps) => {
  // Loading State
  if (isLoading) {
    return (
      <ul className="list-none flex flex-col gap-6 mt-8">
        {Array.from({ length: shimmerCount }).map((_, index) => (
          <ArticleShimmer key={`shimmer-${index}`} />
        ))}
      </ul>
    );
  }

  // Empty State
  if (!articles || articles.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-500 dark:text-slate-400 text-lg">No articles to display.</p>
      </div>
    );
  }

  // Articles List
  return (
    <ul className="list-none flex flex-col gap-6 mt-8">
      {articles.map((article, index) => (
        <ArticleItem key={article.slug || `article-${index}`} data={article} />
      ))}
    </ul>
  );
};

// import React from 'react';
// import { ArticleNode } from '../../types';
// import ArticleItem from './article-item';

// export type ArticlesListProps = {
//   articles: ArticleNode[];
//   isLoading?: boolean;
// };

// export const ArticlesList = ({ articles }: ArticlesListProps) => {
//   return (
//     <ul className="list-none flex flex-col lg:flex-row flex-wrap md:w-10/12 mt-4 -mx-4">
//       {articles.map((article, index) => {
//         return <ArticleItem key={index} data={article} />;
//       })}
//     </ul>
//   );
// };
