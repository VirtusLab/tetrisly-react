import type { InlineBannerIntent } from './types';

import type { BaseProps } from '@/types';
import { IconName } from '@/utility-types/IconName';

export type InlineBannerConfig = {
  intent?: Partial<Record<InlineBannerIntent, BaseProps>>;
  innerElements?: {
    iconContainer?: {
      intent?: Partial<Record<InlineBannerIntent, BaseProps>>;
    } & BaseProps;
    contentContainer?: BaseProps;
    actionContainer?: BaseProps;
    description?: BaseProps;
    title?: {
      intent?: Partial<Record<InlineBannerIntent, BaseProps>>;
    } & BaseProps;
    closeButton?: BaseProps;
  };
  spacing?: {
    closeButton?: BaseProps;
  };
} & BaseProps;

export const defaultConfig = {
  display: 'flex',
  p: '$space-component-padding-xLarge',
  gap: '$space-component-gap-large',
  borderRadius: '$border-radius-large',
  ring: '$border-width-small',
  ringInset: true,
  intent: {
    none: {
      backgroundColor: '$color-background-neutral-subtle',
      ringColor: '$color-border-neutral-subtle',
    },
    informative: {
      backgroundColor: '$color-background-informative-subtle',
      ringColor: '$color-border-informative-subtle',
    },
    success: {
      backgroundColor: '$color-background-positive-subtle',
      ringColor: '$color-border-positive-subtle',
    },
    warning: {
      backgroundColor: '$color-background-warning-subtle',
      ringColor: '$color-border-warning-subtle',
    },
    negative: {
      backgroundColor: '$color-background-negative-subtle',
      ringColor: '$color-border-negative-subtle',
    },
  },
  innerElements: {
    iconContainer: {
      h: 'xSmall',
      display: 'flex',
      alignItems: 'center',
      intent: {
        none: {
          color: '$color-content-secondary',
        },
        informative: {
          color: '$color-content-informative-secondary',
        },
        success: {
          color: '$color-content-positive-secondary',
        },
        warning: {
          color: '$color-content-warning-secondary',
        },
        negative: {
          color: '$color-content-negative-secondary',
        },
      },
    },
    contentContainer: {
      display: 'flex',
      flexDirection: 'column',
      maxW: '90%',
    },
    actionContainer: {
      display: 'flex',
      gap: '$space-component-gap-small',
      mt: '$space-component-gap-large',
    },
    description: {
      color: '$color-content-secondary',
      text: '$typo-body-medium',
    },
    title: {
      text: '$typo-body-strong-medium',
      mb: '$space-component-gap-xSmall',
      intent: {
        none: {
          color: '$color-content-primary',
        },
        informative: {
          color: '$color-content-informative-primary',
        },
        success: {
          color: '$color-content-positive-primary',
        },
        warning: {
          color: '$color-content-warning-primary',
        },
        negative: {
          color: '$color-content-negative-primary',
        },
      },
    },
    closeButton: {
      ml: 'auto',
    },
  },
  spacing: {
    closeButton: {
      pr: '$space-component-padding-large',
    },
  },
} satisfies InlineBannerConfig;

export const resolveIconName = (intent: InlineBannerIntent): IconName<20> => {
  const iconConfig: Record<InlineBannerIntent, IconName<20>> = {
    none: '20-info-fill',
    informative: '20-info-fill',
    success: '20-check-circle-fill',
    warning: '20-warning-fill',
    negative: '20-alert-fill',
  };

  return iconConfig[intent];
};
