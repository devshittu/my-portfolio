import { apiClient } from '@/libs/api-client';
import { Article } from '../types';
import { useQuery } from '@tanstack/react-query';

type GetArticlesOptions = {
  params: {
    postId: string | undefined;
  };
};

export const getArticles = ({ params }: GetArticlesOptions): Promise<Article[]> => {
  return apiClient.get('/articles', {
    params,
  });
};

export const useArticles = ({ params }: GetArticlesOptions) => {
  const { data, isFetching, isFetched } = useQuery({
    queryKey: ['articles', params],
    queryFn: () => getArticles({ params }),
    enabled: !!params.postId,
    initialData: [],
  });
  return {
    data,
    isLoading: isFetching && !isFetched,
  };
};
