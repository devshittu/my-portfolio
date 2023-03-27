// 'use client';
import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

type AppProviderProps = {
  children: ReactNode;
  theme?: string;
};

export const AppProvider = ({ children, theme }: AppProviderProps) => {
  return (
    <ThemeProvider attribute="class" forcedTheme={theme || undefined}>
      {children}
    </ThemeProvider>
  );
};
