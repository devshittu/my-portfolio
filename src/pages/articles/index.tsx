import { useArticles } from '@/features/articles';
import { ArticlesList } from '@/features/articles/components/articles-list';
import { PublicLayout } from '@/layouts/public-layout';
import React, { ReactNode } from 'react';

const ArticlesPage = () => {
  const { data, error, isLoading, isSuccess } = useArticles();

  if (isLoading) return <div>Loading</div>;

  return (
    <>
      <main className="py-10 md:py-24">
        <article className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12 text-justify">
          {/* <div>ArticlesPage</div> */}
          <ArticlesList articles={data} isLoading={isLoading} />
        </article>
      </main>
    </>
  );
};

ArticlesPage.getLayout = function getLayout(page: React.ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default ArticlesPage;
