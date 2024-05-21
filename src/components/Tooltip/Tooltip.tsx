import { Icon } from '@virtuslab/tetrisly-icons';
import { FC } from 'react';

import { TooltipProps } from './Tooltip.props';
import { useTooltip } from './useTooltip';
import type { HTMLElementDimensions } from './utils';
import { tet } from '../../tetrisly';

export const Tooltip: FC<TooltipProps> = ({
  arrowheadPosition,
  tooltipPosition,
  text,
  custom,
  ...restProps
}) => {
  const arrowSize: HTMLElementDimensions = {
    height: 22,
    width: 24,
  };

  const { contentRef, styles, iconName } = useTooltip({
    arrowheadPosition,
    tooltipPosition,
    custom,
    ...restProps,
    arrowSize,
  });

  return (
    <tet.div {...styles.container} data-testid="tooltip" {...restProps}>
      <tet.div {...styles.arrow} data-testid="tooltip-arrow">
        <Icon
          name={iconName}
          height={arrowSize.height}
          width={arrowSize.width}
        />
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
