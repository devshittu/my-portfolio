// src/components/ui/floating-control-panel.tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { FiX, FiChevronUp, FiChevronDown, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { ControlAction, ActionVariant } from '@/types/fcp';

type Size = 'sm' | 'md' | 'lg' | 'xl';
type Position =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'left-center'
  | 'right-center'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';
type Orientation = 'horizontal' | 'vertical';
type Shape = 'rounded' | 'pill';

interface FloatingControlPanelProps {
  actions: ControlAction[];
  size?: Size;
  position?: Position;
  orientation?: Orientation;
  shape?: Shape;
  collapsible?: boolean;
  closable?: boolean;
  showTooltips?: boolean;
  className?: string;
}

const sizeConfig: Record<Size, { container: string; button: string; separator: string }> = {
  sm: {
    container: 'p-2 gap-2',
    button: 'w-8 h-8 text-sm',
    separator: 'h-6',
  },
  md: {
    container: 'p-3 gap-3',
    button: 'w-10 h-10 text-base',
    separator: 'h-8',
  },
  lg: {
    container: 'p-4 gap-4',
    button: 'w-12 h-12 text-lg',
    separator: 'h-10',
  },
  xl: {
    container: 'p-5 gap-5',
    button: 'w-14 h-14 text-xl',
    separator: 'h-12',
  },
};

const positionConfig: Record<Position, string> = {
  'top-left': 'top-4 left-4 sm:top-6 sm:left-6',
  'top-center': 'top-4 left-1/2 -translate-x-1/2 sm:top-6',
  'top-right': 'top-4 right-4 sm:top-6 sm:right-6',
  'left-center': 'top-1/2 -translate-y-1/2 left-4 sm:left-6',
  'right-center': 'top-1/2 -translate-y-1/2 right-4 sm:right-6',
  'bottom-left': 'bottom-4 left-4 sm:bottom-6 sm:left-6',
  'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2 sm:bottom-6',
  'bottom-right': 'bottom-4 right-4 sm:bottom-6 sm:right-6',
};

const shapeConfig: Record<Shape, string> = {
  rounded: 'rounded-2xl',
  pill: 'rounded-full',
};

const variantClasses: Record<ActionVariant, string> = {
  default:
    'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700',
  primary: 'bg-cyan-600 dark:bg-cyan-500 text-white hover:bg-cyan-700 dark:hover:bg-cyan-600',
  success: 'bg-green-600 dark:bg-green-500 text-white hover:bg-green-700 dark:hover:bg-green-600',
  danger: 'bg-red-600 dark:bg-red-500 text-white hover:bg-red-700 dark:hover:bg-red-600',
};

