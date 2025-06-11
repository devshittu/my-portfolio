export const API_URL = process.env.NEXT_PUBLIC_API_URL as string;
export const HASHNODE_API_URL = (process.env.NEXT_PUBLIC_HASHNODE_API_URL ||
  'https://gql.hashnode.com/') as string;
export const MY_HASHNODE_USERNAME = (process.env.NEXT_PUBLIC_MY_HASHNODE_USERNAME ||
  'mshittu') as string;
export const MY_HASHNODE_HOST = (process.env.NEXT_PUBLIC_MY_HASHNODE_HOST ||
  'blog.mshittu.com') as string;
export const HASHNODE_API_GRAPHQL_URL = (process.env.NEXT_PUBLIC_HASHNODE_API_GRAPHQL_URL ||
  'https://gql.hashnode.com/v1/graphql') as string;
export const HASHNODE_API_KEY = process.env.HASHNODE_API_KEY as string;

export const MY_TWITTER_URL =
  process.env.NEXT_PUBLIC_MY_TWITTER_URL || 'https://twitter.com/devshittu';
export const MY_LINKEDIN_URL =
  process.env.NEXT_PUBLIC_MY_LINKEDIN_URL || 'https://linkedin.com/in/muhammedshittu';
export const MY_CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_MY_CONTACT_EMAIL || 'mshittu.work@gmail.com';
export const MY_CALENDLY_URL =
  process.env.NEXT_PUBLIC_MY_CALENDLY_URL || 'https://calendly.com/mshittuchat/meetme';
export const MY_HASHNODE_BLOG_URL =
  process.env.NEXT_PUBLIC_MY_HASHNODE_BLOG_URL || 'https://mshittu.hashnode.dev/';
export const MY_RESUME_URL =
  process.env.NEXT_PUBLIC_MY_RESUME_URL ||
  'https://docs.google.com/document/d/1WOsxNJLQLqStUsZTphEbkPy9QMVdVroWhsPnbqzarjk/edit?usp=sharing';
export const MY_GITHUB_URL =
  process.env.NEXT_PUBLIC_MY_GITHUB_URL || 'https://www.github.com/devshittu';

export const TOOLS_AND_SOFTWARES = [
  'React',
  'TypeScript',
  'Next.js',
  'Vue.js',
  'Nuxt.js',
  'Storybook',
  'Node.js',
  'Django',
  'Python',
  'Laravel',
  'PHP',
  'Elasticsearch',
  'MongoDB',
  'Maria/MysqlDB',
];

export const THEME_DARK = 'dark';
export const THEME_LIGHT = 'light';

export const RECENT_ARTICLES_LIMIT = 2;

export const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';
export const IS_TEST = process.env.NODE_ENV === 'test';
export const IS_PRODUCTION = process.env.NODE_ENV === 'production';

export const IS_DEBUG_MODE = process.env.NEXT_PUBLIC_ENABLE_DEBUG_LOGS === 'true';
export const IS_BROWSER = typeof window !== 'undefined';
export const IS_SERVER = typeof window === 'undefined';

// src/config/constant.ts
