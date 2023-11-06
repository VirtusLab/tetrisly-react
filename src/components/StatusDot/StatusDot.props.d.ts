import type { StatusDotConfig } from './StatusDot.styles';
import type { StatusDotAppearance } from './types';
export type StatusDotProps = {
    appearance?: StatusDotAppearance;
    /** You can change the color of a stroke using the custom prop */
    hasStroke?: boolean;
    custom?: StatusDotConfig;
};
