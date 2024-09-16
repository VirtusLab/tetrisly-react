import { BaseProps } from '../../types/BaseProps';
export type HeaderType = 'complex' | 'compact';
export type HeaderConfig = {
    table: {
        type: Record<HeaderType, BaseProps>;
    } & BaseProps;
    titleAndDescriptionContainer: BaseProps;
    titleContainer: BaseProps;
    description: BaseProps;
    counter: BaseProps;
    actionContainer: BaseProps;
    search: {
        type: Record<HeaderType, BaseProps>;
    } & BaseProps;
    bottomBar: {
        type: Record<HeaderType, BaseProps>;
    } & BaseProps;
} & BaseProps;
export declare const defaultConfig: {
    display: "flex";
    flexDirection: "column";
    minWidth: string;
    w: string;
    h: string;
    backgroundColor: "$color-background-default";
    table: {
        w: string;
        display: "flex";
        padding: string;
        type: {
            complex: {
                h: string;
            };
            compact: {
                h: string;
            };
        };
    };
    titleAndDescriptionContainer: {
        w: string;
        text: "$typo-header-xLarge";
        display: "flex";
        flexDirection: "column";
    };
    counter: {
        w: string;
        h: string;
    };
    titleContainer: {
        display: "flex";
        alignItems: "center";
        gap: string;
    };
    description: {
        text: "$typo-body-medium";
        color: "$color-content-secondary";
        gap: string;
    };
    actionContainer: {
        display: "flex";
        gap: string;
        alignItems: "center";
    };
    bottomBar: {
        borderTopWidth: string;
        borderStyle: "$border-style-solid";
        borderColor: "$color-border-default";
        display: "flex";
        type: {
            complex: {
                padding: string;
                gap: string;
                h: string;
            };
            compact: {
                padding: string;
                h: string;
            };
        };
    };
    search: {
        w: string;
        type: {
            complex: {
                marginLeft: string;
            };
            compact: {};
        };
    };
};
export declare const headerStyles: {
    defaultConfig: {
        display: "flex";
        flexDirection: "column";
        minWidth: string;
        w: string;
        h: string;
        backgroundColor: "$color-background-default";
        table: {
            w: string;
            display: "flex";
            padding: string;
            type: {
                complex: {
                    h: string;
                };
                compact: {
                    h: string;
                };
            };
        };
        titleAndDescriptionContainer: {
            w: string;
            text: "$typo-header-xLarge";
            display: "flex";
            flexDirection: "column";
        };
        counter: {
            w: string;
            h: string;
        };
        titleContainer: {
            display: "flex";
            alignItems: "center";
            gap: string;
        };
        description: {
            text: "$typo-body-medium";
            color: "$color-content-secondary";
            gap: string;
        };
        actionContainer: {
            display: "flex";
            gap: string;
            alignItems: "center";
        };
        bottomBar: {
            borderTopWidth: string;
            borderStyle: "$border-style-solid";
            borderColor: "$color-border-default";
            display: "flex";
            type: {
                complex: {
                    padding: string;
                    gap: string;
                    h: string;
                };
                compact: {
                    padding: string;
                    h: string;
                };
            };
        };
        search: {
            w: string;
            type: {
                complex: {
                    marginLeft: string;
                };
                compact: {};
            };
        };
    };
};
