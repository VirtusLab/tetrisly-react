import { Icon } from '@virtuslab/tetrisly-icons';
import { FC, useMemo } from 'react';

import { DialogProps } from './Dialog.props';
import { stylesBuilder } from './stylesBuilder';
import { Button } from '../Button';
import { IconButton } from '../IconButton';

import { tet } from '@/tetrisly';

export const Dialog: FC<DialogProps> = ({
  actions,
  children,
  content,
  hasCloseButton = true,
  size = 'small',
  title = '',
  footer = 'decision',
  intent = 'none',
  custom,
  ...restProps
}) => {
  const styles = useMemo(
    () => stylesBuilder(size, footer, intent, custom),
    [size, footer, intent, custom],
  );
  const hasChildren = !!children;
  const hasIntentIcon = intent !== 'none';
  const intentIconName =
    intent === 'destructive' ? '20-alert-fill' : '20-warning-fill';

  return (
    <tet.div {...styles.container} data-testid="dialog" {...restProps}>
      <tet.div {...styles.header} data-testid="dialog-header">
        <tet.span
          {...styles.titleContainer}
          data-testid="dialog-title-container"
        >
          {hasIntentIcon && (
            <tet.span {...styles.intentIcon} data-testid="dialog-intent-icon">
              <Icon name={intentIconName} />
            </tet.span>
          )}
          <tet.span {...styles.title} data-testid="dialog-title">
            {title}
          </tet.span>
          {hasCloseButton && (
            <tet.span {...styles.closeIcon} data-testid="dialog-close-icon">
              <IconButton icon="20-close" variant="ghost" />
            </tet.span>
          )}
        </tet.span>
      </tet.div>
      <tet.div {...styles.content} data-testid="dialog-content">
        {content}
      </tet.div>
      {actions && (
        <tet.div data-testid="dialog-footer" {...styles.footer}>
          {hasChildren && footer !== 'steps' && (
            <>
              <tet.div
                {...styles.additionalChild}
                data-testid="dialog-additional-child"
              >
                {children}
              </tet.div>
              <tet.div {...styles.emptyDiv} />
            </>
          )}
          {actions.map((action) => (
            <Button key={action.label} {...action} />
          ))}
        </tet.div>
      )}
    </tet.div>
  );
};
