import { Icon } from '@virtuslab/tetrisly-icons';
import { FC, useMemo } from 'react';

import { stylesBuilder } from './stylesBuilder';
import { TooltipProps } from './Tooltip.props';
import { getArrowPosition, getIconName, HTMLElementDimensions } from './utils';
import { tet } from '../../tetrisly';

export const Tooltip: FC<TooltipProps> = ({
  arrowheadPosition = 'middle',
  tooltipPosition = 'top',
  text,
  custom,
  ...restProps
}) => {
  const iconName = getIconName(tooltipPosition);
  const arrowSize: HTMLElementDimensions = {
    height: 22,
    width: 24,
  };

  const arrowPos = getArrowPosition(
    arrowheadPosition,
    tooltipPosition,
    arrowSize,
  );

  const styles = useMemo(
    () => stylesBuilder(tooltipPosition, arrowPos, custom),
    [tooltipPosition, custom],
  );

  return (
    <tet.div {...styles.container} data-testid="tooltip" {...restProps}>
      <tet.div {...styles.content} data-testid="tooltip-content">
        <tet.div {...styles.arrow} data-testid="tooltip-arrow">
          <Icon
            name={iconName}
            height={arrowSize.height}
            width={arrowSize.width}
          />
        </tet.div>
        {text}
      </tet.div>
    </tet.div>
  );
};
