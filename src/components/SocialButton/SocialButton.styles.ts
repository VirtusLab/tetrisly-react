import { SocialButtonProps } from './SocialButton.props';

import { BaseProps } from '@/types/BaseProps';

type SocialButtonConfig = BaseProps & {
  appearances: Partial<
    Record<Exclude<SocialButtonProps['appearance'], undefined>, BaseProps>
  >;
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
  },
  appearances: {
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
