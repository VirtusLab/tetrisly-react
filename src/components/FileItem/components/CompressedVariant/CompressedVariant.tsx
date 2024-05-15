import { FC } from 'react';

import { CompressedVariantProps } from './CompressedVariant.props';
import { stylesBuilder } from './stylesBuilder';
import { ProgressBar } from '../ProgressBar';

import { Button } from '@/components/Button';
import { Icon } from '@/components/Icon';
import { IconButton } from '@/components/IconButton';
import { formatFileSize } from '@/services';
import { tet } from '@/tetrisly';

export const CompressedVariant: FC<CompressedVariantProps> = ({
  custom,
  state,
  file,
  isInverted,
  uploadedPercentage,
  alertText,
  onReplaceClick,
  onRetryClick,
  onCloseClick,
}) => {
  const styles = stylesBuilder(custom);
  const formattedFileSize = formatFileSize(file.size);

  return (
    <tet.div data-testid="file-item-compressed" {...styles.container}>
      <tet.div {...styles.fileInfo}>
        {state === 'alert' && (
          <Icon
            data-testid="alert-icon"
            name="20-alert-fill"
            {...styles.alertIcon}
          />
        )}

        <tet.div data-testid="file-name" {...styles.fileName}>
          {file.name}
        </tet.div>
        <tet.div data-testid="file-size" {...styles.fileSize}>
          {formattedFileSize}
        </tet.div>

        <tet.div {...styles.content}>
          {state === 'uploading' && (
            <tet.div data-testid="progress-bar" {...styles.uploadingContent}>
              <ProgressBar
                custom={styles.progressBar}
                isInverted={isInverted}
                progressPercentage={uploadedPercentage}
              />
            </tet.div>
          )}

          {state === 'replaceable' && onReplaceClick && (
            <tet.div {...styles.replaceableContent}>
              <Button
                custom={{ bare: { padding: 0 } }}
                data-testid="replaceable-button"
                variant="bare"
                appearance="primary"
                label="Replace"
                onClick={onReplaceClick}
              />
            </tet.div>
          )}

          {state === 'alert' && onRetryClick && (
            <tet.div {...styles.alertContent}>
              <Button
                custom={{ bare: { padding: 0 } }}
                data-testid="retry-button"
                intent="destructive"
                variant="bare"
                appearance="primary"
                label="Retry"
                onClick={onRetryClick}
              />
            </tet.div>
          )}
        </tet.div>

        <tet.div {...styles.closeIconButton}>
          <IconButton
            data-testid="close-icon"
            icon="20-close"
            variant="bare"
            onClick={onCloseClick}
          />
        </tet.div>
      </tet.div>

      {state === 'alert' && alertText !== undefined && (
        <tet.div data-testid="alert-text" {...styles.notExtendedAlert}>
          {alertText}
        </tet.div>
      )}
    </tet.div>
  );
};
