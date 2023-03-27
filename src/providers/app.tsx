// 'use client';
import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};
