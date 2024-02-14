export type Article = {
  _id: string;
  coverImage: string;
  title: string;
  brief: string;
  slug: string;
  dateAdded: string;
};

// Define the types for the response data
export type CoverImage = {
  url: string | null;
};

export type Author = {
  id: string;
  username: string;
  name: string;
  profilePicture: string;
  followersCount: number;
  tagline: string;
  bio: {
    text: string;
  };
  location: string;
};

export type ArticleNode = {
  title: string;
  brief: string;
  url: string;
  id: string;
  coverImage: CoverImage;
  slug: string;
  publishedAt: string;
  author: Author;
};

export type Edge = {
  node: ArticleNode;
};

export type Posts = {
  edges: Edge[];
};

export type Publication = {
  isTeam: boolean;
  title: string;
  posts: Posts;
};

export type GetArticlesResponse = {
  publication: Publication;
};

export type GetArticlesOptions = {
  params?: {
    query?: string | undefined;
  };

  limit?: number | undefined;
};
