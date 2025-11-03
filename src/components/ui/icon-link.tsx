// src/components/ui/icon-link.tsx
import React from 'react';
import { IconType } from 'react-icons';

interface IconLinkProps {
  href: string;
  icon: IconType;
  label: string;
  className?: string;
}

export const IconLink = ({ href, icon: Icon, label, className = '' }: IconLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center py-3 hover:underline text-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 border border-transparent rounded-md transition-colors ${className}`}
    >
      <Icon className="w-5 h-5 mr-2" />
      {label}
    </a>
  );
};
