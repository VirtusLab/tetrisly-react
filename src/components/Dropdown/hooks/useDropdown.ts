import { type ElementRef, type RefObject, useEffect, useState } from 'react';

export const useDropdown = (
  dropdownContainerRef: RefObject<ElementRef<'div'>>,
) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeDropdown = (e: MouseEvent) => {
      if (
        dropdownContainerRef.current &&
        !dropdownContainerRef.current.contains(e.target as Node)
      )
        setIsOpen(false);
    };
    document.addEventListener('click', closeDropdown);
    return () => document.removeEventListener('click', closeDropdown);
  });

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);

  return {
    isOpen,
    setIsOpen,
    toggle,
    close,
    open,
  } as const;
};
