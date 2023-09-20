import { useEffect, useState } from 'react';

export const useLoading = () => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, [isLoading]);

  const startLoading = () => setIsLoading(true);

  return [isLoading, startLoading] as const;
};
