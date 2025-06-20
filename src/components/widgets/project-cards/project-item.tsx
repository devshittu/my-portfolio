// src/components/widgets/project-cards/project-item.tsx
import React from 'react';
import Image from 'next/image';
import { ProjectItem as ProjectType } from '@/types/project';
import { FiPackage } from 'react-icons/fi'; // You will need to install react-icons: npm install react-icons

export type ProjectItemProps = ProjectType;

export const ProjectItem = ({
  thumbnail,
  title,
  description,
  githubUrl,
  liveUrl,
  category,
  tags,
}: ProjectItemProps) => {
  return (
    <div className="lg:grid lg:grid-cols-2 mb-16">
      <div className="py-8x max-w-3xl lg:max-w-md">
        <h2 className="text-lg lg:text-xl tracking-tight font-bold">
          <span className="block">{title}</span>
        </h2>
        <p className="mt-5 md:h-48 md:overflow-y-auto md:overflow-hidden">{description}</p>
        <div className="inline-flex mt-5 font-medium gap-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex  items-center py-3 hover:underline text-cyan-500 border border-transparent rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 mr-2"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              View on Github
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center py-3  hover:underline text-cyan-500 font-medium border border-transparent rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 mr-2"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              Live Preview
            </a>
          )}
        </div>
      </div>
      {/* Updated framing for modern, dimmer look adapting to themes */}
      <div className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg rounded-lg overflow-hidden lg:grid lg:grid-cols-1">
        <div className="lg:relative lg:mt-16 lg:ml-16 z-10 flex items-center justify-center bg-slate-200 dark:bg-slate-900">
          {thumbnail ? (
            <Image
              className="lg:absolute lg:inset-0 h-60 w-full lg:h-full object-cover object-center lg:rounded-tl-md"
              src={thumbnail}
              alt={title}
              width={1260}
              height={750}
            />
          ) : (
            // @ts-ignore
            // Updated fallback icon styling for dimmer accent and modern look
            <FiPackage className="text-slate-400 dark:text-slate-500 w-24 h-24 lg:w-48 lg:h-48" />
          )}
        </div>
      </div>
    </div>
  );
};

// // src/components/widgets/project-cards/project-item.tsx
// import React from 'react';
// import Image from 'next/image';
// import { ProjectItem as ProjectType } from '@/types/project';
// import { FiPackage } from 'react-icons/fi';
// // Import the new IconWrapper component
// import IconWrapper from '@/components/ui/IconWrapper';

// export type ProjectItemProps = ProjectType;

// export const ProjectItem = ({
//   thumbnail,
//   title,
//   description,
//   githubUrl,
//   liveUrl,
//   category,
//   tags,
// }: ProjectItemProps) => {
//   return (
//     <div className="lg:grid lg:grid-cols-2 mb-16">
//       <div className="py-8x max-w-3xl lg:max-w-md">
//         <h2 className="text-lg lg:text-xl tracking-tight font-bold">
//           <span className="block">{title}</span>
//         </h2>
//         <p className="mt-5 md:h-48 md:overflow-y-auto md:overflow-hidden">{description}</p>
//         <div className="inline-flex mt-5 font-medium gap-4">
//           {githubUrl && (
//             <a
//               href={githubUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center py-3 hover:underline text-cyan-500 border border-transparent rounded-md"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="w-5 h-5 mr-2"
//               >
//                 <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
//               </svg>
//               View on Github
//             </a>
//           )}
//           {liveUrl && (
//             <a
//               href={liveUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center py-3 hover:underline text-cyan-500 font-medium border border-transparent rounded-md"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="w-5 h-5 mr-2"
//               >
//                 <circle cx="12" cy="12" r="10" />
//                 <line x1="2" y1="12" x2="22" y2="12" />
//                 <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
//               </svg>
//               Live Preview
//             </a>
//           )}
//         </div>
//       </div>
//       <div className="bg-slate-700 lg:grid lg:grid-cols-1 rounded-lg">
//         <div className="lg:relative lg:mt-16 lg:ml-16 bg-slate-700x z-10 flex items-center justify-center">
//           {thumbnail ? (
//             <Image
//               className="lg:absolute lg:inset-0 h-60 w-full lg:h-full object-cover object-center lg:rounded-tl-md"
//               src={thumbnail}
//               alt={title}
//               width={1260}
//               height={750}
//             />
//           ) : (
//             // Use the new IconWrapper component for FiPackage
//             <IconWrapper
//               icon={FiPackage}
//               className="text-slate-400 dark:text-slate-500 w-24 h-24 lg:w-48 lg:h-48"
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };
// src/components/widgets/project-cards/project-item.tsx
