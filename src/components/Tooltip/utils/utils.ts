import type {
  ArrowheadPositionType,
  TooltipPositionType,
} from '../Tooltip.props';

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
