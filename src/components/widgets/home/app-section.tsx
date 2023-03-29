import React, { ReactNode } from 'react';

type AppSectionProps = {
    title: string;
    description?: string|undefined;
    children: ReactNode
}

export const AppSection = ({ title, children, description }: AppSectionProps) => {
  return (
    <section className="py-20">
      <div className="section-heading">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="md:w-8/12 mt-4 mr-auto">
          {description}
        </p>
      </div>
      <div className="section-body mt-12">{children}</div>
    </section>
  );
};
