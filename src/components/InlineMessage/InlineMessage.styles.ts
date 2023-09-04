import { InlineMessageIntent } from './InlineMessageIntent.type';

import { BaseProps } from '@/types/BaseProps';
import { IconName } from '@/utility-types/IconName';

export type InlineMessageConfig = {
  innerElements: {
    title: {
      intent: Record<InlineMessageIntent, BaseProps>;
    } & BaseProps;
    icon: {
      intent: Record<InlineMessageIntent, { name: IconName<20> }>;
    };
    iconContainer: {
      intent: Record<InlineMessageIntent, BaseProps>;
    } & BaseProps;
    description: BaseProps;
  };
} & BaseProps;

export const config = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: 'component-gap-small',
  text: 'medium-175',
  innerElements: {
    title: {
      marginRight: 'component-gap-small',
      intent: {
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
    icon: {
      intent: {
        informative: {
          name: '20-info-fill',
        },
        success: {
          name: '20-check-circle-fill',
        },
        warning: {
          name: '20-warning-fill',
        },
        negative: {
          name: '20-alert-fill',
        },
      },
    },
    iconContainer: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 'xSmall',
      intent: {
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
    description: {
      color: 'content-secondary',
      display: 'inline-block',
    },
  },
} as const satisfies InlineMessageConfig;
