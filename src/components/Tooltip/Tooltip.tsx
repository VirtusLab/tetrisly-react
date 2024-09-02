import {
  FC,
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';

import { stylesBuilder } from './stylesBuilder';
import { TooltipProps } from './Tooltip.props';
import { TooltipElement } from './TooltipElement';
import { calculatePosition } from './utils';

import { tet } from '@/tetrisly';

export const Tooltip: FC<PropsWithChildren<TooltipProps>> = ({
  children,
  custom,
  text,
  tooltipPosition = 'top',
  arrowheadPosition = 'middle',
  ...restProps
}) => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const targetRef = useRef<HTMLDivElement>(null);
  const tooltipElementRef = useRef<HTMLDivElement>(null);

  const styles = useMemo(
    () => stylesBuilder(tooltipPosition, arrowheadPosition, custom),
    [arrowheadPosition, tooltipPosition, custom],
  );

  const updatePosition = useCallback(() => {
    if (!targetRef.current || !tooltipElementRef.current) {
      return;
    }
    const targetRect = targetRef.current.getBoundingClientRect();
    const tooltipRect = tooltipElementRef.current.getBoundingClientRect();
    const calculatedPosition = calculatePosition(
      targetRect,
      tooltipRect,
      tooltipPosition,
      arrowheadPosition,
    );
    setPosition(calculatedPosition);
  }, [arrowheadPosition, tooltipPosition]);

  useEffect(() => {
    if (visible) {
      updatePosition();
      window.addEventListener('resize', updatePosition);
      window.addEventListener('scroll', updatePosition, true);
    } else {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, true);
    }
    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, true);
    };
  }, [visible, updatePosition]);

  const showTooltip = () => {
    setVisible(true);
    updatePosition();
  };

  const hideTooltip = () => {
    setVisible(false);
  };

  return (
    <tet.div
      {...styles.wrapper}
      data-testid="tooltip-wrapper"
      ref={targetRef}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
      {...restProps}
    >
      {children && <tet.div cursor="pointer">{children}</tet.div>}
      {visible &&
        createPortal(
          <TooltipElement
            ref={tooltipElementRef}
            text={text}
            arrowheadPosition={arrowheadPosition}
            tooltipPosition={tooltipPosition}
            position={position}
            custom={custom}
            {...restProps}
          />,
          document.body,
        )}
    </tet.div>
  );
};

export default Tooltip;
