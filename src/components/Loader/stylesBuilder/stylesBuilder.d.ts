import { LoaderProps } from '../Loader.props';
type StylesBuilderProps = Omit<Required<LoaderProps>, 'custom' | 'progress'> & {
    custom: LoaderProps['custom'];
    progress: LoaderProps['progress'];
};
export declare function stylesBuilder(props: StylesBuilderProps): {
    svgStyles: {
        fill: "none";
        borderRadius: "large";
        viewBox: string;
        w: 48;
        h: 48;
        strokeWidth: "2";
    } | {
        fill: "none";
        borderRadius: "large";
        viewBox: string;
        w: 32;
        h: 32;
        strokeWidth: "2";
    } | {
        fill: "none";
        borderRadius: "large";
        viewBox: string;
        w: 20;
        h: 20;
        strokeWidth: "2";
    } | {
        fill: "none";
        borderRadius: "large";
        viewBox: string;
        w: 128;
        h: 8;
        strokeWidth: "8";
    } | {
        fill: "none";
        borderRadius: "large";
        viewBox: string;
        w: 128;
        h: 6;
        strokeWidth: "6";
    } | {
        fill: "none";
        borderRadius: "large";
        viewBox: string;
        w: 128;
        h: 4;
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
        opacity: 0.4;
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
        opacity: 0.4;
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
        opacity: 0.4;
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
        opacity: 0.4;
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
        opacity: 0.4;
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
        opacity: 0.4;
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
