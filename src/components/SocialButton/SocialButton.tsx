import { FC } from 'react';

import { SocialButtonProps } from './SocialButton.props';
import { socialButtonConfig } from './SocialButton.styles';
import { socials } from './socials';

import { tet } from '@/tetrisly';

export const SocialButton: FC<SocialButtonProps> = ({
  platform,
  appearance = 'primary',
}) => {
  const social = socials[platform];

  const { appearances, ...styles } = socialButtonConfig;
  const appearancesStyles = appearances[appearance] ?? {};
  return (
    <tet.button
      {...styles}
      {...appearancesStyles}
      bg={appearance === 'primary' ? social.color : 'action-inverted-normal'}
    >
      <social.Icon fill={appearance === 'primary' ? 'white' : social.color} />
      <tet.span
        color={
          appearance === 'primary'
            ? 'content-primary-inverted'
            : 'action-neutral-normal'
        }
      >
        Sign in with {platform}
      </tet.span>
    </tet.button>
  );
};
