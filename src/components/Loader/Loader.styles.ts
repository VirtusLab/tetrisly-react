import { SvgProperties } from 'csstype';

import type { LoaderAppearance, LoaderShape, LoaderSize } from './types';

import { BaseProps } from '@/types/BaseProps';

export type SVGProps = BaseProps &
  Pick<SvgProperties, 'strokeWidth' | 'strokeLinecap'>;

export type LoaderConfig = {
  shape?: Partial<
    Record<LoaderShape, { size?: Partial<Record<LoaderSize, SVGProps>> }>
  >;
  innerElements?: {
    base?: {
      appearance?: Partial<Record<LoaderAppearance, BaseProps>>;
    } & SVGProps;
    progress?: {
      appearance?: Partial<Record<LoaderAppearance, BaseProps>>;
    } & SVGProps;
  };
} & BaseProps;

export const defaultConfig = {
  fill: 'none',
  borderRadius: 'large',
  shape: {
    circle: {
      size: {
        large: {
          w: 48,
          h: 48,
          strokeWidth: '2',
        },
        medium: {
          w: 32,
          h: 32,
          strokeWidth: '2',
        },
        small: {
          w: 20,
          h: 20,
          strokeWidth: '2',
        },
      },
    },
    bar: {
      size: {
        large: {
          w: 128,
          h: 8,
          strokeWidth: '8',
        },
        medium: {
          w: 128,
          h: 6,
          strokeWidth: '6',
        },
        small: {
          w: 128,
          h: 4,
          strokeWidth: '4',
        },
      },
    },
  },
  innerElements: {
    base: {
      appearance: {
        primary: {
          stroke: 'interaction-neutral-subtle-normal',
        },
        inverted: {
          stroke: 'interaction-inverted-normal',
        },
        white: {
          stroke: 'interaction-inverted-normal',
          opacity: 0.4,
        },
        greyscale: {
          stroke: 'interaction-neutral-subtle-normal',
        },
      },
    },
    progress: {
      strokeLinecap: 'round',
      appearance: {
        primary: {
          stroke: 'interaction-default-normal',
        },
        inverted: {
          stroke: 'interaction-default-normal',
        },
        white: {
          stroke: 'interaction-inverted-normal',
        },
        greyscale: {
          stroke: 'interaction-neutral-normal',
        },
      },
    },
  },
} satisfies LoaderConfig;
