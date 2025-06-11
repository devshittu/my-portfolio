// src/components/widgets/home/recent-projects/recent-projects.tsx
// import React from 'react';
// import Link from 'next/link'; // Keep Link for other uses if any, or remove if not needed.
// import { useQuery } from '@tanstack/react-query';
// import { getProjectsPaginated } from '@/firebase/projects';
// import { ProjectItem as ProjectType } from '@/types/project';
// import { AppSection } from '@/components/widgets/home/app-section';
// import { ProjectItem } from '../../project-cards';
// import { logger } from '@/libs/logger';
// import { ViewAllLink } from '@/components/ui/view-all-link'; // NEW IMPORT

// const RECENT_PROJECTS_LIMIT = 3;

// interface RecentProjectsProps {
//   description?: string; // NEW PROP
// }

// const RecentProjects = ({ description }: RecentProjectsProps) => { // Accept description prop
//   logger.debug('[RecentProjects] Component rendered.');
//   const { data, isLoading, isError, error } = useQuery({
//     queryKey: ['recentProjects', RECENT_PROJECTS_LIMIT],
//     queryFn: async () => {
//       logger.debug('[RecentProjects] useQuery queryFn called.');
//       const { projects } = await getProjectsPaginated(RECENT_PROJECTS_LIMIT);
//       logger.debug('[RecentProjects] getProjectsPaginated result (projects):', projects.map(p => p.id));
//       return projects;
//     },
//     refetchOnWindowFocus: false,
//   });

//   // Shimmer Effect Component for Recent Projects
//   const ProjectShimmer = () => (
//     <div className="lg:grid lg:grid-cols-2 mb-16 animate-pulse">
//       <div className="py-8 max-w-3xl lg:max-w-md">
//         <div className="h-6 bg-slate-700 rounded w-3/4 mb-4"></div>
//         <div className="h-4 bg-slate-700 rounded w-full mb-2"></div>
//         <div className="h-4 bg-slate-700 rounded w-5/6 mb-5"></div>
//       </div>
//       <div className="bg-slate-700 lg:grid lg:grid-cols-1 rounded-lg">
//         <div className="h-60 w-full lg:h-full object-cover object-center lg:rounded-tl-md bg-slate-700"></div>
//       </div>
//     </div>
//   );

//   logger.debug('[RecentProjects] isLoading:', isLoading, 'isError:', isError, 'data length:', data?.length);

//   if (isLoading) {
//     logger.debug('[RecentProjects] Displaying loading state (shimmer).');
//     return (
//       <AppSection title="Recent Projects" description={description}> {/* Pass description here */}
//         <div className="grid grid-cols-1 gap-12">
//           {Array.from({ length: RECENT_PROJECTS_LIMIT }).map((_, i) => (
//             <ProjectShimmer key={i} />
//           ))}
//         </div>
//       </AppSection>
//     );
//   }

//   if (isError) {
//     logger.error('[RecentProjects] Displaying error state. Error:', error?.message);
//     return (
//       <AppSection title="Recent Projects" description={description}> {/* Pass description here */}
//         <p className="text-center text-red-400">Error loading recent projects: {error?.message}</p>
//       </AppSection>
//     );
//   }

//   if (!data || data.length === 0) {
//     logger.info('[RecentProjects] No projects to display.');
//     return (
//       <AppSection title="Recent Projects" description={description}> {/* Pass description here */}
//         <p className="text-center text-gray-400">No projects to display.</p>
//       </AppSection>
//     );
//   }

//   logger.debug('[RecentProjects] Displaying projects. Number of projects:', data.length);
//   return (
//     <AppSection title="Recent Projects" description={description}> {/* Pass description here */}
//       <ul className="grid grid-cols-1 gap-12">
//         {data.map((project) => (
//           <li key={project.id}>
//             <ProjectItem
//               thumbnail={project.thumbnail}
//               title={project.title}
//               description={project.description}
//               githubUrl={project.githubUrl}
//               liveUrl={project.liveUrl}
//               category={project.category}
//               tags={project.tags}
//             />
//           </li>
//         ))}
//       </ul>
//       <div className="flex justify-start mt-12"> {/* Changed to justify-start for left alignment */}
//         <ViewAllLink href="/projects" text="View All Projects" /> {/* Use the new component */}
//       </div>
//     </AppSection>
//   );
// };

// export default RecentProjects;

// src/components/widgets/home/recent-projects/recent-projects.tsx
import React from 'react';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { getProjectsPaginated } from '@/firebase/projects';
import { ProjectItem as ProjectType } from '@/types/project';
import { AppSection } from '@/components/widgets/home/app-section';
import { ProjectItem } from '../../project-cards';
import { logger } from '@/libs/logger';
import { ViewAllLink } from '@/components/ui/view-all-link';

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

  // Shimmer Effect Component for Recent Projects
  const ProjectShimmer = () => (
    <div className="lg:grid lg:grid-cols-2 mb-16 animate-pulse">
      <div className="py-8 max-w-3xl lg:max-w-md">
        <div className="h-6 bg-slate-700 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-slate-700 rounded w-full mb-2"></div>
        <div className="h-4 bg-slate-700 rounded w-5/6 mb-5"></div>
      </div>
      <div className="bg-slate-700 lg:grid lg:grid-cols-1 rounded-lg">
        <div className="h-60 w-full lg:h-full object-cover object-center lg:rounded-tl-md bg-slate-700"></div>
      </div>
    </div>
  );

  logger.debug(
    '[RecentProjects] isLoading:',
    isLoading,
    'isError:',
    isError,
    'data length:',
    data?.length,
  );

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

  // Fix: Cast error to Error to access message property
  if (isError) {
    const errorMessage = (error as Error)?.message || 'Unknown error';
    logger.error('[RecentProjects] Displaying error state. Error:', errorMessage);
    return (
      <AppSection title="Recent Projects" description={description}>
        <p className="text-center text-red-400">Error loading recent projects: {errorMessage}</p>
      </AppSection>
    );
  }

  if (!data || data.length === 0) {
    logger.info('[RecentProjects] No projects to display.');
    return (
      <AppSection title="Recent Projects" description={description}>
        <p className="text-center text-gray-400">No projects to display.</p>
      </AppSection>
    );
  }

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