const FloatingControlPanel: React.FC<FloatingControlPanelProps> = ({
  actions,
  size = 'md',
  position = 'bottom-right',
  orientation = 'horizontal',
  shape = 'rounded',
  collapsible = false,
  closable = true,
  showTooltips = true,
  className = '',
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  if (isClosed) return null;

  const config = sizeConfig[size];
  const shapeClass = shapeConfig[shape];

  const getCollapseIcon = () => {
    if (orientation === 'vertical') {
      return isCollapsed ? <FiChevronDown /> : <FiChevronUp />;
    }
    if (position.includes('right')) {
      return isCollapsed ? <FiChevronLeft /> : <FiChevronRight />;
    }
    return isCollapsed ? <FiChevronRight /> : <FiChevronLeft />;
  };

  // Animation variants with proper TypeScript types
  const containerVariants: Variants = {
    initial: {
      scale: 0.8,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 260,
        damping: 20,
      },
    },
    hover: {
      scale: 1.02,
      transition: {
        type: 'spring' as const,
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const actionsVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 300,
        damping: 24,
        staggerChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
      },
    },
  };

  const actionItemVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 300,
        damping: 24,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      className={`fixed ${positionConfig[position]} z-50 ${className}`}
    >
      <div
        className={`
          bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg
          border border-slate-200 dark:border-slate-700
          shadow-xl shadow-slate-300/50 dark:shadow-black/50
          ${shapeClass}
          ${config.container}
          ${orientation === 'vertical' ? 'flex-col' : 'flex-row'}
          flex items-center
          transition-all duration-300 ease-out
        `}
      >
        {/* Actions */}
        <AnimatePresence>
          {!isCollapsed && (
            <motion.div
              variants={actionsVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={`
                flex items-center
                ${orientation === 'vertical' ? 'flex-col gap-2' : 'flex-row gap-2'}
              `}
            >
              {actions.map((action) => {
                const actionVariant = (action.variant || 'default') as ActionVariant;
                return (
                  <motion.div
                    key={action.id}
                    variants={actionItemVariants}
                    className="relative group"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={action.onClick}
                      disabled={action.disabled}
                      className={`
                        ${config.button}
                        ${shapeClass}
                        flex items-center justify-center
                        transition-all duration-200
                        disabled:opacity-50 disabled:cursor-not-allowed
                        focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2
                        dark:focus:ring-offset-slate-900
                        ${variantClasses[actionVariant]}
                      `}
                      aria-label={action.label}
                    >
                      {action.icon}
                    </motion.button>

                    {/* Tooltip */}
                    {showTooltips && (
                      <div
                        className={`
                          absolute z-50 px-3 py-1.5 text-xs font-medium
                          bg-slate-900 dark:bg-slate-700 text-white
                          rounded-lg shadow-lg
                          opacity-0 group-hover:opacity-100
                          transition-opacity duration-200
                          pointer-events-none whitespace-nowrap
                          ${
                            orientation === 'vertical'
                              ? position.includes('right')
                                ? 'right-full mr-2 top-1/2 -translate-y-1/2'
                                : 'left-full ml-2 top-1/2 -translate-y-1/2'
                              : position.includes('bottom') ||
                                position === 'left-center' ||
                                position === 'right-center'
                              ? 'bottom-full mb-2 left-1/2 -translate-x-1/2'
                              : 'top-full mt-2 left-1/2 -translate-x-1/2'
                          }
                        `}
                      >
                        {action.label}
                        <div
                          className={`
                            absolute w-2 h-2 bg-slate-900 dark:bg-slate-700
                            transform rotate-45
                            ${
                              orientation === 'vertical'
                                ? position.includes('right')
                                  ? 'right-0 top-1/2 -translate-y-1/2 translate-x-1/2'
                                  : 'left-0 top-1/2 -translate-y-1/2 -translate-x-1/2'
                                : position.includes('bottom') ||
                                  position === 'left-center' ||
                                  position === 'right-center'
                                ? 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2'
                                : 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2'
                            }
                          `}
                        />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Controls */}
        {(collapsible || closable) && (
          <div
            className={`
              flex items-center
              ${orientation === 'vertical' ? 'flex-col gap-2' : 'flex-row gap-2'}
              ${!isCollapsed && (orientation === 'vertical' ? 'mt-2' : 'ml-2')}
            `}
          >
            {/* Separator */}
            {!isCollapsed && (
              <div
                className={`
                  bg-slate-300 dark:bg-slate-700 self-center
                  ${orientation === 'vertical' ? 'w-full h-px' : `w-px ${config.separator}`}
                `}
              />
            )}

            {collapsible && (
              <motion.button
                whileHover={{ scale: 1.05, rotate: 180 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring' as const, stiffness: 260, damping: 20 }}
                onClick={() => setIsCollapsed(!isCollapsed)}
                className={`
                  ${config.button}
                  ${shapeClass}
                  flex items-center justify-center
                  bg-slate-100 dark:bg-slate-700
                  text-slate-700 dark:text-slate-200
                  hover:bg-slate-200 dark:hover:bg-slate-600
                  transition-colors duration-200
                  focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2
                  dark:focus:ring-offset-slate-900
                `}
                aria-label={isCollapsed ? 'Expand' : 'Collapse'}
              >
                {getCollapseIcon()}
              </motion.button>
            )}

            {closable && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsClosed(true)}
                className={`
                  ${config.button}
                  ${shapeClass}
                  flex items-center justify-center
                  bg-red-50 dark:bg-red-900/20
                  text-red-600 dark:text-red-400
                  hover:bg-red-100 dark:hover:bg-red-900/40
                  transition-colors duration-200
                  focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2
                  dark:focus:ring-offset-slate-900
                `}
                aria-label="Close"
              >
                <FiX />
              </motion.button>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default FloatingControlPanel;

// src/components/ui/floating-control-panel.tsx
