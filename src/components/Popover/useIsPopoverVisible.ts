import { useMemo, useState } from 'react';

export const useIsPopoverVisible = (
  isOpen: boolean | undefined,
): {
  isVisible: boolean;
  hoverHandlers: {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  };
} => {
  const [isChildrenHovered, setIsChildrenHovered] = useState(false);

  const hoverHandlers = useMemo(
    () => ({
      onMouseEnter: () => setIsChildrenHovered(true),
      onMouseLeave: () => setIsChildrenHovered(false),
    }),
    [],
  );

  const isVisible = useMemo(
    () => isOpen ?? isChildrenHovered,
    [isOpen, isChildrenHovered],
  );

  return { isVisible, hoverHandlers };
};
