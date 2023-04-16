import { gql } from 'graphql-request';
import { apiClient, graphQLClient } from '@/libs/api-client';
import { Article } from '../types';
import { useQuery } from '@tanstack/react-query';
import { MY_HASHNODE_USERNAME } from '@/config/constant';

type GetArticlesOptions = {
  params?: {
    query?: string | undefined;
  };

  limit?: number | undefined;
};

export const getArticles = async (limit?: number): Promise<Article[]> => {
  const queryQL = `
    {
      user(username: "${MY_HASHNODE_USERNAME}") {
        publication {
          posts(page: 0) {
            _id
            title
            brief
            coverImage
            slug
            dateAdded
          }
        }
      }
    }
  `;
  const getArticleList = await apiClient.get('/', {
    params: {
      query: queryQL,
    },
  });
  // return getArticleList.data.user.publication.posts;

  let articles = getArticleList.data.user.publication.posts;
  if (limit !== undefined && limit !== null) {
    articles = articles.slice(0, limit); // only return the first 'limit' articles
  }
  return articles;
};

export const useArticles = (limit?: number) => {
  const { data, isFetching, isFetched, error, isSuccess } = useQuery({
    queryKey: ['articles'],
    queryFn: () => getArticles(limit),
    // enabled: !!params.postId,
    initialData: [],
  });
  return {
    data,
    isLoading: isFetching && !isFetched,
    error,
    isSuccess,
  };
};
