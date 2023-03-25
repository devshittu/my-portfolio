import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};
