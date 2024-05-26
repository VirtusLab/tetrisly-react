import type {
  ArrowheadPositionType,
  TooltipPositionType,
} from '../Tooltip.props';

import { BaseProps } from '@/types';

export const getTextAlign = (position?: TooltipPositionType) => {
  if (position === 'bottom' || position === 'top') {
    return 'center';
  }
  return position;
};

export const alignItemsBasedOnArrowheadPosition = (
  arrowheadPosition: ArrowheadPositionType,
) => {
  switch (arrowheadPosition) {
    case 'end':
      return 'flex-end';
    case 'start':
      return 'flex-start';
    case 'middle':
      return 'center';
    default:
      return 'flex-start';
  }
};

export const shouldRenderTooltipElementAfterIcon = (
  tooltipPosition: TooltipPositionType,
) => tooltipPosition === 'left' || tooltipPosition === 'top';
export const shouldRenderTooltipElementBeforeIcon = (
  tooltipPosition: TooltipPositionType,
) => tooltipPosition === 'right' || tooltipPosition === 'bottom';

export const getArrowPosition = (
  arrowheadPosition: ArrowheadPositionType,
  tooltipPosition: TooltipPositionType,
) => {
  switch (tooltipPosition) {
    case 'bottom':
      switch (arrowheadPosition) {
        case 'start':
          return { top: '100%', left: 4 } as BaseProps;

        case 'middle':
          return { top: '100%' } as BaseProps;
        case 'end':
          return { top: '100%', right: 4 } as BaseProps;
        default:
          return { top: '100%', left: 4 } as BaseProps;
      }

    case 'top':
      switch (arrowheadPosition) {
        case 'start':
          return { bottom: '100%', left: 4 } as BaseProps;
        case 'middle':
          return { bottom: '100%' } as BaseProps;
        case 'end':
          return { bottom: '100%', right: 4 } as BaseProps;
        default:
          return { bottom: '100%', left: 4 } as BaseProps;
      }
    case 'left':
      return { right: '100%' } as BaseProps;
    case 'right':
      return { left: '100%' } as BaseProps;
    default:
      return {} as BaseProps;
  }
};
