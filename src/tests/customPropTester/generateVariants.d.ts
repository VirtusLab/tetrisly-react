import { Options } from './options.type';
type Variant = {
    name: string;
    expectedStyle: string;
    variantProps: object;
};
type Variants = {
    componentName: string;
    testId: string;
    variants: Variant[];
};
export declare const generateVariants: ({ containerId, innerElements, props, }: Options) => Variants[];
export {};
