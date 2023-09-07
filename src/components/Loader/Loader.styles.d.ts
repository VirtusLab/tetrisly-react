import { SystemProps } from '@xstyled/styled-components';
import { SvgProperties } from 'csstype';
import type { LoaderAppearance, LoaderShape, LoaderSize } from './types';
import { BaseProps } from '../../types/BaseProps';
export type LoaderConfig = {
    size: Record<LoaderShape, Record<LoaderSize, SystemProps & Pick<SvgProperties, 'strokeWidth'>>>;
    appearance: Record<LoaderAppearance, Record<'base' | 'progress', SystemProps>>;
    svg: SystemProps;
    progress: SystemProps & Pick<SvgProperties, 'strokeLinecap'>;
} & BaseProps;
export declare const defaultConfig: {
    size: {
        circle: {
            large: {
                w: number;
                h: number;
                strokeWidth: "2";
            };
            medium: {
                w: number;
                h: number;
                strokeWidth: "2";
            };
            small: {
                w: number;
                h: number;
                strokeWidth: "2";
            };
        };
        bar: {
            large: {
                w: number;
                h: number;
                strokeWidth: "8";
            };
            medium: {
                w: number;
                h: number;
                strokeWidth: "6";
            };
            small: {
                w: number;
                h: number;
                strokeWidth: "4";
            };
        };
    };
    appearance: {
        primary: {
            base: {
                stroke: "interaction-neutral-subtle-normal";
            };
            progress: {
                stroke: "interaction-default-normal";
            };
        };
        inverted: {
            base: {
                stroke: "interaction-inverted-normal";
            };
            progress: {
                stroke: "interaction-default-normal";
            };
        };
        white: {
            base: {
                stroke: "interaction-inverted-normal";
                opacity: number;
            };
            progress: {
                stroke: "interaction-inverted-normal";
            };
        };
        greyscale: {
            base: {
                stroke: "interaction-neutral-subtle-normal";
            };
            progress: {
                stroke: "interaction-neutral-normal";
            };
        };
    };
    svg: {
        fill: "none";
        borderRadius: string;
    };
    progress: {
        strokeLinecap: "round";
    };
};
