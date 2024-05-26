import { FC, useMemo } from 'react';

import { Arrow } from './Arrow';
import { stylesBuilder } from './stylesBuilder';
import { TooltipProps } from './Tooltip.props';
import {
  shouldRenderTooltipElementAfterIcon as shouldRenderArrowAfterContent,
  shouldRenderTooltipElementBeforeIcon as shouldRenderArrowBeforeContent,
} from './utils';

import { tet } from '@/tetrisly';

type TooltipElementProps = TooltipProps & { isOpen: boolean };

export const TooltipElement: FC<TooltipElementProps> = ({
  arrowheadPosition = 'middle',
  isOpen,
  tooltipPosition = 'top',
  text,
  custom,
  ...restProps
}) => {
  const renderArrowBeforeContent =
    shouldRenderArrowBeforeContent(tooltipPosition);
  const renderArrowAfterContent =
    shouldRenderArrowAfterContent(tooltipPosition);

  const styles = useMemo(
    () => stylesBuilder(tooltipPosition, arrowheadPosition, custom, isOpen),
    [arrowheadPosition, tooltipPosition, custom, isOpen],
  );

  return (
    <tet.div
      {...styles.container}
      data-testid="tooltip-container"
      {...restProps}
    >
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
