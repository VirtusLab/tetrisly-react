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
    boxShadow: "bottom-100";
    opacity: {
        _: number;
        hover: number;
        active: number;
        disabled: number;
    };
    ringInset?: true | undefined;
    ring?: string | undefined;
    ringColor?: {
        _: "action-outline-normal";
        hover: "action-outline-hover";
        active: "action-outline-active";
        selected: "action-outline-selected";
    } | undefined;
};
