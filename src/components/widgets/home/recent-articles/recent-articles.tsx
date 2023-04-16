import { ArticlesList, useArticles } from '@/features/articles';
import React from 'react';

type RecentArticlesProps = {
  count?: number;
};

const RecentArticles = ({ count }: RecentArticlesProps) => {
  const { data, error, isLoading, isSuccess } = useArticles(count);
  return <ArticlesList articles={data} isLoading={isLoading} />;
};

export default RecentArticles;
