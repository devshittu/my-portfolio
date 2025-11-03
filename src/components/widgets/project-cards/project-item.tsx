// src/components/widgets/project-cards/project-item.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiPackage, FiGithub, FiExternalLink, FiMaximize2, FiTag } from 'react-icons/fi';
import { ProjectItem as ProjectType } from '@/types/project';
import { IconLink } from '@/components/ui/icon-link';
import { ImagePreviewModal } from '@/components/ui/image-preview-modal';
import { logger } from '@/libs/logger';

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
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handleImageClick = () => {
    if (thumbnail) {
      logger.debug(`[ProjectItem] Opening preview for: ${title}`);
      setIsPreviewOpen(true);
    }
  };

  return (
    <>
      <div className="lg:grid lg:grid-cols-2 gap-8 mb-16">
        {/* Content Section */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-2xl lg:text-3xl tracking-tight font-bold text-slate-900 dark:text-slate-100">
              {title}
            </h2>
            {category && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 rounded-full text-xs font-semibold">
                <FiTag className="w-3 h-3" />
                {category}
              </span>
            )}
          </div>

          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">{description}</p>

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md text-sm border border-slate-200 dark:border-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Action Links */}
          <div className="inline-flex gap-4 font-medium">
            {githubUrl && <IconLink href={githubUrl} icon={FiGithub} label="View on Github" />}
            {liveUrl && <IconLink href={liveUrl} icon={FiExternalLink} label="Live Preview" />}
          </div>
        </div>

        {/* Image Frame Section with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative group"
        >
          <div className="bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700/50 shadow-xl rounded-xl overflow-hidden">
            {/* Decorative Frame Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent pointer-events-none"></div>

            <div className="relative p-4 lg:p-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative bg-slate-200 dark:bg-slate-900 rounded-lg overflow-hidden cursor-pointer"
                onClick={handleImageClick}
              >
                {thumbnail ? (
                  <>
                    <Image
                      src={thumbnail}
                      alt={title}
                      width={1260}
                      height={750}
                      className="w-full h-64 lg:h-80 object-cover object-center"
                    />
                    {/* Overlay on Hover */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center"
                    >
                      <motion.div
                        initial={{ scale: 0.8 }}
                        whileHover={{ scale: 1 }}
                        className="flex flex-col items-center gap-2 text-white"
                      >
                        <FiMaximize2 className="w-12 h-12" />
                        <span className="text-sm font-semibold">Click to preview</span>
                      </motion.div>
                    </motion.div>
                  </>
                ) : (
                  <div className="w-full h-64 lg:h-80 flex items-center justify-center">
                    <FiPackage className="text-slate-400 dark:text-slate-600 w-24 h-24 lg:w-32 lg:h-32" />
                  </div>
                )}
              </motion.div>
            </div>

            {/* Bottom Accent Line */}
            <div className="h-1 bg-gradient-to-r from-cyan-500 to-cyan-600 dark:from-cyan-400 dark:to-cyan-500"></div>
          </div>
        </motion.div>
      </div>

      {/* Preview Modal */}
      {thumbnail && (
        <ImagePreviewModal
          isOpen={isPreviewOpen}
          onClose={() => setIsPreviewOpen(false)}
          imageUrl={thumbnail}
          title={title}
        />
      )}
    </>
  );
};

// src/components/widgets/project-cards/project-item.tsx