import type { DividerProps } from '../Divider.props';
import type { DividerOrientation } from '../types';
import type { BaseProps } from '../../../types/BaseProps';
type StylesBuilderParams = {
    orientation: DividerOrientation;
    width: DividerProps['width'];
    height: DividerProps['height'];
    custom: DividerProps['custom'];
};
type DividerStylesBuilder = {
    container: BaseProps;
};
export declare const stylesBuilder: ({ orientation, width, height, custom, }: StylesBuilderParams) => DividerStylesBuilder;
export {};
