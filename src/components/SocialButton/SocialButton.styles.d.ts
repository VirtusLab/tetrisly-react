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
    boxShadow: "bottom-100";
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
                _: "action-outline-normal";
                hover: "action-outline-hover";
                active: "action-outline-active";
                selected: "action-outline-selected";
            };
        };
        primary: {};
    };
};
