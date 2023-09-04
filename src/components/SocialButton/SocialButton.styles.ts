import { BaseProps } from '@/types/BaseProps';

export type SocialButtonAppearance = 'primary' | 'secondary';

export type SocialButtonConfig = BaseProps & {
  appearance: Partial<Record<SocialButtonAppearance, BaseProps>>;
};

export const socialButtonConfig: SocialButtonConfig = {
  display: 'inline-flex',
  gap: 'component-gap-small',
  h: 'medium',
  py: 'component-padding-small',
  pr: 'component-padding-large',
  pl: 'component-padding-medium',
  justifyContent: 'center',
  alignItems: 'center',
  flexShrink: 0,
  borderRadius: 'large',
  boxShadow: 'bottom-100',
  opacity: {
    _: 1,
    hover: 0.8,
    active: 0.6,
    disabled: 0.5,
  },
  appearance: {
    secondary: {
      ringInset: true,
      ring: '100',
      ringColor: {
        _: 'action-outline-normal',
        hover: 'action-outline-hover',
        active: 'action-outline-active',
        selected: 'action-outline-selected',
      },
    },
  },
};
