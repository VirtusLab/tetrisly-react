import type { ButtonGroupSize } from './ButtonGroup.props';
import { ButtonGroupConfig } from './ButtonGroup.styles';
import { BaseProps } from '../../types/BaseProps';
type ButtonGroupStyleBuilder = {
    container: BaseProps;
    button: BaseProps;
};
type ButtonGroupStyleBuilderInput = {
    size: ButtonGroupSize;
    custom?: ButtonGroupConfig;
};
export declare const stylesBuilder: ({ size, custom, }: ButtonGroupStyleBuilderInput) => ButtonGroupStyleBuilder;
export {};
