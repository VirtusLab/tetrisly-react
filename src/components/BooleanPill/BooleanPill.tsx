import { Icon } from '@virtuslab/tetrisly-icons';
import { MouseEventHandler, useCallback, useMemo, type FC } from 'react';

import { BooleanPillProps } from './BooleanPill.props';
import { stylesBuilder } from './stylesBuilder';
import { Avatar } from '../Avatar';

import { tet } from '@/tetrisly';

export const BooleanPill: FC<BooleanPillProps> = ({
  state = 'default',
  isInverted = false,
  avatar,
  text,
  custom,
  onChange,
  ...rest
}) => {
  const styles = useMemo(
    () => stylesBuilder(state, isInverted, custom),
    [custom, isInverted, state],
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

  const handleOnClick: MouseEventHandler<HTMLSpanElement> = useCallback(() => {
    if (state !== 'disabled') {
      onChange?.(state === 'default');
    }
  }, [onChange, state]);

  return (
    <tet.span
      data-state={state}
      onClick={handleOnClick}
      data-testid="boolean-pill"
      {...styles.container}
      {...rest}
    >
      {state === 'selected' && (
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
