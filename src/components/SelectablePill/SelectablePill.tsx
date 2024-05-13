import { Icon } from '@virtuslab/tetrisly-icons';
import { MouseEventHandler, useCallback, useMemo, type FC } from 'react';

import { SelectablePillProps } from './SelectablePill.props';
import { stylesBuilder } from './stylesBuilder';
import { Avatar } from '../Avatar';

import { tet } from '@/tetrisly';

export const SelectablePill: FC<SelectablePillProps> = ({
  state = 'default',
  isSelected = false,
  isInverted = false,
  tabIndex = 0,
  beforeComponent,
  text,
  prefix,
  custom,
  onChange,
  ...rest
}) => {
  const styles = useMemo(
    () =>
      stylesBuilder({
        state,
        custom,
        prefix,
        isSelected,
        isInverted,
        beforeComponent,
      }),
    [custom, isInverted, state, beforeComponent, isSelected, prefix],
  );

  const avatarProps = useMemo(
    () =>
      beforeComponent &&
      'avatar' in beforeComponent &&
      ('image' in beforeComponent.avatar
        ? {
            img: { src: beforeComponent.avatar.image, alt: 'avatar' },
            appearance: 'image' as const,
          }
        : {
            initials: beforeComponent.avatar.initials,
            appearance: beforeComponent.avatar.appearance,
          }),

    [beforeComponent],
  );

  const iconProps = useMemo(
    () => beforeComponent && 'icon' in beforeComponent && beforeComponent.icon,
    [beforeComponent],
  );

  const handleOnClick: MouseEventHandler<HTMLSpanElement> = useCallback(() => {
    if (state !== 'disabled') {
      onChange?.(!isSelected);
    }
  }, [onChange, state, isSelected]);

  return (
    <tet.span
      tabIndex={tabIndex}
      data-state={state}
      onClick={handleOnClick}
      data-testid="selectable-pill"
      {...styles.container}
      {...rest}
    >
      {!!iconProps && (
        <tet.span {...styles.icon}>
          <Icon data-testid="selectable-pill-icon" name={iconProps} />
        </tet.span>
      )}
      <tet.div {...styles.contentContainer}>
        {!!prefix && <tet.span {...styles.prefix}>{prefix}:</tet.span>}
        {!!avatarProps && (
          <Avatar
            emphasis="low"
            shape="rounded"
            size="xSmall"
            data-testid="selectable-pill-avatar"
            {...avatarProps}
          />
        )}
        <tet.div {...styles.textContainer}>
          {text}
          <tet.span {...styles.actionIcon}>
            {isSelected ? (
              <Icon
                data-testid="selectable-pill-selected-icon"
                name="20-close"
              />
            ) : (
              <Icon
                data-testid="selectable-pill-unselected-icon"
                name="20-chevron-down-small"
              />
            )}
          </tet.span>
        </tet.div>
      </tet.div>
    </tet.span>
  );
};
