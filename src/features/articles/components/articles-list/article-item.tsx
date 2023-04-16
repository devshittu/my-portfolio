import { Link } from '@/components/link';
import { Tag } from '@/components/tag';
import Image from 'next/image';
import React from 'react';
import { Article } from '@/features/articles/types';
import { HASHNODE_API_URL, MY_HASHNODE_BLOG_URL } from '@/config/constant';

// type ArticleItemType = {
//   thumbnail?: any;
//   title: string;
//   description: string;
//   githubUrl?: string;
//   category?: string;
//   tags?: string[];
//   liveUrl: string;
// };

type ArticleItemProps = {
  data: Article;
};

const ArticleItem = ({ data }: ArticleItemProps) => {
  return (
    <li className="hover:bg-slate-200 dark:hover:bg-slate-800 rounded">
      <div className="md:flex p-4  overflow-hidden">
        <div className="md:flex-shrink-0">
          <Image
            className="rounded-lg w-[100vw] md:w-56 h-48 object-cover"
            src={data.coverImage || 'https://dummyimage.com/224x170/F3F4F7/8693ac'}
            alt={data.title}
            width={224}
            height={170}
          />
        </div>
        <div className="mt-4 md:mt-0 md:ml-6">
          {/* {category && (
            <div className="uppercase tracking-wide text-sm font-bold">
               {category}
            </div>
          )} */}
          <a
            href={`${MY_HASHNODE_BLOG_URL}${data.slug}`}
            className="block mt-1 text-lgx hover:underline font-bold text-xl"
          >
            {data.title}
          </a>

          <p className="mt-2">{data.brief}</p>
          <div className="pt-4 pb-2">
            {/* {tags?.map((tag, i) => (
              <Tag key={i} name={tag} />
            ))} */}
          </div>
          <div className="pt-4 pb-2">
            {' '}
            {/* {githubUrl && <Link href={githubUrl}>Github Link</Link>} */}
            {/* {liveUrl && <Link href={liveUrl}>Read more</Link>} */}
          </div>
        </div>
      </div>
    </li>
  );
};

export default ArticleItem;
