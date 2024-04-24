import { Icon } from '@virtuslab/tetrisly-icons';
import { FC } from 'react';

import { CornerDialogProps } from './CornerDialog.props';
import { stylesBuilder } from './stylesBuilder';

import { Button } from '@/components/Button';
import { tet } from '@/tetrisly';

export const CornerDialog: FC<CornerDialogProps> = ({
  custom,
  intent = 'none',
  title,
  content,
  actions,
  onCloseClick,
}) => {
  const styles = stylesBuilder(custom);

  return (
    <tet.div data-testid="corner-dialog" {...styles.container}>
      {intent === 'warning' && (
        <tet.div {...styles.intentIndicator} {...styles.intentWarning}>
          <Icon name="20-warning-fill" data-testid="warning-icon" />
        </tet.div>
      )}

      {intent === 'negative' && (
        <tet.div {...styles.intentIndicator} {...styles.intentNegative}>
          <Icon name="20-alert-fill" data-testid="negative-icon" />
        </tet.div>
      )}

      <tet.div {...styles.body}>
        <tet.div data-testid="corner-dialog-header" {...styles.header}>
          <tet.div
            data-testid="corner-dialog-header-title"
            {...styles.headerTitle}
          >
            <tet.div>{title}</tet.div>
            {!!onCloseClick && (
              <tet.div
                color="$color-coolGrey--1"
                onClick={onCloseClick}
                {...styles.headerClose}
              >
                <Icon name="20-close" data-testid="close-icon" />
              </tet.div>
            )}
          </tet.div>
        </tet.div>

        <tet.div data-testid="corner-dialog-content" {...styles.content}>
          {content}
        </tet.div>

        {actions && (
          <tet.div data-testid="corner-dialog-footer" {...styles.footer}>
            {actions.map((action) => (
              <Button key={action.label} size="small" {...action} />
            ))}
          </tet.div>
        )}
      </tet.div>
    </tet.div>
  );
};
