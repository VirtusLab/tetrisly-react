import type { InlineBannerProps } from './InlineBanner.props';
import type { InlineBannerIntent } from './types';
import type { BaseProps } from '../../types';
type StylesBuilderParams = {
    intent: InlineBannerIntent;
    hasCloseButton: boolean;
    custom: InlineBannerProps['custom'];
};
type InlineBannerStylesBuilder = {
    container: BaseProps;
    iconContainer: BaseProps;
    contentContainer: BaseProps;
    actionContainer: BaseProps;
    description: BaseProps;
    title: BaseProps;
    closeButton: BaseProps<'appearance'>;
};
export declare const stylesBuilder: ({ intent, hasCloseButton, custom, }: StylesBuilderParams) => InlineBannerStylesBuilder;
export {};
