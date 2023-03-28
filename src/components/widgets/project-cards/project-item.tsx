import Image from 'next/image';
import React from 'react';

type ProjectItemProps = {
  thumbnail?: any;
  title: string;
  description: string;
  githubLink: string;
  category?: string;
  tags?: string[];
  liveUrl?: string;
};

const ProjectItem = ({
  title,
  description,
  githubLink,
  liveUrl,
  category,
  tags,
}: ProjectItemProps) => {
  return (
    <li className="hover:bg-slate-200 dark:hover:bg-slate-800 rounded">
      <div className="md:flex p-4  overflow-hidden">
        <div className="md:flex-shrink-0">
          <Image
            className="rounded-lg w-full md:w-56"
            src="https://dummyimage.com/224x170/F3F4F7/8693ac"
            alt="Woman paying for a purchase"
            width={224}
            height={170}
          />
        </div>
        <div className="mt-4 md:mt-0 md:ml-6">
          <div className="uppercase tracking-wide text-sm font-bold">
            <i className="fas fa-bullhorn mr-2"></i>Marketing
          </div>
          <a href="#" className="block mt-1 text-lg hover:underline font-bold">
            Looking for blogger
          </a>

          <p className="mt-2">
            Getting a new business off the ground is a lot of hard work. Here are five ideas you can
            use to find your first customers.
          </p>
          <div className="pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProjectItem;
