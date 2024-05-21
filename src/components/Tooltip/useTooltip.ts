import { IconName } from '@virtuslab/tetrisly-icons';
import { useEffect, useMemo, useRef, useState } from 'react';

import { stylesBuilder } from './stylesBuilder';
import type { TooltipProps } from './Tooltip.props';
import { getIconName, getArrowPosition, HTMLElementDimensions } from './utils';

import type { BaseProps } from '@/types';

export const useTooltip = ({
  arrowheadPosition = 'middle',
  tooltipPosition = 'top',
  custom,
  arrowSize,
}: Omit<TooltipProps, 'text'> & { arrowSize: HTMLElementDimensions }) => {
  const iconName = getIconName(tooltipPosition) as IconName;

  const [arrowPosition, setArrowPosition] = useState<BaseProps>({});
  const contentRef = useRef<HTMLDivElement>(null);

  const styles = useMemo(
    () => stylesBuilder(arrowPosition, tooltipPosition, custom),
    [arrowPosition, tooltipPosition, custom],
  );

  useEffect(() => {
    if (!contentRef.current) {
      return;
    }
    const contentSize: HTMLElementDimensions = {
      height: contentRef.current.getBoundingClientRect().height,
      width: contentRef.current.getBoundingClientRect().width,
    };

    const calculatedArrowPosition = getArrowPosition(
      arrowheadPosition,
      tooltipPosition,
      contentSize,
      arrowSize,
    );

    setArrowPosition(calculatedArrowPosition);
  }, [arrowheadPosition, tooltipPosition, arrowSize]);

  return { contentRef, styles, iconName };
};
