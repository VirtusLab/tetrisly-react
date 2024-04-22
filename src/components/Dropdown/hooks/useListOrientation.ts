import { useEffect, useState } from 'react';

export function useListOrientation({
  open,
  containerRef,
}: {
  open: boolean;
  containerRef: React.RefObject<HTMLElement>;
}) {
  const [horizontalDirection, setHorizontalDirection] = useState<
    'right' | 'left'
  >('left');
  const [verticalDirection, setVerticalDirection] = useState<'bottom' | 'top'>(
    'top',
  );
  useEffect(() => {
    if (!open) return;
    if (!containerRef.current) return;
    const { right, bottom } = containerRef.current.getBoundingClientRect();
    setHorizontalDirection(
      calculateHorizontalDirection(window.innerWidth, right, 280),
    );
    setVerticalDirection(
      calculateVerticalDirection(window.innerHeight, bottom, 400),
    );
  }, [containerRef, open]);

  return { horizontalDirection, verticalDirection } as const;
}

function calculateHorizontalDirection(
  width: number,
  rightEdge: number,
  offset: number,
) {
  if (width - rightEdge < offset) return 'left' as const;
  return 'right' as const;
}
function calculateVerticalDirection(
  height: number,
  bottomEdge: number,
  offset: number,
) {
  if (height - bottomEdge < offset) return 'top' as const;
  return 'bottom' as const;
}
