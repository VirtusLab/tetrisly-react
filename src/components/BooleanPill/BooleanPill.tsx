import { Icon } from '@virtuslab/tetrisly-icons';
import { useMemo, type FC } from 'react';

import { BooleanPillProps } from './BooleanPill.props';
import { stylesBuilder } from './stylesBuilder';
import { Avatar } from '../Avatar';

import { tet } from '@/tetrisly';

export const BooleanPill: FC<BooleanPillProps> = ({
  state = 'default',
  isSelected = false,
  isInverted = false,
  tabIndex = 0,
  avatar,
  text,
  custom,
  ...rest
}) => {
  const styles = useMemo(
    () =>
      stylesBuilder({
        state,
        custom,
        isSelected,
        isInverted,
        hasAvatar: !!avatar,
      }),
    [custom, isInverted, state, avatar, isSelected],
  );

  const avatarProps = useMemo(
    () =>
      avatar &&
      ('image' in avatar
        ? {
            img: { src: avatar.image, alt: 'avatar' },
            appearance: 'image' as const,
          }
        : {
            initials: avatar.initials,
            appearance: avatar.appearance,
          }),

    [avatar],
  );

  return (
    <tet.span
      tabIndex={tabIndex}
      data-state={state}
      data-testid="boolean-pill"
      {...styles.container}
      {...rest}
    >
      {isSelected && (
        <Icon data-testid="boolean-pill-checkmark" name="20-check-large" />
      )}
      {!!avatarProps && (
        <Avatar
          emphasis="low"
          shape="rounded"
          size="xSmall"
          data-testid="boolean-pill-avatar"
          {...avatarProps}
        />
      )}
      {text}
    </tet.span>
  );
};
