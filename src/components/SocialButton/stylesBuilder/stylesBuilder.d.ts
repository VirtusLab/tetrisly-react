import { SocialButtonProps } from '../SocialButton.props';
import { SocialButtonAppearance } from '../SocialButton.styles';
export declare const stylesBuilder: (appearance: SocialButtonAppearance, custom: SocialButtonProps['custom']) => {
    display: "inline-flex";
    gap: string;
    h: string;
    py: string;
    pr: string;
    pl: string;
    justifyContent: "center";
    alignItems: "center";
    flexShrink: number;
    borderRadius: string;
    boxShadow: "$elevation-bottom-100";
    opacity: {
        _: number;
        hover: number;
        active: number;
        disabled: number;
    };
    ringInset?: true | undefined;
    ring?: string | undefined;
    ringColor?: {
        _: "$color-action-outline-normal";
        hover: "$color-action-outline-hover";
        active: "$color-action-outline-active";
        selected: "$color-action-outline-selected";
    } | undefined;
};
