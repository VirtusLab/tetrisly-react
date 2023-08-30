import { SystemProps } from '@xstyled/styled-components';
import { SvgProperties } from 'csstype';

import type { LoaderAppearance, LoaderShape, LoaderSize } from './types';

import { BaseProps } from '@/types/BaseProps';

export type LoaderConfig = {
  size: Record<
    LoaderShape,
    Record<LoaderSize, SystemProps & Pick<SvgProperties, 'strokeWidth'>>
  >;
  appearance: Record<
    LoaderAppearance,
    Record<'base' | 'progress', SystemProps>
  >;
  svg: SystemProps;
  progress: SystemProps & Pick<SvgProperties, 'strokeLinecap'>;
} & BaseProps;

export const config = {
  size: {
    circle: {
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
    bar: {
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
  progress: {
    strokeLinecap: 'round',
  },
} satisfies LoaderConfig;
