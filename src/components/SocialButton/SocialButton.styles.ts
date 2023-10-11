import { BaseProps } from '@/types/BaseProps';

export type SocialButtonAppearance = 'primary' | 'secondary';

export type SocialButtonConfig = BaseProps & {
  appearance?: Partial<Record<SocialButtonAppearance, BaseProps>>;
};

export const defaultConfig = {
  display: 'inline-flex',
  gap: '$space-component-gap-small',
  h: '$size-medium',
  py: '$space-component-padding-small',
  pr: '$space-component-padding-large',
  pl: '$space-component-padding-medium',
  justifyContent: 'center',
  alignItems: 'center',
  flexShrink: 0,
  borderRadius: '$border-radius-large',
  boxShadow: '$elevation-bottom-100',
  opacity: {
    _: 1,
    hover: 0.8,
    active: 0.6,
    disabled: 0.5,
  },
  appearance: {
    secondary: {
      ringInset: true,
      ring: '$border-width-small',
      ringColor: {
        _: '$color-action-outline-normal',
        hover: '$color-action-outline-hover',
        active: '$color-action-outline-active',
        selected: '$color-action-outline-selected',
      },
    },
    primary: {},
  },
} satisfies SocialButtonConfig;
