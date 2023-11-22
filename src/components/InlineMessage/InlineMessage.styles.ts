import { InlineMessageIntent } from './InlineMessageIntent.type';

import { BaseProps } from '@/types/BaseProps';
import { IconName } from '@/utility-types/IconName';

export type InlineMessageConfig = {
  innerElements?: {
    title?: {
      intent?: Partial<Record<InlineMessageIntent, BaseProps>>;
    } & BaseProps;
    iconContainer?: {
      intent?: Partial<Record<InlineMessageIntent, BaseProps>>;
    } & BaseProps;
    description?: BaseProps;
  };
} & BaseProps;

export const defaultConfig = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '$space-component-gap-small',
  text: '$typo-body-medium',
  innerElements: {
    title: {
      marginRight: '$space-component-gap-small',
      intent: {
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
    iconContainer: {
      display: 'flex',
      alignItems: 'center',
      minHeight: '$size-xSmall',
      intent: {
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
    description: {
      color: '$color-content-secondary',
      display: 'inline-block',
    },
  },
} satisfies InlineMessageConfig;

export const resolveIconName = (intent: InlineMessageIntent): IconName<20> => {
  const iconConfig: Record<InlineMessageIntent, IconName<20>> = {
    informative: '20-info-fill',
    success: '20-check-circle-fill',
    warning: '20-warning-fill',
    negative: '20-alert-fill',
  };

  return iconConfig[intent];
};

export const inlineMessageStyles = {
  defaultConfig,
};
