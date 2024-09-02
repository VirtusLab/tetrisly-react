import type { ArrowheadPositionType, TooltipPositionType } from './Tooltip.props';
export declare const getTextAlign: (position?: TooltipPositionType) => "right" | "left" | "center" | undefined;
export declare const alignItemsBasedOnArrowheadPosition: (arrowheadPosition: ArrowheadPositionType) => "center" | "flex-end" | "flex-start";
export declare const shouldRenderTooltipElementAfterIcon: (tooltipPosition: TooltipPositionType) => boolean;
export declare const shouldRenderTooltipElementBeforeIcon: (tooltipPosition: TooltipPositionType) => boolean;
export declare const calculatePosition: (targetRect: DOMRect, tooltipRect: DOMRect, tooltipPosition: string, arrowheadPosition: string) => {
    top: number;
    left: number;
};
