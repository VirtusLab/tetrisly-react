import type { ToastProps } from '../Toast.props';
import type { BaseProps } from '../../../types/BaseProps';
type StylesBuilderProps = Required<Pick<ToastProps, 'emphasis' | 'intent'>> & {
    onCloseClick: ToastProps['onCloseClick'];
    custom: ToastProps['custom'];
};
type ToastStylesBuilder = {
    container: BaseProps;
    actionContainer: BaseProps;
    closeButton: BaseProps;
    iconContainer: BaseProps;
    middleDot: BaseProps;
};
export declare const stylesBuilder: ({ custom, ...props }: StylesBuilderProps) => ToastStylesBuilder;
export {};
