import { LoaderProps } from '../Loader.props';
import { SVGProps } from '../Loader.styles';
type StylesBuilderProps = Omit<Required<LoaderProps>, 'custom' | 'progress'> & {
    custom: LoaderProps['custom'];
    progress: LoaderProps['progress'];
};
type LoaderStylesBuilder = {
    container: SVGProps;
    base: SVGProps;
    progress: SVGProps;
};
export declare const stylesBuilder: ({ custom, ...props }: StylesBuilderProps) => LoaderStylesBuilder;
export {};
