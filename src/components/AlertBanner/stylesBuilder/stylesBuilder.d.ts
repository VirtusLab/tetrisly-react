import { AlertBannerProps } from '../AlertBanner.props';
import { AlertBannerIntent } from '../types';
import { ButtonProps } from '../../../components/Button';
import { IconButtonProps } from '../../../components/IconButton/IconButton.props';
import { BaseProps } from '../../../types/BaseProps';
type AlertBannerStylesBuilder = {
    container: BaseProps;
    iconContainer: BaseProps;
    actionContainer: BaseProps;
    closeButton: BaseProps;
    actionProps: Partial<ButtonProps<'ghost'>>;
    closeButtonProps: Partial<IconButtonProps<'ghost'>>;
};
export declare const stylesBuilder: (intent: AlertBannerIntent, custom: AlertBannerProps['custom']) => AlertBannerStylesBuilder;
export {};
