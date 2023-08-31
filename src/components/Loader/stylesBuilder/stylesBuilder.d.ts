import { LoaderProps } from '../Loader.props';
type StylesBuilderProps = Omit<Required<LoaderProps>, 'custom' | 'progress'> & {
    custom: LoaderProps['custom'];
    progress: LoaderProps['progress'];
};
export declare const stylesBuilder: (props: StylesBuilderProps) => {
    svgStyles: {
        fill: "none";
        borderRadius: string;
        viewBox: string;
        w: number;
        h: number;
        strokeWidth: "2";
    } | {
        fill: "none";
        borderRadius: string;
        viewBox: string;
        w: number;
        h: number;
        strokeWidth: "2";
    } | {
        fill: "none";
        borderRadius: string;
        viewBox: string;
        w: number;
        h: number;
        strokeWidth: "2";
    } | {
        fill: "none";
        borderRadius: string;
        viewBox: string;
        w: number;
        h: number;
        strokeWidth: "8";
    } | {
        fill: "none";
        borderRadius: string;
        viewBox: string;
        w: number;
        h: number;
        strokeWidth: "6";
    } | {
        fill: "none";
        borderRadius: string;
        viewBox: string;
        w: number;
        h: number;
        strokeWidth: "4";
    };
    baseStyles: {
        strokeLinecap: "round";
        stroke: "interaction-neutral-subtle-normal";
        strokeWidth: "2";
        d: string;
    } | {
        strokeLinecap: "round";
        stroke: "interaction-inverted-normal";
        strokeWidth: "2";
        d: string;
    } | {
        strokeLinecap: "round";
        stroke: "interaction-inverted-normal";
        opacity: number;
        strokeWidth: "2";
        d: string;
    } | {
        strokeLinecap: "round";
        stroke: "interaction-neutral-subtle-normal";
        strokeWidth: "2";
        d: string;
    } | {
        strokeLinecap: "round";
        stroke: "interaction-neutral-subtle-normal";
        strokeWidth: "2";
        d: string;
    } | {
        strokeLinecap: "round";
        stroke: "interaction-inverted-normal";
        strokeWidth: "2";
        d: string;
    } | {
        strokeLinecap: "round";
        stroke: "interaction-inverted-normal";
        opacity: number;
        strokeWidth: "2";
        d: string;
    } | {
        strokeLinecap: "round";
        stroke: "interaction-neutral-subtle-normal";
        strokeWidth: "2";
        d: string;
    } | {
        strokeLinecap: "round";
        stroke: "interaction-neutral-subtle-normal";
        strokeWidth: "2";
        d: string;
    } | {
        strokeLinecap: "round";
        stroke: "interaction-inverted-normal";
        strokeWidth: "2";
        d: string;
    } | {
        strokeLinecap: "round";
        stroke: "interaction-inverted-normal";
        opacity: number;
        strokeWidth: "2";
        d: string;
    } | {
        strokeLinecap: "round";
        stroke: "interaction-neutral-subtle-normal";
        strokeWidth: "2";
        d: string;
    } | {
        strokeLinecap: "round";
        stroke: "interaction-neutral-subtle-normal";
        strokeWidth: "8";
        d: string;
    } | {
        strokeLinecap: "round";
        stroke: "interaction-inverted-normal";
        strokeWidth: "8";
        d: string;
    } | {
        strokeLinecap: "round";
        stroke: "interaction-inverted-normal";
        opacity: number;
        strokeWidth: "8";
        d: string;
    } | {
        strokeLinecap: "round";
        stroke: "interaction-neutral-subtle-normal";
        strokeWidth: "8";
        d: string;
    } | {
        strokeLinecap: "round";
        stroke: "interaction-neutral-subtle-normal";
        strokeWidth: "6";
        d: string;
    } | {
        strokeLinecap: "round";
        stroke: "interaction-inverted-normal";
        strokeWidth: "6";
        d: string;
    } | {
        strokeLinecap: "round";
        stroke: "interaction-inverted-normal";
        opacity: number;
        strokeWidth: "6";
        d: string;
    } | {
        strokeLinecap: "round";
        stroke: "interaction-neutral-subtle-normal";
        strokeWidth: "6";
        d: string;
    } | {
        strokeLinecap: "round";
        stroke: "interaction-neutral-subtle-normal";
        strokeWidth: "4";
        d: string;
    } | {
        strokeLinecap: "round";
        stroke: "interaction-inverted-normal";
        strokeWidth: "4";
        d: string;
    } | {
        strokeLinecap: "round";
        stroke: "interaction-inverted-normal";
        opacity: number;
        strokeWidth: "4";
        d: string;
    } | {
        strokeLinecap: "round";
        stroke: "interaction-neutral-subtle-normal";
        strokeWidth: "4";
        d: string;
    };
    progressStyles: {
        strokeLinecap: "round";
        stroke: "interaction-default-normal";
        strokeWidth: "2";
        d: string;
    } | {
        strokeLinecap: "round";
        stroke: "interaction-default-normal";
        strokeWidth: "2";
        d: string;
    } | {
        strokeLinecap: "round";
        stroke: "interaction-inverted-normal";
        strokeWidth: "2";
        d: string;
    } | {
        strokeLinecap: "round";
        stroke: "interaction-neutral-normal";
        strokeWidth: "2";
        d: string;
    } | {
        strokeLinecap: "round";
        stroke: "interaction-default-normal";
        strokeWidth: "2";
        d: string;
    } | {
        strokeLinecap: "round";
        stroke: "interaction-default-normal";
        strokeWidth: "2";
        d: string;
    } | {
        strokeLinecap: "round";
        stroke: "interaction-inverted-normal";
        strokeWidth: "2";
        d: string;
    } | {
        strokeLinecap: "round";
        stroke: "interaction-neutral-normal";
        strokeWidth: "2";
        d: string;
    } | {
        strokeLinecap: "round";
        stroke: "interaction-default-normal";
        strokeWidth: "2";
        d: string;
    } | {
        strokeLinecap: "round";
        stroke: "interaction-default-normal";
        strokeWidth: "2";
        d: string;
    } | {
        strokeLinecap: "round";
        stroke: "interaction-inverted-normal";
        strokeWidth: "2";
        d: string;
    } | {
        strokeLinecap: "round";
        stroke: "interaction-neutral-normal";
        strokeWidth: "2";
        d: string;
    } | {
        strokeLinecap: "round";
        stroke: "interaction-default-normal";
        strokeWidth: "8";
        d: string;
    } | {
        strokeLinecap: "round";
        stroke: "interaction-default-normal";
        strokeWidth: "8";
        d: string;
    } | {
        strokeLinecap: "round";
        stroke: "interaction-inverted-normal";
        strokeWidth: "8";
        d: string;
    } | {
        strokeLinecap: "round";
        stroke: "interaction-neutral-normal";
        strokeWidth: "8";
        d: string;
    } | {
        strokeLinecap: "round";
        stroke: "interaction-default-normal";
        strokeWidth: "6";
        d: string;
    } | {
        strokeLinecap: "round";
        stroke: "interaction-default-normal";
        strokeWidth: "6";
        d: string;
    } | {
        strokeLinecap: "round";
        stroke: "interaction-inverted-normal";
        strokeWidth: "6";
        d: string;
    } | {
        strokeLinecap: "round";
        stroke: "interaction-neutral-normal";
        strokeWidth: "6";
        d: string;
    } | {
        strokeLinecap: "round";
        stroke: "interaction-default-normal";
        strokeWidth: "4";
        d: string;
    } | {
        strokeLinecap: "round";
        stroke: "interaction-default-normal";
        strokeWidth: "4";
        d: string;
    } | {
        strokeLinecap: "round";
        stroke: "interaction-inverted-normal";
        strokeWidth: "4";
        d: string;
    } | {
        strokeLinecap: "round";
        stroke: "interaction-neutral-normal";
        strokeWidth: "4";
        d: string;
    };
};
export {};
