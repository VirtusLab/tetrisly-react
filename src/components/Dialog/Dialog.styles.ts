import { DialogFooter, DialogIntent, DialogSize } from './types';

import { BaseProps } from '@/types';

export type DialogConfig = {
  usagePositioning?: BaseProps;
  footer?: {
    type: Record<DialogFooter, BaseProps>;
  } & BaseProps;
  closeIcon?: BaseProps;
  content?: BaseProps;
  header?: BaseProps;
  intentIcon?: Record<Partial<DialogIntent>, BaseProps>;
  size?: Record<DialogSize, BaseProps>;
  title?: BaseProps;
  titleContainer?: BaseProps;
} & BaseProps;

export const defaultConfig = {
  display: 'flex',
  flexDirection: 'column',
  padding: '$space-component-padding-2xLarge',
  borderRadius: '$border-radius-xLarge',
  gap: '$space-component-gap-xLarge',
  boxShadow: '$elevation-bottom-400',
  backgroundColor: '$color-interaction-background-modal',
  position: 'fixed',
  zIndex: 9998,
  overflowY: 'hidden',
  overflowX: 'hidden',
  left: '50%',
  top: '50%',
  transform: ' translate(-50%, -50%)',
  closeIcon: {
    color: '$color-action-neutral-normal',
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    gap: '$space-component-gap-large',
    type: {
      confirmation: {
        justifyContent: 'end',
      },
      steps: {
        justifyContent: 'space-between',
      },
      decision: {
        justifyContent: 'end',
      },
    },
  },
  size: {
    small: {
      w: '480px',
    },
    medium: {
      w: '720px',
    },
    large: {
      w: '960px',
    },
  },
  content: {
    text: '$typo-body-medium',
    color: '$color-content-secondary',
  },
  intentIcon: {
    warning: {
      color: '$color-content-warning-secondary',
    },
    destructive: {
      color: '$color-content-negative-secondary',
    },
    none: {},
  },
  header: {
    display: 'flex',
    gap: '$space-component-gap-large',
  },
  titleContainer: {
    w: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: '$space-component-gap-large',
  },
  title: {
    w: '100%',
    text: '$typo-header-xLarge',
  },
} satisfies DialogConfig;

export const dialogStyles = {
  defaultConfig,
};

export const customStyleForDocs: DialogConfig = {
  position: 'static',
  zIndex: 0,
  overflowY: 'visible',
  overflowX: 'visible',
  left: '0%',
  top: '0%',
  transform: ' translate(0%, 0%)',
};
