import { LoaderConfig } from './Loader.styles';
import type { LoaderAppearance, LoaderShape, LoaderSize } from './types';
import { DeepPartial } from '../../utility-types/DeepPartial';
export type LoaderProps = {
    appearance?: LoaderAppearance;
    size?: LoaderSize;
    progress?: number;
    shape: LoaderShape;
    custom?: DeepPartial<LoaderConfig>;
};
