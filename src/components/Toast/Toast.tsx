import { Icon } from '@virtuslab/tetrisly-icons';
import { FC, useMemo } from 'react';

import { stylesBuilder } from './stylesBuilder';
import { ToastProps } from './Toast.props';
import { Button } from '../Button';
import { IconButton } from '../IconButton';

import { tet } from '@/tetrisly';
import { MarginProps } from '@/types';

type Props = ToastProps & MarginProps;

export const Toast: FC<Props> = ({
  text,
  emphasis = 'low',
  intent = 'neutral',
  action,
  onCloseClick,
  custom,
  ...restProps
}) => {
  const {
    actionProps,
    actionContainerStyles,
    closeButtonProps,
    closeButtonStyles,
    containerStyles,
    iconProps,
    iconContainerStyles,
    middleDotStyles,
  } = useMemo(
    () =>
      stylesBuilder({
        custom,
        emphasis,
        intent,
        closeButton: !!onCloseClick,
      }),
    [custom, emphasis, intent, onCloseClick],
  );

  const [firstAction, secondAction] = Array.isArray(action)
    ? action
    : [action, undefined];

  return (
    <tet.div {...containerStyles} {...restProps} data-testid="toast">
      {!!iconProps.name && (
        <tet.span {...iconContainerStyles}>
          <Icon {...iconProps} name={iconProps.name} />
        </tet.span>
      )}
      {text}
      {firstAction && (
        <tet.div {...actionContainerStyles}>
          <Button variant="bare" {...actionProps} {...firstAction} />
          {secondAction && (
            <>
              <tet.div {...middleDotStyles}>&middot;</tet.div>
              <Button variant="bare" {...actionProps} {...secondAction} />
            </>
          )}
        </tet.div>
      )}
      {!!onCloseClick && (
        <IconButton
          size="small"
          variant="ghost"
          intent="none"
          icon="20-close"
          onClick={onCloseClick}
          {...closeButtonProps}
          {...closeButtonStyles}
        />
      )}
    </tet.div>
  );
};
