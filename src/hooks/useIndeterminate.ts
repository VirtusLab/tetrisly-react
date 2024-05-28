import { useEffect, useRef } from 'react';

export const useIndeterminate = (isIndeterminate: boolean) => {
  const checkboxRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (checkboxRef.current !== null) {
      checkboxRef.current.indeterminate = isIndeterminate;
    }
  }, [checkboxRef, isIndeterminate]);

  return checkboxRef;
};
