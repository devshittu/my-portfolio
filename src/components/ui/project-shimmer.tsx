// src/components/ui/project-shimmer.tsx
import React from 'react';

export const ProjectShimmer = () => (
  <div className="lg:grid lg:grid-cols-2 gap-8 mb-16 animate-pulse">
    <div className="flex flex-col justify-center">
      <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full mb-2"></div>
      <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full mb-2"></div>
      <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-5/6 mb-6"></div>
      <div className="flex gap-2 mb-6">
        <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-16"></div>
        <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-20"></div>
        <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-16"></div>
      </div>
      <div className="flex gap-4">
        <div className="h-10 bg-slate-200 dark:bg-slate-700 rounded w-32"></div>
        <div className="h-10 bg-slate-200 dark:bg-slate-700 rounded w-32"></div>
      </div>
    </div>
    <div className="bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700/50 rounded-xl p-4 lg:p-6">
      <div className="h-64 lg:h-80 bg-slate-200 dark:bg-slate-700 rounded-lg"></div>
    </div>
  </div>
);
