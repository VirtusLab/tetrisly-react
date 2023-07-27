import { SystemProps } from '@xstyled/styled-components';

import type { LoaderAppearance, LoaderShape, LoaderSize } from './types';

import { Theme } from '@/theme';

type Config = {
  size: Record<LoaderShape, Record<LoaderSize, SystemProps>>;
  appearance: Record<
    LoaderAppearance,
    Record<'base' | 'progress', SystemProps>
  >;
  svg: SystemProps;
  base: Record<
    LoaderShape,
    SystemProps & { strokeWidth: number; strokeLinecap: string }
  >;
  progress: Record<
    LoaderShape,
    SystemProps & { strokeWidth: number; strokeLinecap: string }
  >;
};

export const config = {
  size: {
    circle: {
      large: {
        w: 48,
        h: 48,
      },
      medium: {
        w: 32,
        h: 32,
      },
      small: {
        w: 20,
        h: 20,
      },
    },
    bar: {
      large: {
        w: 128,
        h: 8,
      },
      medium: {
        w: 128,
        h: 6,
      },
      small: {
        w: 128,
        h: 4,
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
    fill: 'none',
    borderRadius: 'large',
  },
  base: {
    circle: {
      strokeWidth: 8,
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
