import { FC, PropsWithChildren, useMemo, useState } from 'react';

import { stylesBuilder } from './stylesBuilder';
import type { TooltipProps } from './Tooltip.props';
import { TooltipElement } from './TooltipElement';
import {
  shouldRenderTooltipElementAfterIcon,
  shouldRenderTooltipElementBeforeIcon,
} from './utils';
import { tet } from '../../tetrisly';

export const Tooltip: FC<PropsWithChildren<TooltipProps>> = ({
  children,
  arrowheadPosition = 'middle',
  tooltipPosition = 'top',
  text,
  custom,
  ...restProps
}) => {
  const styles = useMemo(
    () => stylesBuilder(tooltipPosition, arrowheadPosition, custom),
    [arrowheadPosition, tooltipPosition, custom],
  );
  const [showTooltip, setShowTooltip] = useState(false);

  const renderTooltipBeforeChildren =
    shouldRenderTooltipElementBeforeIcon(tooltipPosition);
  const renderTooltipAfterChildren =
    shouldRenderTooltipElementAfterIcon(tooltipPosition);

  const onMouseEnter = () => {
    setShowTooltip(true);
  };

  const onMouseLeave = () => setShowTooltip(false);

  return (
    <tet.div {...styles.wrapper} data-testid="tooltip" {...restProps}>
      {renderTooltipBeforeChildren && (
        <TooltipElement
          isOpen={showTooltip}
          text={text}
          arrowheadPosition={arrowheadPosition}
          tooltipPosition={tooltipPosition}
          custom={custom}
        />
      )}

      {children && (
        <tet.div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          cursor="pointer"
        >
          {children}
        </tet.div>
      )}

      {renderTooltipAfterChildren && (
        <TooltipElement
          text={text}
          arrowheadPosition={arrowheadPosition}
          tooltipPosition={tooltipPosition}
          custom={custom}
          isOpen={showTooltip}
        />
      )}
    </tet.div>
  );
};
