// src/pages/projects/index.tsx
import React from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getProjectsPaginated } from '@/firebase/projects';
import { ProjectItem as ProjectType } from '@/types/project';
import { ProjectItem } from '@/components/widgets/project-cards';
import { PublicLayout } from '@/layouts/public-layout';
import { ReactElement } from 'react';
import Head from 'next/head';
import { logger } from '@/libs/logger'; // Import logger

// Shimmer Effect Component
const ProjectShimmer = () => (
  <div className="lg:grid lg:grid-cols-2 mb-16 animate-pulse">
    <div className="py-8 max-w-3xl lg:max-w-md">
      <div className="h-6 bg-slate-700 rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-slate-700 rounded w-full mb-2"></div>
      <div className="h-4 bg-slate-700 rounded w-5/6 mb-5"></div>
      <div className="h-10 bg-slate-700 rounded w-1/2"></div>
    </div>
    <div className="bg-slate-700 lg:grid lg:grid-cols-1 rounded-lg">
      <div className="h-60 w-full lg:h-full object-cover object-center lg:rounded-tl-md bg-slate-700"></div>
    </div>
  </div>
);

const ALL_PROJECTS_LIMIT = 6; // Limit per page for infinite scroll

const AllProjectsPage = () => {
  logger.debug('[AllProjectsPage] Component rendered.');
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, isError, error } =
    useInfiniteQuery({
      queryKey: ['allProjects'],
      queryFn: async ({ pageParam = null }) => {
        logger.debug(
          '[AllProjectsPage] useInfiniteQuery queryFn called with pageParam:',
          pageParam,
        );
        // pageParam will be the `lastVisibleId` from the previous fetch
        const result = await getProjectsPaginated(ALL_PROJECTS_LIMIT, pageParam);
        logger.debug('[AllProjectsPage] getProjectsPaginated result:', result);
        return result;
      },
      getNextPageParam: (lastPage) => {
        logger.debug(
          '[AllProjectsPage] getNextPageParam called. lastVisibleId:',
          lastPage.lastVisibleId,
        );
        return lastPage.lastVisibleId;
      },
      refetchOnWindowFocus: false,
    });
  const projects = data?.pages.flatMap((page) => page.projects) || [];
  logger.debug(
    '[AllProjectsPage] Current projects array length:',
    projects.length,
    'isLoading:',
    isLoading,
    'isError:',
    isError,
  );

  if (isLoading) {
    logger.debug('[AllProjectsPage] Displaying loading state (shimmer).');
    return (
      <div className="container mx-auto p-4 min-h-screen">
        <Head>
          <title>All Projects</title>
        </Head>
        <h1 className="text-3xl lg:text-4xl font-bold mb-8 text-center text-cyan-400">
          All My Projects
        </h1>
        <div className="grid grid-cols-1 gap-12">
          {Array.from({ length: 3 }).map(
            (
              _,
              i, // Show 3 shimmer effects
            ) => (
              <ProjectShimmer key={i} />
            ),
          )}
        </div>
      </div>
    );
  }

  // Fix: Cast error to Error to access message property
  if (isError) {
    const errorMessage = (error as Error)?.message || 'Unknown error';
    logger.error('[AllProjectsPage] Displaying error state. Error:', errorMessage);
    return (
      <div className="container mx-auto p-4 min-h-screen bg-slate-900 text-white text-center dark:text-red-500">
        <Head>
          <title>All Projects</title>
        </Head>
        <h1 className="text-3xl lg:text-4xl font-bold mb-8 text-center text-cyan-400">
          All My Projects
        </h1>
        <p>Error loading projects: {errorMessage}</p>
      </div>
    );
  }

  logger.debug('[AllProjectsPage] Displaying projects. Number of projects:', projects.length);
  return (
    <>
      <Head>
        <title>All Projects</title>
        <meta name="description" content="Explore all projects by Shittu Muhammed" />
      </Head>
      <div className="container md:max-w-6xl mx-auto p-4 md:px-0">
        <h1 className="text-3xl lg:text-4xl font-bold mb-8 text-center text-cyan-400">
          All My Projects
        </h1>

        {projects.length === 0 && <p className="text-center text-gray-400">No projects found.</p>}

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project) => (
            <ProjectItem
              key={project.id}
              thumbnail={project.thumbnail}
              title={project.title}
              description={project.description}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              category={project.category}
              tags={project.tags}
            />
          ))}
        </div>

        {hasNextPage && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => {
                logger.debug('[AllProjectsPage] Load More button clicked.');
                fetchNextPage();
              }}
              disabled={isFetchingNextPage}
              className="px-6 py-3 bg-cyan-600 text-white rounded-lg shadow-md hover:bg-cyan-700 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isFetchingNextPage ? 'Loading more...' : 'Load More'}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

AllProjectsPage.getLayout = function getLayout(page: ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default AllProjectsPage;
// src/pages/projects/index.tsx
