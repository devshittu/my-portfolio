import React from 'react';

export type TagProps = {
  name: string;
};

export const Tag = ({ name }: TagProps) => {
  return (
    <span className="inline-block bg-slate-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
      #{name}
    </span>
  );
};
