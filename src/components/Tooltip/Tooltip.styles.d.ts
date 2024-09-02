import { BaseProps } from '../../types/BaseProps';
export type TooltipConfig = {
    innerElements?: {
        arrow: BaseProps & {
            right: BaseProps;
            left: BaseProps;
            top: BaseProps;
            bottom: BaseProps;
        };
        content: BaseProps;
        container: BaseProps;
    };
} & BaseProps;
export declare const defaultConfig: {
    display: "inline-flex";
    position: "relative";
    innerElements: {
        arrow: {
            right: {
                padding: string;
                paddingLeft: string;
            };
            left: {
                padding: string;
                paddingRight: string;
            };
            top: {
                padding: string;
                paddingBottom: string;
            };
            bottom: {
                padding: string;
                paddingTop: string;
            };
        };
        content: {
            backgroundColor: "$color-background-inverted";
            color: "$color-content-primary-inverted";
            padding: string;
            borderRadius: string;
            text: "$typo-body-small";
            minWidth: string;
            minHeight: string;
            w: string;
            maxWidth: string;
        };
        container: {
            position: "absolute";
            alignContent: "center";
            justifyContent: "center";
            w: string;
            transition: "opacity .2s ease-in-out";
            display: "inline-flex";
            zIndex: number;
        };
    };
};
export declare const TooltipStyles: {
    defaultConfig: {
        display: "inline-flex";
        position: "relative";
        innerElements: {
            arrow: {
                right: {
                    padding: string;
                    paddingLeft: string;
                };
                left: {
                    padding: string;
                    paddingRight: string;
                };
                top: {
                    padding: string;
                    paddingBottom: string;
                };
                bottom: {
                    padding: string;
                    paddingTop: string;
                };
            };
            content: {
                backgroundColor: "$color-background-inverted";
                color: "$color-content-primary-inverted";
                padding: string;
                borderRadius: string;
                text: "$typo-body-small";
                minWidth: string;
                minHeight: string;
                w: string;
                maxWidth: string;
            };
            container: {
                position: "absolute";
                alignContent: "center";
                justifyContent: "center";
                w: string;
                transition: "opacity .2s ease-in-out";
                display: "inline-flex";
                zIndex: number;
            };
        };
    };
};
