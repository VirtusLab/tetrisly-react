import { merge } from 'lodash';
import { FC, useMemo } from 'react';

import { SocialButtonProps } from './SocialButton.props';
import { socialButtonConfig } from './SocialButton.styles';
import { socials } from './socials';

import { tet } from '@/tetrisly';
import { MarginProps } from '@/types';

type Props = SocialButtonProps & MarginProps;

export const SocialButton: FC<Props> = ({
  platform,
  appearance = 'primary',
  custom,
  state,
  content = 'Sign in with',
  ...rest
}) => {
  const social = socials[platform];

  const [appearancesStyles, styles] = useMemo(() => {
    const { appearances, ...baseStyles } = merge(socialButtonConfig, custom);
    return [appearances[appearance] ?? {}, baseStyles] as const;
  }, [appearance, custom]);
  return (
    <tet.button
      data-testid="social-button"
      {...styles}
      {...appearancesStyles}
      {...rest}
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
        {content} {platform}
      </tet.span>
    </tet.button>
  );
};
