import { SystemProps } from '@xstyled/styled-components';
import type { Appearance, BasicIntent } from '../../types';
import { BaseProps } from '../../types/BaseProps';
export type BadgeConfig = {
    appearance: Record<Appearance, Record<'high' | 'medium' | 'low', SystemProps>>;
    intent: Record<BasicIntent, Record<'high' | 'medium' | 'low', SystemProps>>;
    label: SystemProps;
    icon: SystemProps;
} & BaseProps;
export declare const config: {
    appearance: {
        blue: {
            high: {
                color: "nonSemantic-white-content-primary";
                backgroundColor: "nonSemantic-grey-background-strong" | "nonSemantic-red-background-strong" | "nonSemantic-raspberry-background-strong" | "nonSemantic-magenta-background-strong" | "nonSemantic-purple-background-strong" | "nonSemantic-grape-background-strong" | "nonSemantic-violet-background-strong" | "nonSemantic-blue-background-strong" | "nonSemantic-cyan-background-strong" | "nonSemantic-teal-background-strong" | "nonSemantic-aquamarine-background-strong" | "nonSemantic-green-background-strong" | "nonSemantic-emerald-background-strong" | "nonSemantic-orange-background-strong";
            };
            medium: {
                color: "nonSemantic-grey-content-primary" | "nonSemantic-red-content-primary" | "nonSemantic-raspberry-content-primary" | "nonSemantic-magenta-content-primary" | "nonSemantic-purple-content-primary" | "nonSemantic-grape-content-primary" | "nonSemantic-violet-content-primary" | "nonSemantic-blue-content-primary" | "nonSemantic-cyan-content-primary" | "nonSemantic-teal-content-primary" | "nonSemantic-aquamarine-content-primary" | "nonSemantic-green-content-primary" | "nonSemantic-emerald-content-primary" | "nonSemantic-orange-content-primary";
                backgroundColor: "nonSemantic-grey-background-muted" | "nonSemantic-red-background-muted" | "nonSemantic-raspberry-background-muted" | "nonSemantic-magenta-background-muted" | "nonSemantic-purple-background-muted" | "nonSemantic-grape-background-muted" | "nonSemantic-violet-background-muted" | "nonSemantic-blue-background-muted" | "nonSemantic-cyan-background-muted" | "nonSemantic-teal-background-muted" | "nonSemantic-aquamarine-background-muted" | "nonSemantic-green-background-muted" | "nonSemantic-emerald-background-muted" | "nonSemantic-orange-background-muted";
            };
            low: {
                color: "nonSemantic-grey-content-primary" | "nonSemantic-red-content-primary" | "nonSemantic-raspberry-content-primary" | "nonSemantic-magenta-content-primary" | "nonSemantic-purple-content-primary" | "nonSemantic-grape-content-primary" | "nonSemantic-violet-content-primary" | "nonSemantic-blue-content-primary" | "nonSemantic-cyan-content-primary" | "nonSemantic-teal-content-primary" | "nonSemantic-aquamarine-content-primary" | "nonSemantic-green-content-primary" | "nonSemantic-emerald-content-primary" | "nonSemantic-orange-content-primary";
                backgroundColor: "nonSemantic-grey-background-onSubtle" | "nonSemantic-red-background-onSubtle" | "nonSemantic-raspberry-background-onSubtle" | "nonSemantic-magenta-background-onSubtle" | "nonSemantic-purple-background-onSubtle" | "nonSemantic-grape-background-onSubtle" | "nonSemantic-violet-background-onSubtle" | "nonSemantic-blue-background-onSubtle" | "nonSemantic-cyan-background-onSubtle" | "nonSemantic-teal-background-onSubtle" | "nonSemantic-aquamarine-background-onSubtle" | "nonSemantic-green-background-onSubtle" | "nonSemantic-emerald-background-onSubtle" | "nonSemantic-orange-background-onSubtle";
            };
        };
        green: {
            high: {
                color: "nonSemantic-white-content-primary";
                backgroundColor: "nonSemantic-grey-background-strong" | "nonSemantic-red-background-strong" | "nonSemantic-raspberry-background-strong" | "nonSemantic-magenta-background-strong" | "nonSemantic-purple-background-strong" | "nonSemantic-grape-background-strong" | "nonSemantic-violet-background-strong" | "nonSemantic-blue-background-strong" | "nonSemantic-cyan-background-strong" | "nonSemantic-teal-background-strong" | "nonSemantic-aquamarine-background-strong" | "nonSemantic-green-background-strong" | "nonSemantic-emerald-background-strong" | "nonSemantic-orange-background-strong";
            };
            medium: {
                color: "nonSemantic-grey-content-primary" | "nonSemantic-red-content-primary" | "nonSemantic-raspberry-content-primary" | "nonSemantic-magenta-content-primary" | "nonSemantic-purple-content-primary" | "nonSemantic-grape-content-primary" | "nonSemantic-violet-content-primary" | "nonSemantic-blue-content-primary" | "nonSemantic-cyan-content-primary" | "nonSemantic-teal-content-primary" | "nonSemantic-aquamarine-content-primary" | "nonSemantic-green-content-primary" | "nonSemantic-emerald-content-primary" | "nonSemantic-orange-content-primary";
                backgroundColor: "nonSemantic-grey-background-muted" | "nonSemantic-red-background-muted" | "nonSemantic-raspberry-background-muted" | "nonSemantic-magenta-background-muted" | "nonSemantic-purple-background-muted" | "nonSemantic-grape-background-muted" | "nonSemantic-violet-background-muted" | "nonSemantic-blue-background-muted" | "nonSemantic-cyan-background-muted" | "nonSemantic-teal-background-muted" | "nonSemantic-aquamarine-background-muted" | "nonSemantic-green-background-muted" | "nonSemantic-emerald-background-muted" | "nonSemantic-orange-background-muted";
            };
            low: {
                color: "nonSemantic-grey-content-primary" | "nonSemantic-red-content-primary" | "nonSemantic-raspberry-content-primary" | "nonSemantic-magenta-content-primary" | "nonSemantic-purple-content-primary" | "nonSemantic-grape-content-primary" | "nonSemantic-violet-content-primary" | "nonSemantic-blue-content-primary" | "nonSemantic-cyan-content-primary" | "nonSemantic-teal-content-primary" | "nonSemantic-aquamarine-content-primary" | "nonSemantic-green-content-primary" | "nonSemantic-emerald-content-primary" | "nonSemantic-orange-content-primary";
                backgroundColor: "nonSemantic-grey-background-onSubtle" | "nonSemantic-red-background-onSubtle" | "nonSemantic-raspberry-background-onSubtle" | "nonSemantic-magenta-background-onSubtle" | "nonSemantic-purple-background-onSubtle" | "nonSemantic-grape-background-onSubtle" | "nonSemantic-violet-background-onSubtle" | "nonSemantic-blue-background-onSubtle" | "nonSemantic-cyan-background-onSubtle" | "nonSemantic-teal-background-onSubtle" | "nonSemantic-aquamarine-background-onSubtle" | "nonSemantic-green-background-onSubtle" | "nonSemantic-emerald-background-onSubtle" | "nonSemantic-orange-background-onSubtle";
            };
        };
        grey: {
            high: {
                color: "nonSemantic-white-content-primary";
                backgroundColor: "nonSemantic-grey-background-strong" | "nonSemantic-red-background-strong" | "nonSemantic-raspberry-background-strong" | "nonSemantic-magenta-background-strong" | "nonSemantic-purple-background-strong" | "nonSemantic-grape-background-strong" | "nonSemantic-violet-background-strong" | "nonSemantic-blue-background-strong" | "nonSemantic-cyan-background-strong" | "nonSemantic-teal-background-strong" | "nonSemantic-aquamarine-background-strong" | "nonSemantic-green-background-strong" | "nonSemantic-emerald-background-strong" | "nonSemantic-orange-background-strong";
            };
            medium: {
                color: "nonSemantic-grey-content-primary" | "nonSemantic-red-content-primary" | "nonSemantic-raspberry-content-primary" | "nonSemantic-magenta-content-primary" | "nonSemantic-purple-content-primary" | "nonSemantic-grape-content-primary" | "nonSemantic-violet-content-primary" | "nonSemantic-blue-content-primary" | "nonSemantic-cyan-content-primary" | "nonSemantic-teal-content-primary" | "nonSemantic-aquamarine-content-primary" | "nonSemantic-green-content-primary" | "nonSemantic-emerald-content-primary" | "nonSemantic-orange-content-primary";
                backgroundColor: "nonSemantic-grey-background-muted" | "nonSemantic-red-background-muted" | "nonSemantic-raspberry-background-muted" | "nonSemantic-magenta-background-muted" | "nonSemantic-purple-background-muted" | "nonSemantic-grape-background-muted" | "nonSemantic-violet-background-muted" | "nonSemantic-blue-background-muted" | "nonSemantic-cyan-background-muted" | "nonSemantic-teal-background-muted" | "nonSemantic-aquamarine-background-muted" | "nonSemantic-green-background-muted" | "nonSemantic-emerald-background-muted" | "nonSemantic-orange-background-muted";
            };
            low: {
                color: "nonSemantic-grey-content-primary" | "nonSemantic-red-content-primary" | "nonSemantic-raspberry-content-primary" | "nonSemantic-magenta-content-primary" | "nonSemantic-purple-content-primary" | "nonSemantic-grape-content-primary" | "nonSemantic-violet-content-primary" | "nonSemantic-blue-content-primary" | "nonSemantic-cyan-content-primary" | "nonSemantic-teal-content-primary" | "nonSemantic-aquamarine-content-primary" | "nonSemantic-green-content-primary" | "nonSemantic-emerald-content-primary" | "nonSemantic-orange-content-primary";
                backgroundColor: "nonSemantic-grey-background-onSubtle" | "nonSemantic-red-background-onSubtle" | "nonSemantic-raspberry-background-onSubtle" | "nonSemantic-magenta-background-onSubtle" | "nonSemantic-purple-background-onSubtle" | "nonSemantic-grape-background-onSubtle" | "nonSemantic-violet-background-onSubtle" | "nonSemantic-blue-background-onSubtle" | "nonSemantic-cyan-background-onSubtle" | "nonSemantic-teal-background-onSubtle" | "nonSemantic-aquamarine-background-onSubtle" | "nonSemantic-green-background-onSubtle" | "nonSemantic-emerald-background-onSubtle" | "nonSemantic-orange-background-onSubtle";
            };
        };
        red: {
            high: {
                color: "nonSemantic-white-content-primary";
                backgroundColor: "nonSemantic-grey-background-strong" | "nonSemantic-red-background-strong" | "nonSemantic-raspberry-background-strong" | "nonSemantic-magenta-background-strong" | "nonSemantic-purple-background-strong" | "nonSemantic-grape-background-strong" | "nonSemantic-violet-background-strong" | "nonSemantic-blue-background-strong" | "nonSemantic-cyan-background-strong" | "nonSemantic-teal-background-strong" | "nonSemantic-aquamarine-background-strong" | "nonSemantic-green-background-strong" | "nonSemantic-emerald-background-strong" | "nonSemantic-orange-background-strong";
            };
            medium: {
                color: "nonSemantic-grey-content-primary" | "nonSemantic-red-content-primary" | "nonSemantic-raspberry-content-primary" | "nonSemantic-magenta-content-primary" | "nonSemantic-purple-content-primary" | "nonSemantic-grape-content-primary" | "nonSemantic-violet-content-primary" | "nonSemantic-blue-content-primary" | "nonSemantic-cyan-content-primary" | "nonSemantic-teal-content-primary" | "nonSemantic-aquamarine-content-primary" | "nonSemantic-green-content-primary" | "nonSemantic-emerald-content-primary" | "nonSemantic-orange-content-primary";
                backgroundColor: "nonSemantic-grey-background-muted" | "nonSemantic-red-background-muted" | "nonSemantic-raspberry-background-muted" | "nonSemantic-magenta-background-muted" | "nonSemantic-purple-background-muted" | "nonSemantic-grape-background-muted" | "nonSemantic-violet-background-muted" | "nonSemantic-blue-background-muted" | "nonSemantic-cyan-background-muted" | "nonSemantic-teal-background-muted" | "nonSemantic-aquamarine-background-muted" | "nonSemantic-green-background-muted" | "nonSemantic-emerald-background-muted" | "nonSemantic-orange-background-muted";
            };
            low: {
                color: "nonSemantic-grey-content-primary" | "nonSemantic-red-content-primary" | "nonSemantic-raspberry-content-primary" | "nonSemantic-magenta-content-primary" | "nonSemantic-purple-content-primary" | "nonSemantic-grape-content-primary" | "nonSemantic-violet-content-primary" | "nonSemantic-blue-content-primary" | "nonSemantic-cyan-content-primary" | "nonSemantic-teal-content-primary" | "nonSemantic-aquamarine-content-primary" | "nonSemantic-green-content-primary" | "nonSemantic-emerald-content-primary" | "nonSemantic-orange-content-primary";
                backgroundColor: "nonSemantic-grey-background-onSubtle" | "nonSemantic-red-background-onSubtle" | "nonSemantic-raspberry-background-onSubtle" | "nonSemantic-magenta-background-onSubtle" | "nonSemantic-purple-background-onSubtle" | "nonSemantic-grape-background-onSubtle" | "nonSemantic-violet-background-onSubtle" | "nonSemantic-blue-background-onSubtle" | "nonSemantic-cyan-background-onSubtle" | "nonSemantic-teal-background-onSubtle" | "nonSemantic-aquamarine-background-onSubtle" | "nonSemantic-green-background-onSubtle" | "nonSemantic-emerald-background-onSubtle" | "nonSemantic-orange-background-onSubtle";
            };
        };
        orange: {
            high: {
                color: "nonSemantic-white-content-primary";
                backgroundColor: "nonSemantic-grey-background-strong" | "nonSemantic-red-background-strong" | "nonSemantic-raspberry-background-strong" | "nonSemantic-magenta-background-strong" | "nonSemantic-purple-background-strong" | "nonSemantic-grape-background-strong" | "nonSemantic-violet-background-strong" | "nonSemantic-blue-background-strong" | "nonSemantic-cyan-background-strong" | "nonSemantic-teal-background-strong" | "nonSemantic-aquamarine-background-strong" | "nonSemantic-green-background-strong" | "nonSemantic-emerald-background-strong" | "nonSemantic-orange-background-strong";
            };
            medium: {
                color: "nonSemantic-grey-content-primary" | "nonSemantic-red-content-primary" | "nonSemantic-raspberry-content-primary" | "nonSemantic-magenta-content-primary" | "nonSemantic-purple-content-primary" | "nonSemantic-grape-content-primary" | "nonSemantic-violet-content-primary" | "nonSemantic-blue-content-primary" | "nonSemantic-cyan-content-primary" | "nonSemantic-teal-content-primary" | "nonSemantic-aquamarine-content-primary" | "nonSemantic-green-content-primary" | "nonSemantic-emerald-content-primary" | "nonSemantic-orange-content-primary";
                backgroundColor: "nonSemantic-grey-background-muted" | "nonSemantic-red-background-muted" | "nonSemantic-raspberry-background-muted" | "nonSemantic-magenta-background-muted" | "nonSemantic-purple-background-muted" | "nonSemantic-grape-background-muted" | "nonSemantic-violet-background-muted" | "nonSemantic-blue-background-muted" | "nonSemantic-cyan-background-muted" | "nonSemantic-teal-background-muted" | "nonSemantic-aquamarine-background-muted" | "nonSemantic-green-background-muted" | "nonSemantic-emerald-background-muted" | "nonSemantic-orange-background-muted";
            };
            low: {
                color: "nonSemantic-grey-content-primary" | "nonSemantic-red-content-primary" | "nonSemantic-raspberry-content-primary" | "nonSemantic-magenta-content-primary" | "nonSemantic-purple-content-primary" | "nonSemantic-grape-content-primary" | "nonSemantic-violet-content-primary" | "nonSemantic-blue-content-primary" | "nonSemantic-cyan-content-primary" | "nonSemantic-teal-content-primary" | "nonSemantic-aquamarine-content-primary" | "nonSemantic-green-content-primary" | "nonSemantic-emerald-content-primary" | "nonSemantic-orange-content-primary";
                backgroundColor: "nonSemantic-grey-background-onSubtle" | "nonSemantic-red-background-onSubtle" | "nonSemantic-raspberry-background-onSubtle" | "nonSemantic-magenta-background-onSubtle" | "nonSemantic-purple-background-onSubtle" | "nonSemantic-grape-background-onSubtle" | "nonSemantic-violet-background-onSubtle" | "nonSemantic-blue-background-onSubtle" | "nonSemantic-cyan-background-onSubtle" | "nonSemantic-teal-background-onSubtle" | "nonSemantic-aquamarine-background-onSubtle" | "nonSemantic-green-background-onSubtle" | "nonSemantic-emerald-background-onSubtle" | "nonSemantic-orange-background-onSubtle";
            };
        };
        raspberry: {
            high: {
                color: "nonSemantic-white-content-primary";
                backgroundColor: "nonSemantic-grey-background-strong" | "nonSemantic-red-background-strong" | "nonSemantic-raspberry-background-strong" | "nonSemantic-magenta-background-strong" | "nonSemantic-purple-background-strong" | "nonSemantic-grape-background-strong" | "nonSemantic-violet-background-strong" | "nonSemantic-blue-background-strong" | "nonSemantic-cyan-background-strong" | "nonSemantic-teal-background-strong" | "nonSemantic-aquamarine-background-strong" | "nonSemantic-green-background-strong" | "nonSemantic-emerald-background-strong" | "nonSemantic-orange-background-strong";
            };
            medium: {
                color: "nonSemantic-grey-content-primary" | "nonSemantic-red-content-primary" | "nonSemantic-raspberry-content-primary" | "nonSemantic-magenta-content-primary" | "nonSemantic-purple-content-primary" | "nonSemantic-grape-content-primary" | "nonSemantic-violet-content-primary" | "nonSemantic-blue-content-primary" | "nonSemantic-cyan-content-primary" | "nonSemantic-teal-content-primary" | "nonSemantic-aquamarine-content-primary" | "nonSemantic-green-content-primary" | "nonSemantic-emerald-content-primary" | "nonSemantic-orange-content-primary";
                backgroundColor: "nonSemantic-grey-background-muted" | "nonSemantic-red-background-muted" | "nonSemantic-raspberry-background-muted" | "nonSemantic-magenta-background-muted" | "nonSemantic-purple-background-muted" | "nonSemantic-grape-background-muted" | "nonSemantic-violet-background-muted" | "nonSemantic-blue-background-muted" | "nonSemantic-cyan-background-muted" | "nonSemantic-teal-background-muted" | "nonSemantic-aquamarine-background-muted" | "nonSemantic-green-background-muted" | "nonSemantic-emerald-background-muted" | "nonSemantic-orange-background-muted";
            };
            low: {
                color: "nonSemantic-grey-content-primary" | "nonSemantic-red-content-primary" | "nonSemantic-raspberry-content-primary" | "nonSemantic-magenta-content-primary" | "nonSemantic-purple-content-primary" | "nonSemantic-grape-content-primary" | "nonSemantic-violet-content-primary" | "nonSemantic-blue-content-primary" | "nonSemantic-cyan-content-primary" | "nonSemantic-teal-content-primary" | "nonSemantic-aquamarine-content-primary" | "nonSemantic-green-content-primary" | "nonSemantic-emerald-content-primary" | "nonSemantic-orange-content-primary";
                backgroundColor: "nonSemantic-grey-background-onSubtle" | "nonSemantic-red-background-onSubtle" | "nonSemantic-raspberry-background-onSubtle" | "nonSemantic-magenta-background-onSubtle" | "nonSemantic-purple-background-onSubtle" | "nonSemantic-grape-background-onSubtle" | "nonSemantic-violet-background-onSubtle" | "nonSemantic-blue-background-onSubtle" | "nonSemantic-cyan-background-onSubtle" | "nonSemantic-teal-background-onSubtle" | "nonSemantic-aquamarine-background-onSubtle" | "nonSemantic-green-background-onSubtle" | "nonSemantic-emerald-background-onSubtle" | "nonSemantic-orange-background-onSubtle";
            };
        };
        magenta: {
            high: {
                color: "nonSemantic-white-content-primary";
                backgroundColor: "nonSemantic-grey-background-strong" | "nonSemantic-red-background-strong" | "nonSemantic-raspberry-background-strong" | "nonSemantic-magenta-background-strong" | "nonSemantic-purple-background-strong" | "nonSemantic-grape-background-strong" | "nonSemantic-violet-background-strong" | "nonSemantic-blue-background-strong" | "nonSemantic-cyan-background-strong" | "nonSemantic-teal-background-strong" | "nonSemantic-aquamarine-background-strong" | "nonSemantic-green-background-strong" | "nonSemantic-emerald-background-strong" | "nonSemantic-orange-background-strong";
            };
            medium: {
                color: "nonSemantic-grey-content-primary" | "nonSemantic-red-content-primary" | "nonSemantic-raspberry-content-primary" | "nonSemantic-magenta-content-primary" | "nonSemantic-purple-content-primary" | "nonSemantic-grape-content-primary" | "nonSemantic-violet-content-primary" | "nonSemantic-blue-content-primary" | "nonSemantic-cyan-content-primary" | "nonSemantic-teal-content-primary" | "nonSemantic-aquamarine-content-primary" | "nonSemantic-green-content-primary" | "nonSemantic-emerald-content-primary" | "nonSemantic-orange-content-primary";
                backgroundColor: "nonSemantic-grey-background-muted" | "nonSemantic-red-background-muted" | "nonSemantic-raspberry-background-muted" | "nonSemantic-magenta-background-muted" | "nonSemantic-purple-background-muted" | "nonSemantic-grape-background-muted" | "nonSemantic-violet-background-muted" | "nonSemantic-blue-background-muted" | "nonSemantic-cyan-background-muted" | "nonSemantic-teal-background-muted" | "nonSemantic-aquamarine-background-muted" | "nonSemantic-green-background-muted" | "nonSemantic-emerald-background-muted" | "nonSemantic-orange-background-muted";
            };
            low: {
                color: "nonSemantic-grey-content-primary" | "nonSemantic-red-content-primary" | "nonSemantic-raspberry-content-primary" | "nonSemantic-magenta-content-primary" | "nonSemantic-purple-content-primary" | "nonSemantic-grape-content-primary" | "nonSemantic-violet-content-primary" | "nonSemantic-blue-content-primary" | "nonSemantic-cyan-content-primary" | "nonSemantic-teal-content-primary" | "nonSemantic-aquamarine-content-primary" | "nonSemantic-green-content-primary" | "nonSemantic-emerald-content-primary" | "nonSemantic-orange-content-primary";
                backgroundColor: "nonSemantic-grey-background-onSubtle" | "nonSemantic-red-background-onSubtle" | "nonSemantic-raspberry-background-onSubtle" | "nonSemantic-magenta-background-onSubtle" | "nonSemantic-purple-background-onSubtle" | "nonSemantic-grape-background-onSubtle" | "nonSemantic-violet-background-onSubtle" | "nonSemantic-blue-background-onSubtle" | "nonSemantic-cyan-background-onSubtle" | "nonSemantic-teal-background-onSubtle" | "nonSemantic-aquamarine-background-onSubtle" | "nonSemantic-green-background-onSubtle" | "nonSemantic-emerald-background-onSubtle" | "nonSemantic-orange-background-onSubtle";
            };
        };
        purple: {
            high: {
                color: "nonSemantic-white-content-primary";
                backgroundColor: "nonSemantic-grey-background-strong" | "nonSemantic-red-background-strong" | "nonSemantic-raspberry-background-strong" | "nonSemantic-magenta-background-strong" | "nonSemantic-purple-background-strong" | "nonSemantic-grape-background-strong" | "nonSemantic-violet-background-strong" | "nonSemantic-blue-background-strong" | "nonSemantic-cyan-background-strong" | "nonSemantic-teal-background-strong" | "nonSemantic-aquamarine-background-strong" | "nonSemantic-green-background-strong" | "nonSemantic-emerald-background-strong" | "nonSemantic-orange-background-strong";
            };
            medium: {
                color: "nonSemantic-grey-content-primary" | "nonSemantic-red-content-primary" | "nonSemantic-raspberry-content-primary" | "nonSemantic-magenta-content-primary" | "nonSemantic-purple-content-primary" | "nonSemantic-grape-content-primary" | "nonSemantic-violet-content-primary" | "nonSemantic-blue-content-primary" | "nonSemantic-cyan-content-primary" | "nonSemantic-teal-content-primary" | "nonSemantic-aquamarine-content-primary" | "nonSemantic-green-content-primary" | "nonSemantic-emerald-content-primary" | "nonSemantic-orange-content-primary";
                backgroundColor: "nonSemantic-grey-background-muted" | "nonSemantic-red-background-muted" | "nonSemantic-raspberry-background-muted" | "nonSemantic-magenta-background-muted" | "nonSemantic-purple-background-muted" | "nonSemantic-grape-background-muted" | "nonSemantic-violet-background-muted" | "nonSemantic-blue-background-muted" | "nonSemantic-cyan-background-muted" | "nonSemantic-teal-background-muted" | "nonSemantic-aquamarine-background-muted" | "nonSemantic-green-background-muted" | "nonSemantic-emerald-background-muted" | "nonSemantic-orange-background-muted";
            };
            low: {
                color: "nonSemantic-grey-content-primary" | "nonSemantic-red-content-primary" | "nonSemantic-raspberry-content-primary" | "nonSemantic-magenta-content-primary" | "nonSemantic-purple-content-primary" | "nonSemantic-grape-content-primary" | "nonSemantic-violet-content-primary" | "nonSemantic-blue-content-primary" | "nonSemantic-cyan-content-primary" | "nonSemantic-teal-content-primary" | "nonSemantic-aquamarine-content-primary" | "nonSemantic-green-content-primary" | "nonSemantic-emerald-content-primary" | "nonSemantic-orange-content-primary";
                backgroundColor: "nonSemantic-grey-background-onSubtle" | "nonSemantic-red-background-onSubtle" | "nonSemantic-raspberry-background-onSubtle" | "nonSemantic-magenta-background-onSubtle" | "nonSemantic-purple-background-onSubtle" | "nonSemantic-grape-background-onSubtle" | "nonSemantic-violet-background-onSubtle" | "nonSemantic-blue-background-onSubtle" | "nonSemantic-cyan-background-onSubtle" | "nonSemantic-teal-background-onSubtle" | "nonSemantic-aquamarine-background-onSubtle" | "nonSemantic-green-background-onSubtle" | "nonSemantic-emerald-background-onSubtle" | "nonSemantic-orange-background-onSubtle";
            };
        };
        grape: {
            high: {
                color: "nonSemantic-white-content-primary";
                backgroundColor: "nonSemantic-grey-background-strong" | "nonSemantic-red-background-strong" | "nonSemantic-raspberry-background-strong" | "nonSemantic-magenta-background-strong" | "nonSemantic-purple-background-strong" | "nonSemantic-grape-background-strong" | "nonSemantic-violet-background-strong" | "nonSemantic-blue-background-strong" | "nonSemantic-cyan-background-strong" | "nonSemantic-teal-background-strong" | "nonSemantic-aquamarine-background-strong" | "nonSemantic-green-background-strong" | "nonSemantic-emerald-background-strong" | "nonSemantic-orange-background-strong";
            };
            medium: {
                color: "nonSemantic-grey-content-primary" | "nonSemantic-red-content-primary" | "nonSemantic-raspberry-content-primary" | "nonSemantic-magenta-content-primary" | "nonSemantic-purple-content-primary" | "nonSemantic-grape-content-primary" | "nonSemantic-violet-content-primary" | "nonSemantic-blue-content-primary" | "nonSemantic-cyan-content-primary" | "nonSemantic-teal-content-primary" | "nonSemantic-aquamarine-content-primary" | "nonSemantic-green-content-primary" | "nonSemantic-emerald-content-primary" | "nonSemantic-orange-content-primary";
                backgroundColor: "nonSemantic-grey-background-muted" | "nonSemantic-red-background-muted" | "nonSemantic-raspberry-background-muted" | "nonSemantic-magenta-background-muted" | "nonSemantic-purple-background-muted" | "nonSemantic-grape-background-muted" | "nonSemantic-violet-background-muted" | "nonSemantic-blue-background-muted" | "nonSemantic-cyan-background-muted" | "nonSemantic-teal-background-muted" | "nonSemantic-aquamarine-background-muted" | "nonSemantic-green-background-muted" | "nonSemantic-emerald-background-muted" | "nonSemantic-orange-background-muted";
            };
            low: {
                color: "nonSemantic-grey-content-primary" | "nonSemantic-red-content-primary" | "nonSemantic-raspberry-content-primary" | "nonSemantic-magenta-content-primary" | "nonSemantic-purple-content-primary" | "nonSemantic-grape-content-primary" | "nonSemantic-violet-content-primary" | "nonSemantic-blue-content-primary" | "nonSemantic-cyan-content-primary" | "nonSemantic-teal-content-primary" | "nonSemantic-aquamarine-content-primary" | "nonSemantic-green-content-primary" | "nonSemantic-emerald-content-primary" | "nonSemantic-orange-content-primary";
                backgroundColor: "nonSemantic-grey-background-onSubtle" | "nonSemantic-red-background-onSubtle" | "nonSemantic-raspberry-background-onSubtle" | "nonSemantic-magenta-background-onSubtle" | "nonSemantic-purple-background-onSubtle" | "nonSemantic-grape-background-onSubtle" | "nonSemantic-violet-background-onSubtle" | "nonSemantic-blue-background-onSubtle" | "nonSemantic-cyan-background-onSubtle" | "nonSemantic-teal-background-onSubtle" | "nonSemantic-aquamarine-background-onSubtle" | "nonSemantic-green-background-onSubtle" | "nonSemantic-emerald-background-onSubtle" | "nonSemantic-orange-background-onSubtle";
            };
        };
        violet: {
            high: {
                color: "nonSemantic-white-content-primary";
                backgroundColor: "nonSemantic-grey-background-strong" | "nonSemantic-red-background-strong" | "nonSemantic-raspberry-background-strong" | "nonSemantic-magenta-background-strong" | "nonSemantic-purple-background-strong" | "nonSemantic-grape-background-strong" | "nonSemantic-violet-background-strong" | "nonSemantic-blue-background-strong" | "nonSemantic-cyan-background-strong" | "nonSemantic-teal-background-strong" | "nonSemantic-aquamarine-background-strong" | "nonSemantic-green-background-strong" | "nonSemantic-emerald-background-strong" | "nonSemantic-orange-background-strong";
            };
            medium: {
                color: "nonSemantic-grey-content-primary" | "nonSemantic-red-content-primary" | "nonSemantic-raspberry-content-primary" | "nonSemantic-magenta-content-primary" | "nonSemantic-purple-content-primary" | "nonSemantic-grape-content-primary" | "nonSemantic-violet-content-primary" | "nonSemantic-blue-content-primary" | "nonSemantic-cyan-content-primary" | "nonSemantic-teal-content-primary" | "nonSemantic-aquamarine-content-primary" | "nonSemantic-green-content-primary" | "nonSemantic-emerald-content-primary" | "nonSemantic-orange-content-primary";
                backgroundColor: "nonSemantic-grey-background-muted" | "nonSemantic-red-background-muted" | "nonSemantic-raspberry-background-muted" | "nonSemantic-magenta-background-muted" | "nonSemantic-purple-background-muted" | "nonSemantic-grape-background-muted" | "nonSemantic-violet-background-muted" | "nonSemantic-blue-background-muted" | "nonSemantic-cyan-background-muted" | "nonSemantic-teal-background-muted" | "nonSemantic-aquamarine-background-muted" | "nonSemantic-green-background-muted" | "nonSemantic-emerald-background-muted" | "nonSemantic-orange-background-muted";
            };
            low: {
                color: "nonSemantic-grey-content-primary" | "nonSemantic-red-content-primary" | "nonSemantic-raspberry-content-primary" | "nonSemantic-magenta-content-primary" | "nonSemantic-purple-content-primary" | "nonSemantic-grape-content-primary" | "nonSemantic-violet-content-primary" | "nonSemantic-blue-content-primary" | "nonSemantic-cyan-content-primary" | "nonSemantic-teal-content-primary" | "nonSemantic-aquamarine-content-primary" | "nonSemantic-green-content-primary" | "nonSemantic-emerald-content-primary" | "nonSemantic-orange-content-primary";
                backgroundColor: "nonSemantic-grey-background-onSubtle" | "nonSemantic-red-background-onSubtle" | "nonSemantic-raspberry-background-onSubtle" | "nonSemantic-magenta-background-onSubtle" | "nonSemantic-purple-background-onSubtle" | "nonSemantic-grape-background-onSubtle" | "nonSemantic-violet-background-onSubtle" | "nonSemantic-blue-background-onSubtle" | "nonSemantic-cyan-background-onSubtle" | "nonSemantic-teal-background-onSubtle" | "nonSemantic-aquamarine-background-onSubtle" | "nonSemantic-green-background-onSubtle" | "nonSemantic-emerald-background-onSubtle" | "nonSemantic-orange-background-onSubtle";
            };
        };
        cyan: {
            high: {
                color: "nonSemantic-white-content-primary";
                backgroundColor: "nonSemantic-grey-background-strong" | "nonSemantic-red-background-strong" | "nonSemantic-raspberry-background-strong" | "nonSemantic-magenta-background-strong" | "nonSemantic-purple-background-strong" | "nonSemantic-grape-background-strong" | "nonSemantic-violet-background-strong" | "nonSemantic-blue-background-strong" | "nonSemantic-cyan-background-strong" | "nonSemantic-teal-background-strong" | "nonSemantic-aquamarine-background-strong" | "nonSemantic-green-background-strong" | "nonSemantic-emerald-background-strong" | "nonSemantic-orange-background-strong";
            };
            medium: {
                color: "nonSemantic-grey-content-primary" | "nonSemantic-red-content-primary" | "nonSemantic-raspberry-content-primary" | "nonSemantic-magenta-content-primary" | "nonSemantic-purple-content-primary" | "nonSemantic-grape-content-primary" | "nonSemantic-violet-content-primary" | "nonSemantic-blue-content-primary" | "nonSemantic-cyan-content-primary" | "nonSemantic-teal-content-primary" | "nonSemantic-aquamarine-content-primary" | "nonSemantic-green-content-primary" | "nonSemantic-emerald-content-primary" | "nonSemantic-orange-content-primary";
                backgroundColor: "nonSemantic-grey-background-muted" | "nonSemantic-red-background-muted" | "nonSemantic-raspberry-background-muted" | "nonSemantic-magenta-background-muted" | "nonSemantic-purple-background-muted" | "nonSemantic-grape-background-muted" | "nonSemantic-violet-background-muted" | "nonSemantic-blue-background-muted" | "nonSemantic-cyan-background-muted" | "nonSemantic-teal-background-muted" | "nonSemantic-aquamarine-background-muted" | "nonSemantic-green-background-muted" | "nonSemantic-emerald-background-muted" | "nonSemantic-orange-background-muted";
            };
            low: {
                color: "nonSemantic-grey-content-primary" | "nonSemantic-red-content-primary" | "nonSemantic-raspberry-content-primary" | "nonSemantic-magenta-content-primary" | "nonSemantic-purple-content-primary" | "nonSemantic-grape-content-primary" | "nonSemantic-violet-content-primary" | "nonSemantic-blue-content-primary" | "nonSemantic-cyan-content-primary" | "nonSemantic-teal-content-primary" | "nonSemantic-aquamarine-content-primary" | "nonSemantic-green-content-primary" | "nonSemantic-emerald-content-primary" | "nonSemantic-orange-content-primary";
                backgroundColor: "nonSemantic-grey-background-onSubtle" | "nonSemantic-red-background-onSubtle" | "nonSemantic-raspberry-background-onSubtle" | "nonSemantic-magenta-background-onSubtle" | "nonSemantic-purple-background-onSubtle" | "nonSemantic-grape-background-onSubtle" | "nonSemantic-violet-background-onSubtle" | "nonSemantic-blue-background-onSubtle" | "nonSemantic-cyan-background-onSubtle" | "nonSemantic-teal-background-onSubtle" | "nonSemantic-aquamarine-background-onSubtle" | "nonSemantic-green-background-onSubtle" | "nonSemantic-emerald-background-onSubtle" | "nonSemantic-orange-background-onSubtle";
            };
        };
        teal: {
            high: {
                color: "nonSemantic-white-content-primary";
                backgroundColor: "nonSemantic-grey-background-strong" | "nonSemantic-red-background-strong" | "nonSemantic-raspberry-background-strong" | "nonSemantic-magenta-background-strong" | "nonSemantic-purple-background-strong" | "nonSemantic-grape-background-strong" | "nonSemantic-violet-background-strong" | "nonSemantic-blue-background-strong" | "nonSemantic-cyan-background-strong" | "nonSemantic-teal-background-strong" | "nonSemantic-aquamarine-background-strong" | "nonSemantic-green-background-strong" | "nonSemantic-emerald-background-strong" | "nonSemantic-orange-background-strong";
            };
            medium: {
                color: "nonSemantic-grey-content-primary" | "nonSemantic-red-content-primary" | "nonSemantic-raspberry-content-primary" | "nonSemantic-magenta-content-primary" | "nonSemantic-purple-content-primary" | "nonSemantic-grape-content-primary" | "nonSemantic-violet-content-primary" | "nonSemantic-blue-content-primary" | "nonSemantic-cyan-content-primary" | "nonSemantic-teal-content-primary" | "nonSemantic-aquamarine-content-primary" | "nonSemantic-green-content-primary" | "nonSemantic-emerald-content-primary" | "nonSemantic-orange-content-primary";
                backgroundColor: "nonSemantic-grey-background-muted" | "nonSemantic-red-background-muted" | "nonSemantic-raspberry-background-muted" | "nonSemantic-magenta-background-muted" | "nonSemantic-purple-background-muted" | "nonSemantic-grape-background-muted" | "nonSemantic-violet-background-muted" | "nonSemantic-blue-background-muted" | "nonSemantic-cyan-background-muted" | "nonSemantic-teal-background-muted" | "nonSemantic-aquamarine-background-muted" | "nonSemantic-green-background-muted" | "nonSemantic-emerald-background-muted" | "nonSemantic-orange-background-muted";
            };
            low: {
                color: "nonSemantic-grey-content-primary" | "nonSemantic-red-content-primary" | "nonSemantic-raspberry-content-primary" | "nonSemantic-magenta-content-primary" | "nonSemantic-purple-content-primary" | "nonSemantic-grape-content-primary" | "nonSemantic-violet-content-primary" | "nonSemantic-blue-content-primary" | "nonSemantic-cyan-content-primary" | "nonSemantic-teal-content-primary" | "nonSemantic-aquamarine-content-primary" | "nonSemantic-green-content-primary" | "nonSemantic-emerald-content-primary" | "nonSemantic-orange-content-primary";
                backgroundColor: "nonSemantic-grey-background-onSubtle" | "nonSemantic-red-background-onSubtle" | "nonSemantic-raspberry-background-onSubtle" | "nonSemantic-magenta-background-onSubtle" | "nonSemantic-purple-background-onSubtle" | "nonSemantic-grape-background-onSubtle" | "nonSemantic-violet-background-onSubtle" | "nonSemantic-blue-background-onSubtle" | "nonSemantic-cyan-background-onSubtle" | "nonSemantic-teal-background-onSubtle" | "nonSemantic-aquamarine-background-onSubtle" | "nonSemantic-green-background-onSubtle" | "nonSemantic-emerald-background-onSubtle" | "nonSemantic-orange-background-onSubtle";
            };
        };
        aquamarine: {
            high: {
                color: "nonSemantic-white-content-primary";
                backgroundColor: "nonSemantic-grey-background-strong" | "nonSemantic-red-background-strong" | "nonSemantic-raspberry-background-strong" | "nonSemantic-magenta-background-strong" | "nonSemantic-purple-background-strong" | "nonSemantic-grape-background-strong" | "nonSemantic-violet-background-strong" | "nonSemantic-blue-background-strong" | "nonSemantic-cyan-background-strong" | "nonSemantic-teal-background-strong" | "nonSemantic-aquamarine-background-strong" | "nonSemantic-green-background-strong" | "nonSemantic-emerald-background-strong" | "nonSemantic-orange-background-strong";
            };
            medium: {
                color: "nonSemantic-grey-content-primary" | "nonSemantic-red-content-primary" | "nonSemantic-raspberry-content-primary" | "nonSemantic-magenta-content-primary" | "nonSemantic-purple-content-primary" | "nonSemantic-grape-content-primary" | "nonSemantic-violet-content-primary" | "nonSemantic-blue-content-primary" | "nonSemantic-cyan-content-primary" | "nonSemantic-teal-content-primary" | "nonSemantic-aquamarine-content-primary" | "nonSemantic-green-content-primary" | "nonSemantic-emerald-content-primary" | "nonSemantic-orange-content-primary";
                backgroundColor: "nonSemantic-grey-background-muted" | "nonSemantic-red-background-muted" | "nonSemantic-raspberry-background-muted" | "nonSemantic-magenta-background-muted" | "nonSemantic-purple-background-muted" | "nonSemantic-grape-background-muted" | "nonSemantic-violet-background-muted" | "nonSemantic-blue-background-muted" | "nonSemantic-cyan-background-muted" | "nonSemantic-teal-background-muted" | "nonSemantic-aquamarine-background-muted" | "nonSemantic-green-background-muted" | "nonSemantic-emerald-background-muted" | "nonSemantic-orange-background-muted";
            };
            low: {
                color: "nonSemantic-grey-content-primary" | "nonSemantic-red-content-primary" | "nonSemantic-raspberry-content-primary" | "nonSemantic-magenta-content-primary" | "nonSemantic-purple-content-primary" | "nonSemantic-grape-content-primary" | "nonSemantic-violet-content-primary" | "nonSemantic-blue-content-primary" | "nonSemantic-cyan-content-primary" | "nonSemantic-teal-content-primary" | "nonSemantic-aquamarine-content-primary" | "nonSemantic-green-content-primary" | "nonSemantic-emerald-content-primary" | "nonSemantic-orange-content-primary";
                backgroundColor: "nonSemantic-grey-background-onSubtle" | "nonSemantic-red-background-onSubtle" | "nonSemantic-raspberry-background-onSubtle" | "nonSemantic-magenta-background-onSubtle" | "nonSemantic-purple-background-onSubtle" | "nonSemantic-grape-background-onSubtle" | "nonSemantic-violet-background-onSubtle" | "nonSemantic-blue-background-onSubtle" | "nonSemantic-cyan-background-onSubtle" | "nonSemantic-teal-background-onSubtle" | "nonSemantic-aquamarine-background-onSubtle" | "nonSemantic-green-background-onSubtle" | "nonSemantic-emerald-background-onSubtle" | "nonSemantic-orange-background-onSubtle";
            };
        };
        emerald: {
            high: {
                color: "nonSemantic-white-content-primary";
                backgroundColor: "nonSemantic-grey-background-strong" | "nonSemantic-red-background-strong" | "nonSemantic-raspberry-background-strong" | "nonSemantic-magenta-background-strong" | "nonSemantic-purple-background-strong" | "nonSemantic-grape-background-strong" | "nonSemantic-violet-background-strong" | "nonSemantic-blue-background-strong" | "nonSemantic-cyan-background-strong" | "nonSemantic-teal-background-strong" | "nonSemantic-aquamarine-background-strong" | "nonSemantic-green-background-strong" | "nonSemantic-emerald-background-strong" | "nonSemantic-orange-background-strong";
            };
            medium: {
                color: "nonSemantic-grey-content-primary" | "nonSemantic-red-content-primary" | "nonSemantic-raspberry-content-primary" | "nonSemantic-magenta-content-primary" | "nonSemantic-purple-content-primary" | "nonSemantic-grape-content-primary" | "nonSemantic-violet-content-primary" | "nonSemantic-blue-content-primary" | "nonSemantic-cyan-content-primary" | "nonSemantic-teal-content-primary" | "nonSemantic-aquamarine-content-primary" | "nonSemantic-green-content-primary" | "nonSemantic-emerald-content-primary" | "nonSemantic-orange-content-primary";
                backgroundColor: "nonSemantic-grey-background-muted" | "nonSemantic-red-background-muted" | "nonSemantic-raspberry-background-muted" | "nonSemantic-magenta-background-muted" | "nonSemantic-purple-background-muted" | "nonSemantic-grape-background-muted" | "nonSemantic-violet-background-muted" | "nonSemantic-blue-background-muted" | "nonSemantic-cyan-background-muted" | "nonSemantic-teal-background-muted" | "nonSemantic-aquamarine-background-muted" | "nonSemantic-green-background-muted" | "nonSemantic-emerald-background-muted" | "nonSemantic-orange-background-muted";
            };
            low: {
                color: "nonSemantic-grey-content-primary" | "nonSemantic-red-content-primary" | "nonSemantic-raspberry-content-primary" | "nonSemantic-magenta-content-primary" | "nonSemantic-purple-content-primary" | "nonSemantic-grape-content-primary" | "nonSemantic-violet-content-primary" | "nonSemantic-blue-content-primary" | "nonSemantic-cyan-content-primary" | "nonSemantic-teal-content-primary" | "nonSemantic-aquamarine-content-primary" | "nonSemantic-green-content-primary" | "nonSemantic-emerald-content-primary" | "nonSemantic-orange-content-primary";
                backgroundColor: "nonSemantic-grey-background-onSubtle" | "nonSemantic-red-background-onSubtle" | "nonSemantic-raspberry-background-onSubtle" | "nonSemantic-magenta-background-onSubtle" | "nonSemantic-purple-background-onSubtle" | "nonSemantic-grape-background-onSubtle" | "nonSemantic-violet-background-onSubtle" | "nonSemantic-blue-background-onSubtle" | "nonSemantic-cyan-background-onSubtle" | "nonSemantic-teal-background-onSubtle" | "nonSemantic-aquamarine-background-onSubtle" | "nonSemantic-green-background-onSubtle" | "nonSemantic-emerald-background-onSubtle" | "nonSemantic-orange-background-onSubtle";
            };
        };
    };
    intent: {
        neutral: {
            high: {
                color: import("@xstyled/system").SystemProp<import("@xstyled/system").Color<import("@xstyled/system").Theme>, import("@xstyled/system").Theme> | undefined;
                backgroundColor: "background-neutral-strong" | "background-informative-strong" | "background-positive-strong" | "background-warning-strong" | "background-negative-strong";
            };
            medium: {
                color: import("@xstyled/system").SystemProp<import("@xstyled/system").Color<import("@xstyled/system").Theme>, import("@xstyled/system").Theme> | undefined;
                backgroundColor: "background-neutral-muted" | "background-informative-muted" | "background-positive-muted" | "background-warning-muted" | "background-negative-muted";
            };
            low: {
                color: import("@xstyled/system").SystemProp<import("@xstyled/system").Color<import("@xstyled/system").Theme>, import("@xstyled/system").Theme> | undefined;
                backgroundColor: "background-neutral-onSubtle" | "background-informative-onSubtle" | "background-positive-onSubtle" | "background-warning-onSubtle" | "background-negative-onSubtle";
            };
        };
        informative: {
            high: {
                color: import("@xstyled/system").SystemProp<import("@xstyled/system").Color<import("@xstyled/system").Theme>, import("@xstyled/system").Theme> | undefined;
                backgroundColor: "background-neutral-strong" | "background-informative-strong" | "background-positive-strong" | "background-warning-strong" | "background-negative-strong";
            };
            medium: {
                color: import("@xstyled/system").SystemProp<import("@xstyled/system").Color<import("@xstyled/system").Theme>, import("@xstyled/system").Theme> | undefined;
                backgroundColor: "background-neutral-muted" | "background-informative-muted" | "background-positive-muted" | "background-warning-muted" | "background-negative-muted";
            };
            low: {
                color: import("@xstyled/system").SystemProp<import("@xstyled/system").Color<import("@xstyled/system").Theme>, import("@xstyled/system").Theme> | undefined;
                backgroundColor: "background-neutral-onSubtle" | "background-informative-onSubtle" | "background-positive-onSubtle" | "background-warning-onSubtle" | "background-negative-onSubtle";
            };
        };
        positive: {
            high: {
                color: import("@xstyled/system").SystemProp<import("@xstyled/system").Color<import("@xstyled/system").Theme>, import("@xstyled/system").Theme> | undefined;
                backgroundColor: "background-neutral-strong" | "background-informative-strong" | "background-positive-strong" | "background-warning-strong" | "background-negative-strong";
            };
            medium: {
                color: import("@xstyled/system").SystemProp<import("@xstyled/system").Color<import("@xstyled/system").Theme>, import("@xstyled/system").Theme> | undefined;
                backgroundColor: "background-neutral-muted" | "background-informative-muted" | "background-positive-muted" | "background-warning-muted" | "background-negative-muted";
            };
            low: {
                color: import("@xstyled/system").SystemProp<import("@xstyled/system").Color<import("@xstyled/system").Theme>, import("@xstyled/system").Theme> | undefined;
                backgroundColor: "background-neutral-onSubtle" | "background-informative-onSubtle" | "background-positive-onSubtle" | "background-warning-onSubtle" | "background-negative-onSubtle";
            };
        };
        warning: {
            high: {
                color: import("@xstyled/system").SystemProp<import("@xstyled/system").Color<import("@xstyled/system").Theme>, import("@xstyled/system").Theme> | undefined;
                backgroundColor: "background-neutral-strong" | "background-informative-strong" | "background-positive-strong" | "background-warning-strong" | "background-negative-strong";
            };
            medium: {
                color: import("@xstyled/system").SystemProp<import("@xstyled/system").Color<import("@xstyled/system").Theme>, import("@xstyled/system").Theme> | undefined;
                backgroundColor: "background-neutral-muted" | "background-informative-muted" | "background-positive-muted" | "background-warning-muted" | "background-negative-muted";
            };
            low: {
                color: import("@xstyled/system").SystemProp<import("@xstyled/system").Color<import("@xstyled/system").Theme>, import("@xstyled/system").Theme> | undefined;
                backgroundColor: "background-neutral-onSubtle" | "background-informative-onSubtle" | "background-positive-onSubtle" | "background-warning-onSubtle" | "background-negative-onSubtle";
            };
        };
        negative: {
            high: {
                color: import("@xstyled/system").SystemProp<import("@xstyled/system").Color<import("@xstyled/system").Theme>, import("@xstyled/system").Theme> | undefined;
                backgroundColor: "background-neutral-strong" | "background-informative-strong" | "background-positive-strong" | "background-warning-strong" | "background-negative-strong";
            };
            medium: {
                color: import("@xstyled/system").SystemProp<import("@xstyled/system").Color<import("@xstyled/system").Theme>, import("@xstyled/system").Theme> | undefined;
                backgroundColor: "background-neutral-muted" | "background-informative-muted" | "background-positive-muted" | "background-warning-muted" | "background-negative-muted";
            };
            low: {
                color: import("@xstyled/system").SystemProp<import("@xstyled/system").Color<import("@xstyled/system").Theme>, import("@xstyled/system").Theme> | undefined;
                backgroundColor: "background-neutral-onSubtle" | "background-informative-onSubtle" | "background-positive-onSubtle" | "background-warning-onSubtle" | "background-negative-onSubtle";
            };
        };
    };
    display: "flex";
    w: string;
    h: string;
    borderRadius: string;
    flexShrink: number;
    alignItems: "center";
    label: {
        padding: string;
    };
    icon: {
        padding: string;
    };
    gap: string;
};
