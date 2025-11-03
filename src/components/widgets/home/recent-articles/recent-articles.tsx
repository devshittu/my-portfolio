// src/components/widgets/home/recent-articles/recent-articles.tsx
import React from 'react';
import { ArticlesList, useArticles } from '@/features/articles';
import { logger } from '@/libs/logger';

type RecentArticlesProps = {
  count?: number;
};

const RecentArticles = ({ count }: RecentArticlesProps) => {
  logger.debug('[RecentArticles] Component rendered with count:', count);

  const { data, error, isLoading, isSuccess } = useArticles(count);

  logger.debug(
    '[RecentArticles] State - isLoading:',
    isLoading,
    'isSuccess:',
    isSuccess,
    'articles count:',
    data?.length,
  );

  // Error handling
  if (error) {
    logger.error('[RecentArticles] Error loading articles:', error);
    return (
      <div className="text-center py-12">
        <p className="text-red-500 dark:text-red-400 text-lg">
          Error loading articles. Please try again later.
        </p>
      </div>
    );
  }

  return <ArticlesList articles={data} isLoading={isLoading} shimmerCount={count || 3} />;
};

export default RecentArticles;
