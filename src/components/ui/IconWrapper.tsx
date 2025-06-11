// eslint-disable @typescript-eslint/no-explicit-any
//ts-check-ignore
// src/components/ui/IconWrapper.tsx
import React from 'react';
import { IconType } from 'react-icons'; // Import IconType for proper type definition

interface IconWrapperProps extends React.SVGProps<SVGSVGElement> {
  icon: IconType;
}

/**
 * A wrapper component for react-icons to ensure proper type handling and reusability.
 * @param {IconWrapperProps} props - The props for the IconWrapper.
 * @param {IconType} props.icon - The react-icon component to render (e.g., FiPackage).
 * @param {string} [props.className] - Optional CSS classes for the icon.
 * @param {number} [props.size] - Optional size for the icon.
 * @param {string} [props.color] - Optional color for the icon.
 * @param {React.SVGProps<SVGSVGElement>} [props...] - Other standard SVG properties.
 */
const IconWrapper: React.FC<IconWrapperProps> = ({ icon: IconComponent, ...props }) => {
  // @ts-ignore
  // Disabling TypeScript check for this line as react-icons components
  // are known to sometimes cause TS2786 errors in stricter configurations,
  // despite being valid React components at runtime.
  return <IconComponent {...props} />;
};

export default IconWrapper;
