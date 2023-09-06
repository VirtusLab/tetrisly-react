import { Icon } from '@virtuslab/tetrisly-icons';
import type { MarginProps } from '@xstyled/styled-components';
import { FC, useMemo } from 'react';

import type { InlineBannerProps } from './InlineBanner.props';
import { resolveIconName } from './InlineBanner.styles';
import { stylesBuilder } from './stylesBuilder';
import { Button } from '../Button';
import { IconButton } from '../IconButton';

import { useAction } from '@/hooks';
import { tet } from '@/tetrisly/tetrisly';

export const InlineBanner: FC<InlineBannerProps & MarginProps> = ({
  title,
  description,
  intent = 'none',
  action,
  onCloseClick,
  custom,
  ...restProps
}) => {
  const styles = useMemo(
    () => stylesBuilder({ intent, hasCloseButton: !!onCloseClick, custom }),
    [intent, onCloseClick, custom],
  );

  const [firstAction, secondAction] = useAction(action);

  const iconName = useMemo(() => resolveIconName(intent), [intent]);

  return (
    <tet.div {...styles.container} {...restProps} data-testid="inline-banner">
      <tet.span {...styles.iconContainer}>
        <Icon name={iconName} />
      </tet.span>
      <tet.div {...styles.contentContainer}>
        <tet.span {...styles.title}>{title}</tet.span>
        {!!description && (
          <tet.span {...styles.description}>{description}</tet.span>
        )}
        {firstAction && (
          <tet.div
            {...styles.actionContainer}
            data-testid="inline-banner-actionContainer"
          >
            <Button
              variant="default"
              appearance="secondary"
              intent="none"
              size="small"
              {...firstAction}
            />
            {secondAction && (
              <Button
                variant="ghost"
                appearance="secondary"
                intent="none"
                size="small"
                {...secondAction}
              />
            )}
          </tet.div>
        )}
      </tet.div>
      {!!onCloseClick && (
        <IconButton
          size="small"
          variant="ghost"
          intent="none"
          icon="20-close"
          onClick={onCloseClick}
          {...styles.closeButton}
          data-testid="alert-banner-closeButton"
        />
      )}
    </tet.div>
  );
};
