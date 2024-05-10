import { BadgeConfig } from './Badge.styles';
import { BadgeAppearance } from './BadgeAppearance.type';
import { BadgeEmphasis } from './BadgeEmphasis.type';
import { BadgeIntent } from './BadgeIntent.type';
import { BaseProps } from '../../types/BaseProps';
type BadgeStylesBuilder = {
    container: BaseProps;
    iconContainer: BaseProps;
    label: BaseProps;
};
export declare const stylesBuilder: (intent: BadgeIntent, emphasis: BadgeEmphasis, custom?: BadgeConfig, hasLabel?: boolean, appearance?: BadgeAppearance) => BadgeStylesBuilder;
export {};
