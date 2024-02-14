import { apiClient } from '@/libs/api-client';
import { ArticleNode, Edge, GetArticlesResponse } from '../types';
import { useQuery } from '@tanstack/react-query';
import { MY_HASHNODE_HOST } from '@/config/constant';

// Define the getArticles function with TypeScript
export const getArticles = async (limit?: number): Promise<ArticleNode[]> => {
  const queryQL = `
    query Publication {
      publication(host: "${MY_HASHNODE_HOST}") {
        isTeam
        title
        posts(first: 10) {
          edges {
            node {
              title
              brief
              url
              id
              coverImage {
                url
              }
              slug
              publishedAt
              author {
                id
                username
                name
                profilePicture
                followersCount
                tagline
                bio {
                  text
                }
                location
              }
            }
          }
        }
      }
    }
  `;
  const getArticleList = await apiClient.get<GetArticlesResponse>('/', {
    params: {
      query: queryQL,
    },
  });

  let articles = getArticleList.data.publication.posts.edges.map((edge: Edge) => edge.node);
  if (limit !== undefined && limit !== null) {
    articles = articles.slice(0, limit); // only return the first 'limit' articles
  }
  return articles;
};

// Usage with @tanstack/react-query
export const useArticles = (limit?: number) => {
  const { data, isFetching, isFetched, error, isSuccess } = useQuery<ArticleNode[], Error>({
    queryKey: ['articles'],
    queryFn: () => getArticles(limit),
    initialData: [],
  });
  return {
    data,
    isLoading: isFetching && !isFetched,
    error,
    isSuccess,
  };
};
