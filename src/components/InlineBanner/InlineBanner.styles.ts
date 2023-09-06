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
  p: 'component-padding-xLarge',
  gap: 'component-gap-large',
  borderRadius: 'large',
  ring: 'small',
  ringInset: true,
  intent: {
    none: {
      backgroundColor: 'background-neutral-subtle',
      ringColor: 'border-neutral-subtle',
    },
    informative: {
      backgroundColor: 'background-informative-subtle',
      ringColor: 'border-informative-subtle',
    },
    success: {
      backgroundColor: 'background-positive-subtle',
      ringColor: 'border-positive-subtle',
    },
    warning: {
      backgroundColor: 'background-warning-subtle',
      ringColor: 'border-warning-subtle',
    },
    negative: {
      backgroundColor: 'background-negative-subtle',
      ringColor: 'border-negative-subtle',
    },
  },
  innerElements: {
    iconContainer: {
      h: 'xSmall',
      display: 'flex',
      alignItems: 'center',
      intent: {
        none: {
          color: 'content-secondary',
        },
        informative: {
          color: 'content-informative-secondary',
        },
        success: {
          color: 'content-positive-secondary',
        },
        warning: {
          color: 'content-warning-secondary',
        },
        negative: {
          color: 'content-negative-secondary',
        },
      },
    },
    contentContainer: {
      display: 'flex',
      flexDirection: 'column',
    },
    actionContainer: {
      display: 'flex',
      gap: 'component-gap-small',
      mt: 'component-gap-large',
    },
    description: {
      color: 'content-secondary',
      text: 'body-medium',
    },
    title: {
      text: 'body-strong-medium',
      mb: 'component-gap-xSmall',
      intent: {
        none: {
          color: 'content-primary',
        },
        informative: {
          color: 'content-informative-primary',
        },
        success: {
          color: 'content-positive-primary',
        },
        warning: {
          color: 'content-warning-primary',
        },
        negative: {
          color: 'content-negative-primary',
        },
      },
    },
    closeButton: {
      ml: 'auto',
    },
  },
  spacing: {
    closeButton: {
      pr: 'component-padding-large',
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
