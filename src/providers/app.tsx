// 'use client';
import useOnline from '@/libs/hooks/use-online';
import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

type AppProviderProps = {
  children: ReactNode;
  theme?: string;
};

export const AppProvider = ({ children, theme }: AppProviderProps) => {
  const online = useOnline();
  return (
    <ThemeProvider attribute="class" forcedTheme={theme || undefined}>
      {`You are ${online ? 'online' : 'offline'}`}
      {children}
    </ThemeProvider>
  );
};
