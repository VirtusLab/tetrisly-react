import { useState, useEffect } from 'react';

export const useOpacity = () => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setOpacity(1);
  }, []);

  return { opacity };
};
