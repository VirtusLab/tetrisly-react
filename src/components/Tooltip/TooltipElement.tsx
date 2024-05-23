import { FC, useMemo } from 'react';

import { Arrow } from './Arrow';
import { stylesBuilder } from './stylesBuilder';
import { TooltipProps } from './Tooltip.props';

import { tet } from '@/tetrisly';

export const TooltipElement: FC<TooltipProps> = ({
  arrowheadPosition = 'middle',
  tooltipPosition = 'top',
  text,
  custom,
  ...restProps
}) => {
  const renderArrowBeforeContent =
    tooltipPosition === 'right' || tooltipPosition === 'bottom';
  const renderArrowAfterContent =
    tooltipPosition === 'left' || tooltipPosition === 'top';

  const styles = useMemo(
    () => stylesBuilder(tooltipPosition, arrowheadPosition, custom),
    [arrowheadPosition, tooltipPosition, custom],
  );

  return (
    <tet.div {...styles.container} data-testid="tooltip" {...restProps}>
      {renderArrowBeforeContent && (
        <tet.div {...styles.arrow} data-testid="tooltip-arrow">
          <Arrow arrowType={tooltipPosition} />
        </tet.div>
      )}
      <tet.div {...styles.content} data-testid="tooltip-content">
        {text}
      </tet.div>

      {renderArrowAfterContent && (
        <tet.div {...styles.arrow} data-testid="tooltip-arrow">
          <Arrow arrowType={tooltipPosition} />
        </tet.div>
      )}
    </tet.div>
  );
};
