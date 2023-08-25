import { Icon } from '@virtuslab/tetrisly-icons';
import { FC, useMemo } from 'react';

import { stylesBuilder } from './stylesBuilder';
import { ToastProps } from './Toast.props';
import { Button } from '../Button';

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
    actionStyles,
    actionContainerStyles,
    closeButtonStyles,
    containerStyles,
    iconStyles,
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
    <tet.div {...containerStyles} {...restProps}>
      {!!iconStyles.name && (
        <tet.span {...iconContainerStyles}>
          <Icon {...iconStyles} />
        </tet.span>
      )}
      {text}
      {firstAction && (
        <tet.div {...actionContainerStyles}>
          <Button {...actionStyles} {...firstAction} />
          {secondAction && (
            <>
              <tet.div {...middleDotStyles}>&middot;</tet.div>
              <Button {...actionStyles} {...secondAction} />
            </>
          )}
        </tet.div>
      )}
      {!!onCloseClick && (
        <tet.div {...closeButtonStyles}>
          <Icon name="20-close" />
        </tet.div>
      )}
    </tet.div>
  );
};
