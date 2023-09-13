import type { LoaderConfig } from './Loader.styles';
import type { LoaderAppearance, LoaderShape, LoaderSize } from './types';

export type LoaderProps = {
  appearance?: LoaderAppearance;
  size?: LoaderSize;
  progress?: number;
  shape: LoaderShape;
  custom?: LoaderConfig;
};
