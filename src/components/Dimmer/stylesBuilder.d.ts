import { DimmerProps } from './Dimmer.props';
import { BaseProps } from '../../types/BaseProps';
type StylesBuilderParams = {
    custom: DimmerProps['custom'];
};
type DimmerStylesBuilder = {
    container: BaseProps;
};
export declare const stylesBuilder: ({ custom, }: StylesBuilderParams) => DimmerStylesBuilder;
export {};
