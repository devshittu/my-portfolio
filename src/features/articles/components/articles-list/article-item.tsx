// src/features/articles/components/article-item.tsx
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCalendar, FiClock, FiFileText } from 'react-icons/fi';
import { ArticleNode } from '@/features/articles/types';
import { MY_HASHNODE_BLOG_URL } from '@/config/constant';

type ArticleItemProps = {
  data: ArticleNode;
};

const ArticleItem = ({ data }: ArticleItemProps) => {
  // Format date if available
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  // Calculate reading time (rough estimate: 200 words per minute)
  const calculateReadingTime = (brief: string) => {
    const words = brief.split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min read`;
  };

  return (
    <li className="group">
      <motion.a
        href={`${MY_HASHNODE_BLOG_URL}${data.slug}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="block"
      >
        <div className="md:flex gap-8 hover:bg-slate-50 dark:hover:bg-slate-800/30 rounded-lg p-6 transition-colors duration-200">
          {/* Image Section with Accent Lines */}
          <div className="md:flex-shrink-0 md:w-56 relative">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900"
            >
              {data.coverImage?.url ? (
                <>
                  <Image
                    className="w-full h-44 object-cover rounded-lg"
                    src={data.coverImage.url}
                    alt={data.title}
                    width={224}
                    height={170}
                  />
                  {/* Subtle Accent Line - Bottom */}
                  <div className="absolute bottom-0 left-0 w-1/4 h-1 bg-gradient-to-r from-cyan-500 to-cyan-600 dark:from-cyan-400 dark:to-cyan-500"></div>

                  {/* Subtle Accent Line - Right */}
                  <div className="absolute top-0 right-0 w-1 h-1/4 bg-gradient-to-b from-cyan-500 to-cyan-600 dark:from-cyan-400 dark:to-cyan-500"></div>
                </>
              ) : (
                // Beautiful Placeholder with Icon
                <div className="w-full h-44 flex items-center justify-center relative">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 1px, transparent 10px)`,
                      }}
                    ></div>
                  </div>

                  {/* Icon */}
                  <FiFileText className="w-16 h-16 text-slate-400 dark:text-slate-500 relative z-10" />

                  {/* Subtle Accent Line - Bottom */}
                  <div className="absolute bottom-0 left-0 w-1/4 h-1 bg-gradient-to-r from-cyan-500 to-cyan-600 dark:from-cyan-400 dark:to-cyan-500"></div>

                  {/* Subtle Accent Line - Right */}
                  <div className="absolute top-0 right-0 w-1 h-1/4 bg-gradient-to-b from-cyan-500 to-cyan-600 dark:from-cyan-400 dark:to-cyan-500"></div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Content Section */}
          <div className="flex-1 mt-6 md:mt-0 flex flex-col justify-between">
            <div>
              {/* Title - Larger and Bolder */}
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-200 leading-snug">
                {data.title}
              </h3>

              {/* Brief - Better spacing */}
              <p className="text-base lg:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 line-clamp-2">
                {data.brief}
              </p>
            </div>

            {/* Meta Information - Slightly larger */}
            <div className="flex items-center gap-6 text-sm lg:text-base text-slate-500 dark:text-slate-400">
              {data.publishedAt && (
                <div className="flex items-center gap-2">
                  <FiCalendar className="w-4 h-4" />
                  <span>{formatDate(data.publishedAt)}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <FiClock className="w-4 h-4" />
                <span>{calculateReadingTime(data.brief)}</span>
              </div>
            </div>
          </div>

          {/* Arrow Icon */}
          <div className="hidden md:flex items-center">
            <motion.div
              className="text-cyan-500 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors"
              whileHover={{ x: 4 }}
            >
              <FiArrowRight className="w-6 h-6" />
            </motion.div>
          </div>
        </div>
      </motion.a>
    </li>
  );
};

export default ArticleItem;

// src/features/articles/components/article-item.tsx
