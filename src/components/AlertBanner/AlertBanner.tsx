import { Icon } from '@virtuslab/tetrisly-icons';
import { FC, useMemo } from 'react';

import { AlertBannerProps } from './AlertBanner.props';
import { resolveIconName } from './AlertBanner.styles';
import { stylesBuilder } from './stylesBuilder';
import { Button } from '../Button';
import { IconButton } from '../IconButton';

import { tet } from '@/tetrisly';
import { MarginProps } from '@/types';

export const AlertBanner: FC<AlertBannerProps & MarginProps> = ({
  text,
  intent = 'none',
  custom,
  action,
  onCloseClick,
  ...restProps
}) => {
  const styles = useMemo(() => stylesBuilder(intent, custom), [intent, custom]);
  const name = resolveIconName(intent);

  const [firstAction, secondAction] = Array.isArray(action)
    ? action
    : [action, undefined];

  return (
    <tet.div {...styles.container} data-testid="alert-banner" {...restProps}>
      <tet.span
        {...styles.iconContainer}
        data-testid="alert-banner-iconContainer"
      >
        <Icon name={name} />
      </tet.span>
      {text}
      {firstAction && (
        <tet.div
          {...styles.actionContainer}
          data-testid="alert-banner-actionContainer"
        >
          <Button variant="bare" {...styles.actionProps} {...firstAction} />
          {secondAction && (
            <>
              <tet.div>&middot;</tet.div>
              <Button
                variant="bare"
                {...styles.actionProps}
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
          {...styles.closeButton}
          {...styles.closeButtonProps}
          data-testid="alert-banner-closeButton"
        />
      )}
    </tet.div>
  );
};
