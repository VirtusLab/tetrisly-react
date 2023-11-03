import type { StatusDotProps } from '../StatusDot.props';
import { StatusDotAppearance } from '../types';
import { BaseProps } from '../../../types/BaseProps';
type StylesBuilderParams = {
    appearance: StatusDotAppearance;
    hasStroke: StatusDotProps['hasStroke'];
    custom: StatusDotProps['custom'];
};
type StatusDotStylesBuilder = {
    container: BaseProps;
};
export declare const stylesBuilder: ({ appearance, hasStroke, custom, }: StylesBuilderParams) => StatusDotStylesBuilder;
export {};
