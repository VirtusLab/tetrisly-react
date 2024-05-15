import { ArrowheadPositionType, TooltipPositionType } from './Tooltip.props';

import { BaseProps } from '@/types';

export const getIconName = (position: TooltipPositionType) => {
  switch (position) {
    case 'bottom':
      return '16-arrowhead-down';
    case 'top':
      return '16-arrowhead-top';
    case 'left':
      return '16-arrowhead-left';
    case 'right':
      return '16-arrowhead-right';
    default:
      return '16-arrowhead-down';
  }
};

export const getArrowPosition = (
  arrowheadPosition: ArrowheadPositionType,
  tooltipPosition: TooltipPositionType,
  width: number,
  height: number,
) => {
  switch (tooltipPosition) {
    case 'top':
      switch (arrowheadPosition) {
        case 'start':
          return { top: -12, left: 0 } as BaseProps;
        case 'middle':
          return { top: -12, left: `calc(50%-${width / 2})` } as BaseProps;
        case 'end':
          return { top: -12, right: 16 } as BaseProps;
        default:
          return { top: -12, left: 0 } as BaseProps;
      }

    case 'bottom':
      switch (arrowheadPosition) {
        case 'start':
          return { bottom: -12, left: 16 } as BaseProps;
        case 'middle':
          return { bottom: -12, left: `calc(50%-${width / 2})` } as BaseProps;
        case 'end':
          return { bottom: -12, right: 16 } as BaseProps;
        default:
          return { bottom: -12, left: 16 } as BaseProps;
      }

    case 'left':
      return { left: -14, top: `calc(50%-${height / 2})` } as BaseProps;
    case 'right':
      return { right: -14 } as BaseProps;

    default:
      return {} as BaseProps;
  }
};
