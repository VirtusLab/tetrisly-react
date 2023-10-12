import { BaseProps } from '../../types/BaseProps';
export type SocialButtonAppearance = 'primary' | 'secondary';
export type SocialButtonConfig = BaseProps & {
    appearance?: Partial<Record<SocialButtonAppearance, BaseProps>>;
};
export declare const defaultConfig: {
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
    appearance: {
        secondary: {
            ringInset: true;
            ring: string;
            ringColor: {
                _: "$color-action-outline-normal";
                hover: "$color-action-outline-hover";
                active: "$color-action-outline-active";
                selected: "$color-action-outline-selected";
            };
        };
        primary: {};
    };
};
