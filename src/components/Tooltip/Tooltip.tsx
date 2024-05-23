import { FC, PropsWithChildren, useMemo } from 'react';

import { stylesBuilder } from './stylesBuilder';
import { TooltipProps } from './Tooltip.props';
import { TooltipElement } from './TooltipElement';
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

  const renderTooltipBeforeChildren =
    tooltipPosition === 'left' || tooltipPosition === 'top';
  const renderTooltipAfterChildren =
    tooltipPosition === 'right' || tooltipPosition === 'bottom';

  return (
    <tet.div {...styles.wrapper} data-testid="tooltip-wrapper">
      {renderTooltipBeforeChildren && (
        <TooltipElement
          text={text}
          arrowheadPosition={arrowheadPosition}
          tooltipPosition={tooltipPosition}
          custom={custom}
          {...restProps}
        />
      )}

      {children && <tet.div>{children}</tet.div>}

      {renderTooltipAfterChildren && (
        <TooltipElement
          text={text}
          arrowheadPosition={arrowheadPosition}
          tooltipPosition={tooltipPosition}
          custom={custom}
          {...restProps}
        />
      )}
    </tet.div>
  );
};
