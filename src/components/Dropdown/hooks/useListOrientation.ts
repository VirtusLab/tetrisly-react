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
    if (window.innerWidth - right < 280) {
      setHorizontalDirection('left');
    } else {
      setHorizontalDirection('right');
    }
    if (window.innerHeight - bottom < 400) {
      setVerticalDirection('top');
    } else {
      setVerticalDirection('bottom');
    }
  }, [containerRef, open]);

  return { horizontalDirection, verticalDirection } as const;
}
