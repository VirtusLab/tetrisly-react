import { Icon } from '@virtuslab/tetrisly-icons';
import { FC, useEffect, useMemo, useRef, useState } from 'react';

import { stylesBuilder } from './stylesBuilder';
import { TooltipProps } from './Tooltip.props';
import { getIconName, getArrowPosition } from './utils';
import { tet } from '../../tetrisly';

import { BaseProps } from '@/types';

export const Tooltip: FC<TooltipProps> = ({
  arrowheadPosition = 'start',
  tooltipPosition = 'top',
  text,
  custom,
  ...restProps
}) => {
  const styles = useMemo(
    () => stylesBuilder(arrowheadPosition, tooltipPosition, custom),
    [arrowheadPosition, tooltipPosition, custom],
  );
  const iconName = getIconName(tooltipPosition);
  const [arrowPosition, setArrowPosition] = useState<BaseProps>({});
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) {
      return;
    }
    const contentWidth = contentRef.current.getBoundingClientRect().width;
    const contentHeight = contentRef.current.getBoundingClientRect().height;

    console.log('content width: ', contentWidth, '   height: ', contentHeight);

    setArrowPosition(
      getArrowPosition(
        arrowheadPosition,
        tooltipPosition,
        contentWidth,
        contentHeight,
      ),
    );
  }, []);

  return (
    <tet.div {...styles.container} data-testid="tooltip" {...restProps}>
      <tet.div {...styles.arrow} {...arrowPosition} data-testid="tooltip-arrow">
        <Icon name={iconName} height={22} width={24} />
      </tet.div>
      <tet.div
        ref={contentRef}
        {...styles.content}
        data-testid="tooltip-content"
      >
        {text}
      </tet.div>
    </tet.div>
  );
};
