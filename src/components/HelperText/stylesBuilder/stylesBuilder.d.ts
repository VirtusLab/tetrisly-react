import { HelperTextProps } from '../HelperText.props';
import { HelperTextIntent } from '../HelperTextIntent.type';
import { BaseProps } from '../../../types/BaseProps';
type HelperTextStyleBuilder = {
    container: BaseProps;
    iconContainer: BaseProps;
};
export declare const stylesBuilder: (intent: HelperTextIntent, custom: HelperTextProps['custom']) => HelperTextStyleBuilder;
export {};
