// src/libs/hooks/use-online.ts
import { useEffect, useState } from 'react';

// Helper function to get initial online status
const getInitialOnlineStatus = (): boolean => {
  if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
    return (navigator as NavigatorOnLine).onLine;
  }
  return false;
};

const useOnline = (): boolean => {
  // Initialize with actual online status - no setState in effect needed
  const [online, setOnline] = useState<boolean>(getInitialOnlineStatus);

  useEffect(() => {
    const handleOnline = () => setOnline(true);
    const handleOffline = () => setOnline(false);

    if (window.addEventListener) {
      window.addEventListener('online', handleOnline, false);
      window.addEventListener('offline', handleOffline, false);
    } else {
      (document.body as HTMLBodyElement).ononline = handleOnline;
      (document.body as HTMLBodyElement).onoffline = handleOffline;
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return online;
};

export default useOnline;
// src/libs/hooks/use-online.ts
