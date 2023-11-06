import {
  FC,
  KeyboardEventHandler,
  MouseEventHandler,
  useCallback,
  useMemo,
  useRef,
} from 'react';

import { stylesBuilder } from './stylesBuilder';
import { TagProps } from './Tag.props';
import { Avatar } from '../Avatar';
import { IconButton } from '../IconButton';

import { tet } from '@/tetrisly';
import { MarginProps } from '@/types';

const KEYBOARD_KEYS = {
  Enter: 'Enter',
  Space: ' ',
};

export const Tag: FC<TagProps & MarginProps> = ({
  label,
  state,
  beforeComponent,
  onClick,
  onCloseClick,
  custom,
  ...restProps
}) => {
  const hasCloseButton = !!onCloseClick;
  const hasOnClick = !!onClick;
  const styles = useMemo(
    () => stylesBuilder(custom, hasOnClick),
    [custom, hasOnClick],
  );

  const containerRef = useRef<HTMLSpanElement | null>(null);
  const handleOnKeyDown: KeyboardEventHandler<HTMLSpanElement> = useCallback(
    (e) => {
      if (
        e.target === containerRef.current &&
        (e.key === KEYBOARD_KEYS.Enter || e.key === KEYBOARD_KEYS.Space)
      ) {
        onClick?.(e);
      }
    },
    [containerRef, onClick],
  );

  const handleOnCloseClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    (e) => {
      onCloseClick?.(e);
      e.stopPropagation();
    },
    [onCloseClick],
  );

  return (
    <tet.span
      tabIndex={0}
      ref={containerRef}
      onClick={onClick}
      onKeyDown={handleOnKeyDown}
      {...styles.container}
      data-state={state}
      data-testid="tag"
      {...restProps}
    >
      {!!beforeComponent && (
        <Avatar
          shape="square"
          size="2xSmall"
          {...beforeComponent.props}
          {...styles.avatar}
          data-testid="tag-avatar"
        />
      )}
      <tet.p
        {...styles.label}
        mr={
          hasCloseButton
            ? '$space-component-padding-xSmall'
            : '$space-component-padding-small'
        }
        data-testid="tag-label"
      >
        {label}
      </tet.p>
      {hasCloseButton && (
        <IconButton
          icon="20-close"
          variant="bare"
          onClick={handleOnCloseClick}
          state={state}
          {...styles.closeButton}
          data-testid="tag-iconButton"
        />
      )}
    </tet.span>
  );
};
