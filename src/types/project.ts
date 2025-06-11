// src/types/project.ts

export type ProjectItem = {
  id?: string; // Firebase document ID
  thumbnail?: string; // Assuming thumbnail can be a URL string or StaticImageData
  title: string;
  description: string;
  githubUrl: string;
  category?: string;
  tags?: string[];
  liveUrl?: string;
};
