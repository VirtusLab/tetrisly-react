import { BadgeProps } from '../Badge.props';
import { BadgeAppearance } from '../BadgeAppearance.type';
import { BadgeEmphasis } from '../BadgeEmphasis.type';
import { BadgeIntent } from '../BadgeIntent.type';
import { BaseProps } from '../../../types/BaseProps';
type BadgeStylesBuilder = {
    container: BaseProps;
    iconContainer: BaseProps;
    label: BaseProps;
};
export declare const stylesBuilder: (custom: BadgeProps['custom'], intent: BadgeIntent, emphasis: BadgeEmphasis, hasLabel?: boolean, appearance?: BadgeAppearance) => BadgeStylesBuilder;
export {};
