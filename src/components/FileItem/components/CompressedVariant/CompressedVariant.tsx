import { FC } from 'react';

import { CompressedVariantProps } from './CompressedVariant.props';
import { stylesBuilder } from './stylesBuilder';
import { formatFileSize } from '../../utils';
import { ProgressBar } from '../ProgressBar';

import { Button } from '@/components/Button';
import { Icon } from '@/components/Icon';
import { IconButton } from '@/components/IconButton';
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
    <tet.div {...styles.container}>
      <tet.div {...styles.fileInfo}>
        {state === 'alert' && (
          <Icon
            name="20-alert-fill"
            color="$color-content-negative-secondary"
          />
        )}

        <tet.div {...styles.fileName}>{file.name}</tet.div>
        <tet.div {...styles.fileSize}>{formattedFileSize}</tet.div>

        <tet.div {...styles.content}>
          {state === 'uploading' && (
            <tet.div {...styles.uploadingContent}>
              <ProgressBar
                isInverted={isInverted}
                progressPercentage={uploadedPercentage}
              />
            </tet.div>
          )}

          {state === 'replaceable' && onReplaceClick && (
            <tet.div {...styles.replaceableContent}>
              <Button
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
          <IconButton icon="20-close" variant="bare" onClick={onCloseClick} />
        </tet.div>
      </tet.div>

      {state === 'alert' && alertText !== undefined && (
        <tet.div {...styles.notExtendedAlert}>{alertText}</tet.div>
      )}
    </tet.div>
  );
};
