import axios from 'axios';

import { HASHNODE_API_URL } from '@/config/constant';

export const apiClient = axios.create({
  baseURL: HASHNODE_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `${process.env.HASHNODE_API_KEY}`,
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

// src/libs/api-client.ts
