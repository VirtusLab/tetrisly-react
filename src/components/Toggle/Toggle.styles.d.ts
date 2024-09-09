import { SystemProps } from '@xstyled/styled-components';
import { HelperTextConfig } from '../HelperText/HelperText.styles';
import { BaseProps } from '../../types/BaseProps';
type ToggleSize = {
    size?: Record<'small' | 'large', BaseProps>;
};
export type ToggleConfig = {
    innerElements?: {
        toggle?: {
            input?: SystemProps;
            slider?: BaseProps & ToggleSize;
            toggleOval?: BaseProps & ToggleSize;
        };
        labelContainer?: BaseProps;
        label?: BaseProps;
        helperText?: HelperTextConfig;
    };
} & BaseProps;
export declare const defaultConfig: {
    display: "inline-flex";
    flexDirection: "column";
    alignItems: "flex-start";
    gap: string;
    opacity: {
        _: number;
        disabled: number;
    };
    innerElements: {
        toggle: {
            toggleOval: {
                size: {
                    large: {
                        w: string;
                        h: string;
                    };
                    small: {
                        w: string;
                        h: string;
                    };
                };
                p: string;
                backgroundColor: {
                    _: "$color-interaction-disabled-normal";
                    hover: "$color-interaction-disabled-hover";
                    focus: "$color-interaction-disabled-focus";
                    active: "$color-interaction-disabled-active";
                    disabled: "$color-interaction-disabled-normal";
                    selected: {
                        _: "$color-interaction-default-normal";
                        hover: "$color-interaction-default-hover";
                        focus: "$color-interaction-default-focus";
                        active: "$color-interaction-default-active";
                        disabled: "$color-interaction-default-normal";
                    };
                    indeterminate: {
                        _: "$color-interaction-default-normal";
                        hover: "$color-interaction-default-hover";
                        focus: "$color-interaction-default-focus";
                        active: "$color-interaction-default-active";
                        disabled: "$color-interaction-default-normal";
                    };
                };
                transition: "0.2s";
                borderRadius: string;
                display: "flex";
                position: "relative";
                alignItems: "center";
                outlineColor: {
                    focusWithin: "$color-interaction-focus-default";
                };
                outlineWidth: {
                    focusWithin: string;
                };
                outlineStyle: {
                    focusWithin: "solid";
                };
                outlineOffset: {
                    focusWithin: string;
                };
            };
            slider: {
                size: {
                    large: {
                        w: {
                            _: string;
                            indeterminate: string;
                        };
                        h: {
                            _: string;
                            indeterminate: string;
                        };
                        transform: {
                            selected: string;
                            indeterminate: string;
                        };
                    };
                    small: {
                        w: {
                            _: string;
                            indeterminate: string;
                        };
                        h: {
                            _: string;
                            indeterminate: string;
                        };
                        transform: {
                            selected: string;
                            indeterminate: string;
                        };
                    };
                };
                transition: "transform 0.2s ease-in-out";
                backgroundColor: "$color-whiteA-0";
                borderRadius: string;
                borderWidth: string;
                borderStyle: "$border-style-solid";
                borderColor: "$color-border-defaultA";
                boxShadow: "$elevation-bottom-100";
                position: "absolute";
            };
            input: {
                borderRadius: string;
                w: string;
                h: string;
                appearance: "none";
                zIndex: number;
                cursor: {
                    _: "pointer";
                    disabled: "default";
                };
            };
        };
        labelContainer: {
            display: "flex";
            justifyContent: "center";
            alignItems: "center";
            gap: string;
            text: "$typo-body-medium";
            color: "$color-content-primary";
        };
        label: {
            cursor: {
                _: "pointer";
                disabled: "default";
            };
        };
        helperText: {
            paddingLeft: string;
            cursor: "default";
        };
    };
};
export declare const toggleStyles: {
    defaultConfig: {
        display: "inline-flex";
        flexDirection: "column";
        alignItems: "flex-start";
        gap: string;
        opacity: {
            _: number;
            disabled: number;
        };
        innerElements: {
            toggle: {
                toggleOval: {
                    size: {
                        large: {
                            w: string;
                            h: string;
                        };
                        small: {
                            w: string;
                            h: string;
                        };
                    };
                    p: string;
                    backgroundColor: {
                        _: "$color-interaction-disabled-normal";
                        hover: "$color-interaction-disabled-hover";
                        focus: "$color-interaction-disabled-focus";
                        active: "$color-interaction-disabled-active";
                        disabled: "$color-interaction-disabled-normal";
                        selected: {
                            _: "$color-interaction-default-normal";
                            hover: "$color-interaction-default-hover";
                            focus: "$color-interaction-default-focus";
                            active: "$color-interaction-default-active";
                            disabled: "$color-interaction-default-normal";
                        };
                        indeterminate: {
                            _: "$color-interaction-default-normal";
                            hover: "$color-interaction-default-hover";
                            focus: "$color-interaction-default-focus";
                            active: "$color-interaction-default-active";
                            disabled: "$color-interaction-default-normal";
                        };
                    };
                    transition: "0.2s";
                    borderRadius: string;
                    display: "flex";
                    position: "relative";
                    alignItems: "center";
                    outlineColor: {
                        focusWithin: "$color-interaction-focus-default";
                    };
                    outlineWidth: {
                        focusWithin: string;
                    };
                    outlineStyle: {
                        focusWithin: "solid";
                    };
                    outlineOffset: {
                        focusWithin: string;
                    };
                };
                slider: {
                    size: {
                        large: {
                            w: {
                                _: string;
                                indeterminate: string;
                            };
                            h: {
                                _: string;
                                indeterminate: string;
                            };
                            transform: {
                                selected: string;
                                indeterminate: string;
                            };
                        };
                        small: {
                            w: {
                                _: string;
                                indeterminate: string;
                            };
                            h: {
                                _: string;
                                indeterminate: string;
                            };
                            transform: {
                                selected: string;
                                indeterminate: string;
                            };
                        };
                    };
                    transition: "transform 0.2s ease-in-out";
                    backgroundColor: "$color-whiteA-0";
                    borderRadius: string;
                    borderWidth: string;
                    borderStyle: "$border-style-solid";
                    borderColor: "$color-border-defaultA";
                    boxShadow: "$elevation-bottom-100";
                    position: "absolute";
                };
                input: {
                    borderRadius: string;
                    w: string;
                    h: string;
                    appearance: "none";
                    zIndex: number;
                    cursor: {
                        _: "pointer";
                        disabled: "default";
                    };
                };
            };
            labelContainer: {
                display: "flex";
                justifyContent: "center";
                alignItems: "center";
                gap: string;
                text: "$typo-body-medium";
                color: "$color-content-primary";
            };
            label: {
                cursor: {
                    _: "pointer";
                    disabled: "default";
                };
            };
            helperText: {
                paddingLeft: string;
                cursor: "default";
            };
        };
    };
};
export {};
