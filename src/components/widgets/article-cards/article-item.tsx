import { Link } from '@/components/link';
import { Tag } from '@/components/tag';
import Image from 'next/image';
import React from 'react';

type ArticleItemProps = {
  thumbnail?: any;
  title: string;
  description: string;
  githubUrl: string;
  category?: string;
  tags?: string[];
  liveUrl?: string;
};

const ArticleItem = ({
  thumbnail,
  title,
  description,
  githubUrl,
  liveUrl,
  category,
  tags,
}: ArticleItemProps) => {
  return (
    <li className="hover:bg-slate-200 dark:hover:bg-slate-800 rounded">
      <div className="md:flex p-4  overflow-hidden">
        <div className="md:flex-shrink-0">
          <Image
            className="rounded-lg w-full md:w-56"
            src={thumbnail || 'https://dummyimage.com/224x170/F3F4F7/8693ac'}
            alt={title}
            width={224}
            height={170}
          />
        </div>
        <div className="mt-4 md:mt-0 md:ml-6">
          {category && (
            <div className="uppercase tracking-wide text-sm font-bold">
              {/* <i className="fas fa-bullhorn mr-2"></i> */} {category}
            </div>
          )}
          <a href="#" className="block mt-1 text-lgx hover:underline font-bold text-xl">
            {title}
          </a>

          <p className="mt-2">{description}</p>
          <div className="pt-4 pb-2">
            <Tag name="vite" />
            <Tag name="ReactJs" />
            <Tag name="VanillaJs" />
          </div>
          <div className="pt-4 pb-2">
            {' '}
            <Link href={githubUrl}>Github Link</Link>
            {liveUrl && <Link href={liveUrl}>Live Preview</Link>}
          </div>
        </div>
      </div>
    </li>
  );
};

export default ArticleItem;
