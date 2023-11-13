import { ThemeColor } from '@xstyled/styled-components';
import type { Property } from 'csstype';

import type { LoaderAppearance, LoaderShape, LoaderSize } from './types';

import { Theme } from '@/theme';
import { BaseProps } from '@/types/BaseProps';

export type SVGProps = Omit<
  BaseProps,
  | 'opacity'
  | 'display'
  | 'order'
  | 'cursor'
  | 'pointerEvents'
  | 'overflow'
  | 'visibility'
  | 'fill'
  | 'transform'
  | 'rotate'
  | 'scale'
  | 'stroke'
  | 'fontFamily'
  | 'fontSize'
  | 'fontStyle'
  | 'fontStyle'
  | 'fontVariant'
  | 'fontWeight'
  | 'letterSpacing'
  | 'textDecoration'
> & {
  fill?: ThemeColor<Theme> | Property.Fill;
  strokeWidth?: Property.StrokeWidth<string | number>;
  strokeLinecap?: 'inherit' | 'round' | 'butt' | 'square';
};

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
  borderRadius: '$border-radius-large',
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
          stroke: '$color-interaction-neutral-subtle-normal',
        },
        inverted: {
          stroke: '$color-interaction-inverted-normal',
        },
        white: {
          stroke: '$color-interaction-inverted-normal',
          opacity: 0.4,
        },
        greyscale: {
          stroke: '$color-interaction-neutral-subtle-normal',
        },
      },
    },
    progress: {
      strokeLinecap: 'round',
      appearance: {
        primary: {
          stroke: '$color-interaction-default-normal',
        },
        inverted: {
          stroke: '$color-interaction-default-normal',
        },
        white: {
          stroke: '$color-interaction-inverted-normal',
        },
        greyscale: {
          stroke: '$color-interaction-neutral-normal',
        },
      },
    },
  },
} satisfies LoaderConfig;
