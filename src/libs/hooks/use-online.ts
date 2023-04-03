import { useEffect, useState } from 'react';

const useOnline = (): boolean => {
  const [online, setOnline] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
      setOnline((navigator as NavigatorOnLine).onLine);
    }

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
