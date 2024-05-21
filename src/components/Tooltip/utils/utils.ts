import type {
  ArrowheadPositionType,
  TooltipPositionType,
} from '../Tooltip.props';

import type { BaseProps } from '@/types';

export type HTMLElementDimensions = {
  height: number;
  width: number;
};

export const getIconName = (position: TooltipPositionType) => {
  switch (position) {
    case 'top':
      return '16-arrowhead-down';
    case 'bottom':
      return '16-arrowhead-top';
    case 'left':
      return '16-arrowhead-right';
    case 'right':
      return '16-arrowhead-left';
    default:
      return '16-arrowhead-down';
  }
};

export const getArrowPosition = (
  arrowheadPosition: ArrowheadPositionType,
  tooltipPosition: TooltipPositionType,
  arrowSize: HTMLElementDimensions,
) => {
  const arrowMiddleLeftPosition = `calc(50% - ${arrowSize.width / 2}px)`;
  const sideArrowTopPosition = `calc(50% - ${arrowSize.height / 2}px)`;

  switch (tooltipPosition) {
    case 'bottom':
      switch (arrowheadPosition) {
        case 'start':
          return { top: -12, left: 4 } as BaseProps;
        case 'middle':
          return { top: -12, left: arrowMiddleLeftPosition } as BaseProps;
        case 'end':
          return { top: -12, right: 4 } as BaseProps;
        default:
          return { top: -12, left: 4 } as BaseProps;
      }

    case 'top':
      switch (arrowheadPosition) {
        case 'start':
          return { bottom: -12, left: 4 } as BaseProps;
        case 'middle':
          return { bottom: -12, left: arrowMiddleLeftPosition } as BaseProps;
        case 'end':
          return { bottom: -12, right: 4 } as BaseProps;
        default:
          return { bottom: -12, left: 4 } as BaseProps;
      }
    case 'left':
      return { right: -14, top: sideArrowTopPosition } as BaseProps;
    case 'right':
      return { left: -14, top: sideArrowTopPosition } as BaseProps;

    default:
      return {} as BaseProps;
  }
};

export const getTextAlign = (position?: TooltipPositionType) => {
  if (position === 'bottom' || position === 'top') {
    return 'center';
  }
  return position;
};
