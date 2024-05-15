import { useState, useEffect, MutableRefObject } from 'react';

export const useContentDimensions = (
  myRef: MutableRefObject<HTMLDivElement>,
) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const getDimensions = () => ({
      width: myRef.current.offsetWidth,
      height: myRef.current.offsetHeight,
    });

    if (myRef.current) {
      setDimensions(getDimensions());
    }
  }, [myRef]);

  return dimensions;
};
