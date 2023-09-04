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

export const config = {
  position: 'relative',
  display: 'inline-flex',
  origin: {
    top: {
      align: {
        start: {
          transform: 'translate(0%, -100%)',
          left: '50%',
        },
        center: {
          transform: 'translate(-50%, -100%)',
          left: '50%',
        },
        end: {
          transform: 'translate(-100%, -100%)',
          left: '50%',
        },
      },
    },
    bottom: {
      align: {
        start: {
          transform: 'translate(0%, 100%)',
          left: '50%',
        },
        center: {
          transform: 'translate(-50%, 100%)',
          left: '50%',
        },
        end: {
          transform: 'translate(-100%, 100%)',
          left: '50%',
        },
      },
    },
    left: {
      align: {
        start: {
          transform: 'translate(-100%, 0%)',
          top: '50%',
        },
        center: {
          transform: 'translate(-100%, -50%)',
          top: '50%',
        },
        end: {
          transform: 'translate(-100%, -100%)',
          top: '50%',
        },
      },
    },
    right: {
      align: {
        start: {
          transform: 'translate(100%, 0%)',
          top: '50%',
        },
        center: {
          transform: 'translate(100%, -50%)',
          top: '50%',
        },
        end: {
          transform: 'translate(100%, -100%)',
          top: '50%',
        },
      },
    },
  },
  innerElements: {
    content: {
      position: 'absolute',
      text: 'body-medium',
      color: 'content-secondary',
      padding: 'component-padding-large',
      ring: 'focus',
      ringColor: 'border-defaultA',
      boxShadow: 'bottom-300',
      backgroundColor: 'interaction-background-modeless',
      borderRadius: 'large',
      zIndex: 1000,
      transition: true,
      transitionDuration: 200,
    },
  },
} satisfies PopoverConfig;
