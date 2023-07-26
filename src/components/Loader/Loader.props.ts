import { SystemProps } from '@xstyled/styled-components';

import { config } from './Loader.styles';
import type { LoaderAppearance, LoaderSize } from './types';

import { Theme } from '@/theme';
import { DeepPartial } from '@/utility-types/DeepPartial';

export type LoaderProps = {
  appearance?: LoaderAppearance;
  size?: LoaderSize;
  progress?: number;
  shape: 'circle' | 'bar';
  custom?: DeepPartial<SystemProps<Theme> & typeof config>;
};

export type ProgressCircleProps = Omit<LoaderProps, 'shape'>;
export type ProgressBarProps = Omit<LoaderProps, 'shape'>;
