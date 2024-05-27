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

export const shouldRenderTooltipElementAfterIcon = (
  tooltipPosition: TooltipPositionType,
) => tooltipPosition === 'left' || tooltipPosition === 'top';
export const shouldRenderTooltipElementBeforeIcon = (
  tooltipPosition: TooltipPositionType,
) => tooltipPosition === 'right' || tooltipPosition === 'bottom';

export const calculatePosition = (
  targetRect: DOMRect,
  tooltipRect: DOMRect,
  tooltipPosition: string,
  arrowheadPosition: string,
) => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  let top: number;
  let left: number;

  switch (tooltipPosition) {
    case 'top':
      top = targetRect.top + scrollTop - tooltipRect.height;
      left =
        getHorizontalPosition(targetRect, tooltipRect, arrowheadPosition) +
        scrollLeft;
      break;
    case 'bottom':
      top = targetRect.bottom + scrollTop;
      left =
        getHorizontalPosition(targetRect, tooltipRect, arrowheadPosition) +
        scrollLeft;
      break;

    case 'left':
      top = getVerticalPosition(targetRect, tooltipRect) + scrollTop;
      left = targetRect.left + scrollLeft - tooltipRect.width;
      break;
    case 'right':
      top = getVerticalPosition(targetRect, tooltipRect) + scrollTop;
      left = targetRect.right + scrollLeft;
      break;
    default:
      top = targetRect.top + scrollTop - tooltipRect.height;
      left =
        getHorizontalPosition(targetRect, tooltipRect, arrowheadPosition) +
        scrollLeft;
      break;
  }

  top = Math.max(
    0,
    Math.min(top, window.innerHeight - tooltipRect.height + scrollTop),
  );
  left = Math.max(
    0,
    Math.min(left, window.innerWidth - tooltipRect.width + scrollLeft),
  );

  return { top, left };
};

const getHorizontalPosition = (
  targetRect: DOMRect,
  tooltipRect: DOMRect,
  arrowheadPosition: string,
): number => {
  switch (arrowheadPosition) {
    case 'start':
      return targetRect.left;
    case 'end':
      return targetRect.left + targetRect.width - tooltipRect.width;
    default:
      return targetRect.left + targetRect.width / 2 - tooltipRect.width / 2;
  }
};

const getVerticalPosition = (
  targetRect: DOMRect,
  tooltipRect: DOMRect,
  arrowheadPosition?: string,
): number => {
  switch (arrowheadPosition) {
    case 'start':
      return targetRect.top;
    case 'end':
      return targetRect.top + targetRect.height - tooltipRect.height;
    default:
      return targetRect.top + targetRect.height / 2 - tooltipRect.height / 2;
  }
};
