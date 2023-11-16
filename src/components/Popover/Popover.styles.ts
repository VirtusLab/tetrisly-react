import { PopoverAlign, PopoverOrigin } from './types';

import { BaseProps } from '@/types/BaseProps';

export type PopoverConfig = {
  origin?: Partial<
    Record<PopoverOrigin, { align: Partial<Record<PopoverAlign, BaseProps>> }>
  >;
  innerElements?: {
    content?: BaseProps;
  };
} & BaseProps;

export const defaultConfig = {
  position: 'relative',
  display: 'inline-flex',
  origin: {
    top: {
      align: {
        start: {
          transform: 'translate(0%, -100%) translateZ(0)',
          left: '50%',
        },
        center: {
          transform: 'translate(-50%, -100%) translateZ(0)',
          left: '50%',
        },
        end: {
          transform: 'translate(-100%, -100%) translateZ(0)',
          left: '50%',
        },
      },
    },
    bottom: {
      align: {
        start: {
          transform: 'translate(0%, 100%) translateZ(0)',
          left: '50%',
        },
        center: {
          transform: 'translate(-50%, 100%) translateZ(0)',
          left: '50%',
        },
        end: {
          transform: 'translate(-100%, 100%) translateZ(0)',
          left: '50%',
        },
      },
    },
    left: {
      align: {
        start: {
          transform: 'translate(-100%, 0%) translateZ(0)',
          top: '50%',
        },
        center: {
          transform: 'translate(-100%, -50%) translateZ(0)',
          top: '50%',
        },
        end: {
          transform: 'translate(-100%, -100%) translateZ(0)',
          top: '50%',
        },
      },
    },
    right: {
      align: {
        start: {
          transform: 'translate(100%, 0%) translateZ(0)',
          top: '50%',
        },
        center: {
          transform: 'translate(100%, -50%) translateZ(0)',
          top: '50%',
        },
        end: {
          transform: 'translate(100%, -100%) translateZ(0)',
          top: '50%',
        },
      },
    },
  },
  innerElements: {
    content: {
      position: 'absolute',
      text: '$typo-body-medium',
      color: '$color-content-secondary',
      padding: '$space-component-padding-large',
      ring: '$border-width-small',
      ringColor: '$color-border-defaultA',
      boxShadow: '$elevation-bottom-300',
      backgroundColor: '$color-interaction-background-modeless',
      borderRadius: '$border-radius-large',
      zIndex: 1000,
      transition: true,
      transitionDuration: 200,
    },
  },
} satisfies PopoverConfig;

export const popoverStyles = {
  defaultConfig,
};
