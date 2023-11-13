import { LoaderProps } from '../../Loader';
import { ButtonProps } from '../Button.props';
import { BaseProps } from '../../../types/BaseProps';
type ButtonStylesBulderInput = {
    appearance: NonNullable<ButtonProps['appearance']>;
    variant: NonNullable<ButtonProps['variant']>;
    intent: NonNullable<ButtonProps['intent']>;
    size: NonNullable<ButtonProps['size']>;
    hasDropdownIndicator?: ButtonProps['hasDropdownIndicator'];
    hasBeforeIcon?: boolean;
    hasAfterIcon?: boolean;
    custom?: ButtonProps['custom'];
};
type ButtonStylesBuilder = {
    container: BaseProps;
    loader: Pick<LoaderProps, 'appearance'>;
};
export declare const stylesBuilder: (props: ButtonStylesBulderInput) => ButtonStylesBuilder;
export {};
