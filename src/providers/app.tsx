import useOnline from '@/libs/hooks/use-online';
import { ThemeProvider } from 'next-themes';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { queryClient } from '@/libs/react-query';

type AppProviderProps = {
  children: ReactNode;
  theme?: string;
};

export const AppProvider = ({ children, theme }: AppProviderProps) => {
  const online = useOnline();
  return (
    <ThemeProvider attribute="class" forcedTheme={theme || undefined}>
      {/* {`You are ${online ? 'online' : 'offline'}`} */}

      <ErrorBoundary fallback={<div>Something went wrong!</div>} onError={console.error}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          {children}
        </QueryClientProvider>
      </ErrorBoundary>
    </ThemeProvider>
  );
};
