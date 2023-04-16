import { GraphQLClient, gql } from 'graphql-request';
import axios from 'axios';

import { HASHNODE_API_URL, HASHNODE_API_GRAPHQL_URL } from '@/config/constant';

export const apiClient = axios.create({
  baseURL: HASHNODE_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.HASHNODE_API_KEY}`,
  },
});

apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const message = error.response?.data?.message || error.message;
    console.error(message);
    return Promise.reject(error);
  },
);
export const graphQLClient = new GraphQLClient(HASHNODE_API_GRAPHQL_URL, {
  headers: {
    Authorization: `Bearer ${process.env.HASHNODE_API_KEY}`,
    'Content-Type': 'application/json',
  },
});
