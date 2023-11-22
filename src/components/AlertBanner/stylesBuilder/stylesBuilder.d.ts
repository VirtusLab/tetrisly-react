import { AlertBannerProps } from '../AlertBanner.props';
import { AlertBannerIntent } from '../types';
import { BareButtonProps } from '../../../components/Button/Button.props';
import { GhostIconButtonProps } from '../../../components/IconButton/IconButton.props';
import { BaseProps } from '../../../types/BaseProps';
type AlertBannerStylesBuilder = {
    container: BaseProps;
    iconContainer: BaseProps;
    actionContainer: BaseProps;
    closeButton: BaseProps<'appearance'>;
    actionProps: Partial<BareButtonProps>;
    closeButtonProps: Partial<GhostIconButtonProps>;
};
export declare const stylesBuilder: (intent: AlertBannerIntent, custom: AlertBannerProps['custom']) => AlertBannerStylesBuilder;
export {};
