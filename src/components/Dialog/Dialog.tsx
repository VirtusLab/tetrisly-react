import { Icon } from '@virtuslab/tetrisly-icons';
import { Props } from '@xstyled/styled-components';
import { FC, useMemo } from 'react';

import { AdditionalElementWrapper } from './AdditionalElementWrapper';
import { DialogProps } from './Dialog.props';
import { stylesBuilder } from './stylesBuilder';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import { IconButton } from '../IconButton';

import { tet } from '@/tetrisly';

export const Dialog: FC<DialogProps> = ({
  actions,
  children,
  content,
  onCloseClick,
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
  const hasCloseIcon = !!onCloseClick;
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
          {hasCloseIcon && (
            <tet.span {...styles.closeIcon} data-testid="dialog-close-icon">
              <IconButton
                icon="20-close"
                variant="ghost"
                onClick={onCloseClick}
              />
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
            <AdditionalElementWrapper>{children}</AdditionalElementWrapper>
          )}
          {actions &&
            actions.map((action, index) => {
              const appearance =
                index !== 0 || actions.length === 1 ? 'primary' : 'secondary';
              const buttonIntent =
                intent === 'destructive' && index === 1
                  ? 'destructive'
                  : 'none';
              return (
                <Button
                  key={action.label}
                  appearance={appearance}
                  intent={buttonIntent}
                  {...action}
                />
              );
            })}
        </tet.div>
      )}
    </tet.div>
  );
};

const DialogBase = Dialog as Props;
DialogBase.Item = Button || Checkbox;
