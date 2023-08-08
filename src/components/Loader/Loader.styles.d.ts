export declare const config: {
    readonly size: {
        readonly circle: {
            readonly large: {
                readonly w: 48;
                readonly h: 48;
                readonly strokeWidth: "2";
            };
            readonly medium: {
                readonly w: 32;
                readonly h: 32;
                readonly strokeWidth: "2";
            };
            readonly small: {
                readonly w: 20;
                readonly h: 20;
                readonly strokeWidth: "2";
            };
        };
        readonly bar: {
            readonly large: {
                readonly w: 128;
                readonly h: 8;
                readonly strokeWidth: "8";
            };
            readonly medium: {
                readonly w: 128;
                readonly h: 6;
                readonly strokeWidth: "6";
            };
            readonly small: {
                readonly w: 128;
                readonly h: 4;
                readonly strokeWidth: "4";
            };
        };
    };
    readonly appearance: {
        readonly primary: {
            readonly base: {
                readonly stroke: "interaction-neutral-subtle-normal";
            };
            readonly progress: {
                readonly stroke: "interaction-default-normal";
            };
        };
        readonly inverted: {
            readonly base: {
                readonly stroke: "interaction-inverted-normal";
            };
            readonly progress: {
                readonly stroke: "interaction-default-normal";
            };
        };
        readonly white: {
            readonly base: {
                readonly stroke: "interaction-inverted-normal";
                readonly opacity: 0.4;
            };
            readonly progress: {
                readonly stroke: "interaction-inverted-normal";
            };
        };
        readonly greyscale: {
            readonly base: {
                readonly stroke: "interaction-neutral-subtle-normal";
            };
            readonly progress: {
                readonly stroke: "interaction-neutral-normal";
            };
        };
    };
    readonly svg: {
        readonly fill: "none";
        readonly borderRadius: "large";
    };
    readonly progress: {
        readonly strokeLinecap: "round";
    };
};
