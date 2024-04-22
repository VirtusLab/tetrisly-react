import { type ElementRef, type RefObject, useEffect } from 'react';

export const useOutsideClick = (
  containerRef: RefObject<ElementRef<'div'>>,
  onClickOutside?: () => void,
) => {
  useEffect(() => {
    const outsideClick = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      )
        onClickOutside?.();
    };
    document.addEventListener('click', outsideClick);
    return () => document.removeEventListener('click', outsideClick);
  }, [containerRef, onClickOutside]);
};
