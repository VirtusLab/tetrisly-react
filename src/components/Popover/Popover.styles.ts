import { PopoverAlign, PopoverOrigin } from './types';

import { BaseProps } from '@/types/BaseProps';

export type PopoverConfig = {
  origin: Record<PopoverOrigin, { align: Record<PopoverAlign, BaseProps> }>;
  innerElements: {
    content: BaseProps;
  };
} & BaseProps;

export const config = {
  position: 'relative',
  origin: {
    top: {
      align: {
        start: {
          transform: 'translate(-100%, -100%)',
          left: '50%',
          top: -16,
        },
        center: {
          transform: 'translate(-50%, -100%)',
          left: '50%',
          top: -16,
        },
        end: {
          transform: 'translate(0%, -100%)',
          left: '50%',
          top: -16,
        },
      },
    },
    bottom: {
      align: {
        start: {
          transform: 'translate(-100%, 100%)',
          left: '50%',
          bottom: -16,
        },
        center: {
          transform: 'translate(-50%, 100%)',
          left: '50%',
          bottom: -16,
        },
        end: {
          transform: 'translate(0%, 100%)',
          left: '50%',
          bottom: -16,
        },
      },
    },
    left: {
      align: {
        start: {
          transform: 'translate(-100%, -100%)',
          top: '50%',
          left: -16,
        },
        center: {
          transform: 'translate(-100%, -50%)',
          top: '50%',
          left: -16,
        },
        end: {
          transform: 'translate(-100%, 0%)',
          top: '50%',
          left: -16,
        },
      },
    },
    right: {
      align: {
        start: {
          transform: 'translate(100%, -100%)',
          top: '50%',
          right: -16,
        },
        center: {
          transform: 'translate(100%, -50%)',
          top: '50%',
          right: -16,
        },
        end: {
          transform: 'translate(100%, 0%)',
          top: '50%',
          right: -16,
        },
      },
    },
  },
  innerElements: {
    content: {
      w: '320px',
      position: 'absolute',
      text: 'body-medium',
      color: 'content-secondary',
      padding: 'component-padding-large',
      ring: 'focus',
      ringColor: 'border-defaultA',
      boxShadow: 'bottom-300',
      backgroundColor: 'interaction-background-modeless',
      borderRadius: 'large',
    },
  },
} satisfies PopoverConfig;
