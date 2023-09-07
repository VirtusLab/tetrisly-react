import { IconProps } from '@virtuslab/tetrisly-icons';
import { ToastProps } from '../Toast.props';
import { ButtonAppearance } from '../../../components/Button/types/ButtonAppearance.type';
import { IconButtonProps } from '../../../components/IconButton/IconButton.props';
import { BaseProps } from '../../../types/BaseProps';
type StylesBuilderProps = Required<Pick<ToastProps, 'emphasis' | 'intent'>> & {
    custom: ToastProps['custom'];
    closeButton: boolean;
};
type ToastStylesBuilder = {
    actionProps: {
        appearance: ButtonAppearance<'bare'>;
    };
    actionContainerStyles: BaseProps;
    closeButtonProps: Partial<IconButtonProps<'ghost'>>;
    closeButtonStyles: BaseProps;
    containerStyles: BaseProps;
    iconProps: Partial<IconProps>;
    iconContainerStyles: BaseProps;
    middleDotStyles: BaseProps;
};
export declare const stylesBuilder: ({ custom, ...props }: StylesBuilderProps) => ToastStylesBuilder;
export {};
