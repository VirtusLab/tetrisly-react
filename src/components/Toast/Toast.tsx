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

  console.log(closeButtonProps);

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
          <Button {...actionProps} {...firstAction} />
          {secondAction && (
            <>
              <tet.div {...middleDotStyles}>&middot;</tet.div>
              <Button {...actionProps} {...secondAction} />
            </>
          )}
        </tet.div>
      )}
      {!!onCloseClick && (
        <IconButton onClick={onCloseClick} {...closeButtonProps} />
      )}
    </tet.div>
  );
};
