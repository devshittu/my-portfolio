// src/components/ui/view-all-link.tsx
import Link from 'next/link';
import React from 'react';

interface ViewAllLinkProps {
  href: string;
  text: string;
}

export const ViewAllLink = ({ href, text }: ViewAllLinkProps) => {
  return (
    <Link
      href={href}
      className="font-semibold py-2 text-cyan-400 text-smx mt-6 inline-flex items-center group"
    >
      <p>{text}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 ml-1 stroke-2 group-hover:translate-x-2 delay-100 duration-200 ease-in-out"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  );
};
