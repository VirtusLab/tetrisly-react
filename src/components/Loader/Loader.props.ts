import { SystemProps } from '@xstyled/styled-components';

import { config } from './Loader.styles';
import type { LoaderAppearance, LoaderShape, LoaderSize } from './types';

import { Theme } from '@/theme';
import { DeepPartial } from '@/utility-types/DeepPartial';

export type LoaderProps = {
  appearance?: LoaderAppearance;
  size?: LoaderSize;
  progress?: number;
  shape: LoaderShape;
  custom?: DeepPartial<SystemProps<Theme> & typeof config>;
};
