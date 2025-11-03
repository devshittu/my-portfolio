// src/components/theme-switch/theme-switch.tsx
import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import { FiSun, FiMoon } from 'react-icons/fi';
import { THEME_DARK, THEME_LIGHT } from '@/config/constant';
import Head from 'next/head';

const ThemeSwitch = () => {
  // Initialize mounted state as false - no useEffect needed
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme, forcedTheme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);

  // Set mounted to true on first render (client-side only)
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render anything on server-side to avoid hydration mismatch
  if (!mounted) {
    return (
      <button
        aria-label="Theme toggle"
        className="p-3 sm:px-6 inline-flex items-center justify-center opacity-0"
        disabled
      >
        <span className="w-6 h-6" />
      </button>
    );
  }

  // Use resolvedTheme to get the actual current theme (accounts for system preference)
  const currentTheme = resolvedTheme || theme;
  const isDark = currentTheme === THEME_DARK;
  const disabled = !!forcedTheme;

  const toggleTheme = () => {
    if (disabled || isAnimating) return;

    setIsAnimating(true);
    const newTheme = isDark ? THEME_LIGHT : THEME_DARK;
    setTheme(newTheme);

    // Reset animation state after transition
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <>
      <Head>
        <meta name="theme-color" content={isDark ? '#0C3251' : '#D5EFFF'} />
      </Head>
      <button
        onClick={toggleTheme}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
        className={`p-3 sm:px-6 inline-flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 ${
          disabled ? 'hidden' : ''
        } ${isAnimating ? 'pointer-events-none' : ''}`}
        disabled={disabled}
      >
        <span className="md:mr-2 inline-block relative">
          {/* Sun Icon - Visible in dark mode */}
          <FiSun
            className={`w-6 h-6 absolute inset-0 transition-all duration-500 ease-in-out ${
              isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-0'
            }`}
            aria-hidden="true"
          />

          {/* Moon Icon - Visible in light mode */}
          <FiMoon
            className={`w-6 h-6 transition-all duration-500 ease-in-out ${
              !isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-0'
            }`}
            aria-hidden="true"
          />
        </span>

        <span className="capitalize italic text-slate-600 dark:text-slate-100 hidden md:block transition-opacity duration-300">
          {isDark ? THEME_LIGHT : THEME_DARK}
        </span>
      </button>
    </>
  );
};

export default ThemeSwitch;

// src/components/theme-switch/theme-switch.tsx
// import React, { useLayoutEffect, useState } from 'react';
// import { useTheme } from 'next-themes';
// import { FiSun, FiMoon } from 'react-icons/fi';
// import { THEME_DARK, THEME_LIGHT } from '@/config/constant';
// import Head from 'next/head';

// const ThemeSwitch = () => {
//   const [mounted, setMounted] = useState(false);
//   const { theme, setTheme, resolvedTheme, forcedTheme } = useTheme();
//   const [isAnimating, setIsAnimating] = useState(false);

//   useLayoutEffect(() => {
//     setMounted(true);
//   }, []);

//   // Don't render anything on server-side to avoid hydration mismatch
//   if (!mounted) {
//     return (
//       <button
//         aria-label="Theme toggle"
//         className="p-3 sm:px-6 inline-flex items-center justify-center opacity-0"
//         disabled
//       >
//         <span className="w-6 h-6" />
//       </button>
//     );
//   }

//   // Use resolvedTheme to get the actual current theme (accounts for system preference)
//   const currentTheme = resolvedTheme || theme;
//   const isDark = currentTheme === THEME_DARK;
//   const disabled = !!forcedTheme;

//   const toggleTheme = () => {
//     if (disabled || isAnimating) return;

//     setIsAnimating(true);
//     const newTheme = isDark ? THEME_LIGHT : THEME_DARK;
//     setTheme(newTheme);

//     // Reset animation state after transition
//     setTimeout(() => {
//       setIsAnimating(false);
//     }, 500);
//   };

//   return (
//     <>
//       <Head>
//         <meta name="theme-color" content={isDark ? '#0C3251' : '#D5EFFF'} />
//       </Head>
//       <button
//         onClick={toggleTheme}
//         aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
//         className={`p-3 sm:px-6 inline-flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 ${
//           disabled ? 'hidden' : ''
//         } ${isAnimating ? 'pointer-events-none' : ''}`}
//         disabled={disabled}
//       >
//         <span className="md:mr-2 inline-block relative">
//           {/* Sun Icon - Visible in dark mode */}
//           <FiSun
//             className={`w-6 h-6 absolute inset-0 transition-all duration-500 ease-in-out ${
//               isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-0'
//             }`}
//             aria-hidden="true"
//           />

//           {/* Moon Icon - Visible in light mode */}
//           <FiMoon
//             className={`w-6 h-6 transition-all duration-500 ease-in-out ${
//               !isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-0'
//             }`}
//             aria-hidden="true"
//           />
//         </span>

//         <span className="capitalize italic text-slate-600 dark:text-slate-100 hidden md:block transition-opacity duration-300">
//           {isDark ? THEME_LIGHT : THEME_DARK}
//         </span>
//       </button>
//     </>
//   );
// };

// export default ThemeSwitch;
// src/components/theme-switch/theme-switch.tsx
