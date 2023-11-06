import { Icon } from '@virtuslab/tetrisly-icons';
import { FC, useMemo } from 'react';

import { stylesBuilder } from './stylesBuilder';
import type { ToastProps } from './Toast.props';
import { resolveIconName } from './Toast.styles';
import { Button } from '../Button';
import { IconButton } from '../IconButton';

import { useAction } from '@/hooks';
import { tet } from '@/tetrisly';
import type { MarginProps } from '@/types';

export const Toast: FC<ToastProps & MarginProps> = ({
  text,
  emphasis = 'low',
  intent = 'neutral',
  action,
  onCloseClick,
  custom,
  ...restProps
}) => {
  const styles = useMemo(
    () =>
      stylesBuilder({
        custom,
        emphasis,
        intent,
        onCloseClick,
      }),
    [custom, emphasis, intent, onCloseClick],
  );

  const [firstAction, secondAction] = useAction(action);

  const iconName = useMemo(() => resolveIconName(intent), [intent]);

  const appearance = useMemo(() => {
    const buttonIntentAppearance =
      intent === 'warning' ? 'reverseInverted' : 'inverted';
    return emphasis === 'high' ? buttonIntentAppearance : 'primary';
  }, [intent, emphasis]);

  return (
    <tet.div {...styles.container} data-testid="toast" {...restProps}>
      {!!iconName && (
        <tet.span {...styles.iconContainer} data-testid="toast-iconContainer">
          <Icon name={iconName} />
        </tet.span>
      )}
      {text}
      {firstAction && (
        <tet.div
          {...styles.actionContainer}
          data-testid="toast-actionContainer"
        >
          <Button variant="bare" appearance={appearance} {...firstAction} />
          {secondAction && (
            <>
              <tet.div {...styles.middleDot} data-testid="toast-middleDot">
                &middot;
              </tet.div>
              <Button
                variant="bare"
                appearance={appearance}
                {...secondAction}
              />
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
          appearance={appearance}
          {...styles.closeButton}
          data-testid="toast-closeButton"
        />
      )}
    </tet.div>
  );
};
