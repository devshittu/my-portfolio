// src/components/widgets/home/recent-projects/recent-projects.tsx
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getProjectsPaginated } from '@/firebase/projects';
import { ProjectItem as ProjectType } from '@/types/project';
import { AppSection } from '@/components/widgets/home/app-section';
import { ProjectItem } from '../../project-cards';
import { ProjectShimmer } from '@/components/ui/project-shimmer';
import { ViewAllLink } from '@/components/ui/view-all-link';
import { logger } from '@/libs/logger';

const RECENT_PROJECTS_LIMIT = 3;

interface RecentProjectsProps {
  description?: string;
}

const RecentProjects = ({ description }: RecentProjectsProps) => {
  logger.debug('[RecentProjects] Component rendered.');

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['recentProjects', RECENT_PROJECTS_LIMIT],
    queryFn: async () => {
      logger.debug('[RecentProjects] useQuery queryFn called.');
      const { projects } = await getProjectsPaginated(RECENT_PROJECTS_LIMIT);
      logger.debug(
        '[RecentProjects] getProjectsPaginated result (projects):',
        projects.map((p) => p.id),
      );
      return projects;
    },
    refetchOnWindowFocus: false,
  });

  logger.debug(
    '[RecentProjects] State - isLoading:',
    isLoading,
    'isError:',
    isError,
    'data length:',
    data?.length,
  );

  // Loading State
  if (isLoading) {
    logger.debug('[RecentProjects] Displaying loading state (shimmer).');
    return (
      <AppSection title="Recent Projects" description={description}>
        <div className="grid grid-cols-1 gap-12">
          {Array.from({ length: RECENT_PROJECTS_LIMIT }).map((_, i) => (
            <ProjectShimmer key={i} />
          ))}
        </div>
      </AppSection>
    );
  }

  // Error State
  if (isError) {
    const errorMessage = (error as Error)?.message || 'Unknown error';
    logger.error('[RecentProjects] Displaying error state. Error:', errorMessage);
    return (
      <AppSection title="Recent Projects" description={description}>
        <div className="text-center py-12">
          <p className="text-red-500 dark:text-red-400 text-lg">
            Error loading recent projects: {errorMessage}
          </p>
        </div>
      </AppSection>
    );
  }

  // Empty State
  if (!data || data.length === 0) {
    logger.info('[RecentProjects] No projects to display.');
    return (
      <AppSection title="Recent Projects" description={description}>
        <div className="text-center py-12">
          <p className="text-slate-500 dark:text-slate-400 text-lg">No projects to display.</p>
        </div>
      </AppSection>
    );
  }

  // Success State
  logger.debug('[RecentProjects] Displaying projects. Number of projects:', data.length);
  return (
    <AppSection title="Recent Projects" description={description}>
      <ul className="grid grid-cols-1 gap-12">
        {data.map((project) => (
          <li key={project.id}>
            <ProjectItem
              thumbnail={project.thumbnail}
              title={project.title}
              description={project.description}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              category={project.category}
              tags={project.tags}
            />
          </li>
        ))}
      </ul>
      <div className="flex justify-start mt-12">
        <ViewAllLink href="/projects" text="View All Projects" />
      </div>
    </AppSection>
  );
};

export default RecentProjects;

// src/components/widgets/home/recent-projects/recent-projects.tsx
