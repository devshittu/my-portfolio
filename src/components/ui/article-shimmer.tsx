// src/components/ui/article-shimmer.tsx
import React from 'react';

export const ArticleShimmer = () => (
  <li>
    <div className="md:flex gap-6 p-4 animate-pulse">
      {/* Image Skeleton */}
      <div className="md:flex-shrink-0 md:w-56">
        <div className="h-44 bg-slate-200 dark:bg-slate-700 rounded-lg"></div>
      </div>

      {/* Content Skeleton */}
      <div className="flex-1 mt-4 md:mt-0">
        {/* Title */}
        <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-3/4 mb-3"></div>

        {/* Brief */}
        <div className="space-y-2 mb-4">
          <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full"></div>
          <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-5/6"></div>
        </div>

        {/* Meta */}
        <div className="flex gap-4">
          <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-24"></div>
          <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-20"></div>
        </div>
      </div>
    </div>
  </li>
);
