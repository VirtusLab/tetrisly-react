import { ThemeColor } from '@xstyled/styled-components';
import type { Property } from 'csstype';
import type { LoaderAppearance, LoaderShape, LoaderSize } from './types';
import { Theme } from '../../theme';
import { BaseProps } from '../../types/BaseProps';
export type SVGProps = Omit<BaseProps, 'opacity' | 'display' | 'order' | 'cursor' | 'pointerEvents' | 'overflow' | 'visibility' | 'fill' | 'transform' | 'rotate' | 'scale' | 'stroke' | 'fontFamily' | 'fontSize' | 'fontStyle' | 'fontStyle' | 'fontVariant' | 'fontWeight' | 'letterSpacing' | 'textDecoration'> & {
    fill?: ThemeColor<Theme> | Property.Fill;
    strokeWidth?: Property.StrokeWidth<string | number>;
    strokeLinecap?: 'inherit' | 'round' | 'butt' | 'square';
};
export type LoaderConfig = {
    shape?: Partial<Record<LoaderShape, {
        size?: Partial<Record<LoaderSize, SVGProps>>;
    }>>;
    innerElements?: {
        base?: {
            appearance?: Partial<Record<LoaderAppearance, BaseProps>>;
        } & SVGProps;
        progress?: {
            appearance?: Partial<Record<LoaderAppearance, BaseProps>>;
        } & SVGProps;
    };
} & BaseProps;
export declare const defaultConfig: {
    fill: "none";
    borderRadius: string;
    shape: {
        circle: {
            size: {
                large: {
                    w: number;
                    h: number;
                    strokeWidth: string;
                };
                medium: {
                    w: number;
                    h: number;
                    strokeWidth: string;
                };
                small: {
                    w: number;
                    h: number;
                    strokeWidth: string;
                };
            };
        };
        bar: {
            size: {
                large: {
                    w: number;
                    h: number;
                    strokeWidth: string;
                };
                medium: {
                    w: number;
                    h: number;
                    strokeWidth: string;
                };
                small: {
                    w: number;
                    h: number;
                    strokeWidth: string;
                };
            };
        };
    };
    innerElements: {
        base: {
            appearance: {
                primary: {
                    stroke: "interaction-neutral-subtle-normal";
                };
                inverted: {
                    stroke: "interaction-inverted-normal";
                };
                white: {
                    stroke: "interaction-inverted-normal";
                    opacity: number;
                };
                greyscale: {
                    stroke: "interaction-neutral-subtle-normal";
                };
            };
        };
        progress: {
            strokeLinecap: "round";
            appearance: {
                primary: {
                    stroke: "interaction-default-normal";
                };
                inverted: {
                    stroke: "interaction-default-normal";
                };
                white: {
                    stroke: "interaction-inverted-normal";
                };
                greyscale: {
                    stroke: "interaction-neutral-normal";
                };
            };
        };
    };
};
