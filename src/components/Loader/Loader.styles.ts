import { SystemProps } from '@xstyled/styled-components';

import type { LoaderAppearance } from './types';

import { Theme } from '@/theme';
import { DeepPartial } from '@/utility-types/DeepPartial';

type Config = {
  size: Record<'circle' | 'bar', Record<LoaderSize, any>>;
  appearance: Record<
    LoaderAppearance,
    Record<'base' | 'progress', SystemProps>
  >;
  svg: SystemProps;
  base: Record<'circle' | 'bar', SystemProps>;
  progress: Record<'circle' | 'bar', SystemProps>;
  custom?: DeepPartial<SystemProps<Theme> & typeof config>;
};

export const config = {
  size: {
    circle: {
      large: {
        width: 48,
        height: 48,
      },
      medium: {
        width: 32,
        height: 32,
      },
      small: {
        width: 20,
        height: 20,
      },
    },
    bar: {
      large: {
        width: 128,
        height: 8,
      },
      medium: {
        width: 128,
        height: 6,
      },
      small: {
        width: 128,
        height: 4,
      },
    },
  },
  appearance: {
    primary: {
      base: {
        stroke: 'interaction-neutral-subtle-normal',
      },
      progress: {
        stroke: 'interaction-default-normal',
      },
    },
    inverted: {
      base: {
        stroke: 'interaction-inverted-normal',
      },
      progress: {
        stroke: 'interaction-default-normal',
      },
    },
    white: {
      base: {
        stroke: 'interaction-inverted-normal',
        opacity: 0.4,
      },
      progress: {
        stroke: 'interaction-inverted-normal',
      },
    },
    greyscale: {
      base: {
        stroke: 'interaction-neutral-subtle-normal',
      },
      progress: {
        stroke: 'interaction-neutral-normal',
      },
    },
  },
  svg: {
    xmlns: 'http://www.w3.org/2000/svg',
    fill: 'none',
    borderRadius: 'large',
  },
  base: {
    circle: {
      strokeWidth: 2,
      strokeLinecap: 'round',
    },
    bar: {
      strokeWidth: 8,
      strokeLinecap: 'round',
    },
  },
  progress: {
    circle: {
      strokeWidth: 2,
      strokeLinecap: 'round',
    },
    bar: {
      strokeWidth: 8,
      strokeLinecap: 'round',
    },
  },
} as const satisfies Omit<SystemProps<Theme>, 'appearance'> & Config;
