import type { BaseProps } from '../../types/BaseProps';
export type TagConfig = {
    hasOnClick?: BaseProps;
    innerElements?: {
        label: BaseProps;
        closeButton?: BaseProps;
        beforeComponent?: {
            avatar?: BaseProps;
        };
    };
} & BaseProps;
export declare const defaultConfig: {
    display: "inline-flex";
    h: string;
    alignItems: "center";
    borderRadius: string;
    backgroundColor: "$color-interaction-neutral-subtle-normal";
    opacity: {
        disabled: "$opacity-disabled";
    };
    cursor: "default";
    outlineColor: {
        focus: "$color-interaction-focus-default";
    };
    transitionDuration: number;
    color: "$color-content-primary";
    hasOnClick: {
        backgroundColor: {
            hover: string;
            active: string;
            focus: string;
            _: "$color-interaction-neutral-subtle-normal";
            disabled: "$color-interaction-neutral-subtle-normal";
            selected: {
                hover: string;
                active: string;
                focus: string;
                _: "$color-interaction-neutral-subtle-selected";
            };
        };
        cursor: {
            _: "pointer";
            disabled: "default";
        };
    };
    innerElements: {
        label: {
            mx: string;
            text: "$typo-body-medium";
        };
        closeButton: {
            mr: string;
            h: string;
            w: string;
            opacity: {
                disabled: "$opacity-100";
            };
        };
        beforeComponent: {
            avatar: {
                ml: string;
            };
        };
    };
};
