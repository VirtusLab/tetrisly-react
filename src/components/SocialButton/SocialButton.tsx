import { FC, useMemo } from 'react';

import { SocialButtonProps } from './SocialButton.props';
import { socials } from './socials';
import { stylesBuilder } from './stylesBuilder';

import { tet } from '@/tetrisly';
import { MarginProps } from '@/types';

export const SocialButton: FC<SocialButtonProps & MarginProps> = ({
  platform,
  appearance = 'primary',
  custom,
  state,
  label,
  ...restProps
}) => {
  const social = socials[platform];

  const styles = useMemo(
    () => stylesBuilder(appearance, custom),
    [appearance, custom],
  );
  return (
    <tet.button
      data-testid="social-button"
      {...styles}
      {...restProps}
      disabled={['disabled', 'loading'].includes(state ?? '')}
      data-state={state}
      style={{ textUnderlineOffset: '3px', textDecorationThickness: '1px' }}
      bg={appearance === 'primary' ? social.color : 'action-inverted-normal'}
    >
      <social.Icon
        loading={state === 'loading'}
        fill={appearance === 'primary' ? 'white' : social.color}
      />

      <tet.span
        color={
          appearance === 'primary'
            ? 'content-primary-inverted'
            : 'action-neutral-normal'
        }
      >
        {label}
      </tet.span>
    </tet.button>
  );
};
