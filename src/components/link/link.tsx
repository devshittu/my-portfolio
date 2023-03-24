import { ReactNode } from 'react';
import NextLink from 'next/link';
import { text } from 'stream/consumers';

const sizes = {
  lg: {},
  md: {},
  sm: {},
};

export type LinkProps = {
  href: string;
  text?: string;
  children?: ReactNode;
  icon?: JSX.Element;
  shallow?: boolean;
  className?: string;
  size?: keyof typeof sizes;
  onClick?: () => void;
};
export const Link = ({
  href,
  text,
  children,
  icon,
  className,
  onClick,
  shallow = false,
  size = 'md',
}: LinkProps) => {
  return (
    <NextLink
      href={href}
      shallow={shallow}
      className={`flex items-center font-normal dark:text-white ${className}`}
      onClick={onClick}
    >
      {children ? (
        children
      ) : (
        <>
          {icon}
          {text && <span className="flex-1 ml-3 whitespace-nowrap">{text}</span>}
        </>
      )}
    </NextLink>
  );
};
