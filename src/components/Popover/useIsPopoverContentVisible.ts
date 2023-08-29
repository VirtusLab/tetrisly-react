import { RefObject, useEffect, useMemo, useState } from 'react';

export const useIsPopoverContentVisible = (
  isOpen: boolean | undefined,
  hoverRef: RefObject<HTMLDivElement>,
): boolean => {
  const [isChildrenHovered, setIsChildrenHovered] = useState(false);

  const isVisible = useMemo(
    () => isOpen ?? isChildrenHovered,
    [isOpen, isChildrenHovered],
  );

  const onMouseEnter = () => setIsChildrenHovered(true);
  const onMouseLeave = () => setIsChildrenHovered(false);

  useEffect(() => {
    hoverRef.current?.addEventListener('mouseenter', onMouseEnter);
    hoverRef.current?.addEventListener('mouseleave', onMouseLeave);
    return () => {
      hoverRef.current?.removeEventListener('mouseenter', onMouseEnter);
      hoverRef.current?.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [hoverRef]);

  return isVisible;
};
