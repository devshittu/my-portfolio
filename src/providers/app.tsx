import useOnline from '@/libs/hooks/use-online';
import { ThemeProvider } from 'next-themes';
import { queryClient } from '@/libs/react-query';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactNode } from 'react';

type AppProviderProps = {
  children: ReactNode;
  theme?: string;
};

export const AppProvider = ({ children, theme }: AppProviderProps) => {
  const online = useOnline();
  return (
    <ThemeProvider attribute="class" forcedTheme={theme || undefined}>
      {/* {`You are ${online ? 'online' : 'offline'}`} */}
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
      {children}
    </ThemeProvider>
  );
};
