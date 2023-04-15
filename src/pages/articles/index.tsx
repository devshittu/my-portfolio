import { useArticles } from '@/features/articles';
import { PublicLayout } from '@/layouts/public-layout';
import React from 'react';

const ArticlesPage = () => {
  const articles = useArticles({
    params: {
      postId: '1' ?? '',
    },
  });
  console.log(articles);

  if (articles.isLoading) return <div>Loading</div>;

  return <div>ArticlesPage</div>;
};

ArticlesPage.getLayout = function getLayout(page: React.ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default ArticlesPage;
