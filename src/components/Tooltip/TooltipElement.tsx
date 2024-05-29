import { forwardRef, useMemo } from 'react';

import { Arrow } from './Arrow';
import { stylesBuilder } from './stylesBuilder';
import { TooltipProps } from './Tooltip.props';
import {
  shouldRenderTooltipElementAfterIcon as shouldRenderArrowAfterContent,
  shouldRenderTooltipElementBeforeIcon as shouldRenderArrowBeforeContent,
} from './utils';

import { tet } from '@/tetrisly';

type TooltipElementProps = TooltipProps & {
  position?: { left: number; top: number };
};

export const TooltipElement = forwardRef<HTMLDivElement, TooltipElementProps>(
  (
    {
      arrowheadPosition = 'middle',
      tooltipPosition = 'top',
      text,
      custom,
      position = { left: 0, top: 0 },
      ...restProps
    },
    tooltipElementRef,
  ) => {
    const renderArrowBeforeContent =
      shouldRenderArrowBeforeContent(tooltipPosition);
    const renderArrowAfterContent =
      shouldRenderArrowAfterContent(tooltipPosition);

    const styles = useMemo(
      () => stylesBuilder(tooltipPosition, arrowheadPosition, custom),
      [arrowheadPosition, tooltipPosition, custom],
    );

    return (
      <tet.div
        ref={tooltipElementRef}
        {...styles.container}
        data-testid="tooltip-container"
        {...restProps}
        top={position.top}
        left={position.left}
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
  },
);
