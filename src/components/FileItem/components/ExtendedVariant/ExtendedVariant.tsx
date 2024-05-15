import { FC } from 'react';

import { ExtendedVariantProps } from './ExtendedVariant.props';
import { stylesBuilder } from './stylesBuilder';
import { ProgressBar } from '../ProgressBar';

import { Button } from '@/components/Button';
import { Icon } from '@/components/Icon';
import { IconButton } from '@/components/IconButton';
import { formatFileSize } from '@/services';
import { tet } from '@/tetrisly';

export const ExtendedVariant: FC<ExtendedVariantProps> = ({
  custom,
  state,
  file,
  isInverted,
  thumbnail,
  uploadedPercentage,
  timeLeftText,
  alertText,
  onReplaceClick,
  onRetryClick,
  onCloseClick,
}) => {
  const styles = stylesBuilder(custom);
  const formattedFileSize = formatFileSize(file.size);

  return (
    <tet.div data-testid="file-item-extended" {...styles.container}>
      <tet.div {...styles.thumbnailWrapper}>
        {thumbnail === 'file' && (
          <tet.div data-testid="thumbnail-file" {...styles.fileThumbnail}>
            <Icon name="20-file" />
          </tet.div>
        )}

        {thumbnail === 'photo' && (
          <tet.div data-testid="thumbnail-photo" {...styles.photoThumbnail}>
            <img src={URL.createObjectURL(file)} alt={file.name} />
          </tet.div>
        )}

        <tet.div {...styles.fileDetails}>
          <tet.div {...styles.topDetails}>
            <tet.div {...styles.fileName}>{file.name}</tet.div>

            <tet.div
              display="flex"
              gap="$space-component-gap-large"
              alignItems="center"
            >
              {state === 'replaceable' && onReplaceClick && (
                <tet.div {...styles.replaceableContent}>
                  <Button
                    data-testid="replaceable-button"
                    custom={{ bare: { padding: 0 } }}
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
                    data-testid="retry-button"
                    custom={{ bare: { padding: 0 } }}
                    intent="destructive"
                    variant="bare"
                    appearance="primary"
                    label="Retry"
                    onClick={onRetryClick}
                  />
                </tet.div>
              )}

              <tet.div {...styles.closeIconButton}>
                <IconButton
                  data-testid="close-icon"
                  icon="20-close"
                  variant="bare"
                  onClick={onCloseClick}
                />
              </tet.div>
            </tet.div>
          </tet.div>

          <tet.div {...styles.bottomDetails}>
            <tet.div>
              {state !== 'alert' && (
                <tet.span data-testid="file-size" {...styles.fileSize}>
                  {formattedFileSize}
                </tet.span>
              )}

              {state === 'uploading' && timeLeftText !== undefined && (
                <tet.span
                  data-testid="uploading-time-left"
                  {...styles.timeLeft}
                >
                  {timeLeftText && (
                    <>
                      <tet.div {...styles.dot} /> {timeLeftText}
                    </>
                  )}
                </tet.span>
              )}
            </tet.div>

            {state === 'uploading' && uploadedPercentage !== undefined && (
              <tet.div
                data-testid="uploaded-percentage"
                {...styles.uploadedPercentage}
              >
                {uploadedPercentage}%
              </tet.div>
            )}
          </tet.div>

          {state === 'alert' && (
            <tet.div data-testid="alert-info" {...styles.alert}>
              {alertText !== undefined && (
                <>
                  <Icon name="16-alert-full" {...styles.alertIcon} />{' '}
                  {alertText}
                </>
              )}

              <tet.div data-testid="alert-file-size" {...styles.fileSizeAlert}>
                {' '}
                <tet.div {...styles.dot} /> {formattedFileSize}
              </tet.div>
            </tet.div>
          )}
        </tet.div>
      </tet.div>

      {state === 'uploading' && (
        <ProgressBar
          custom={styles.progressBar}
          isInverted={isInverted}
          progressPercentage={uploadedPercentage}
        />
      )}
    </tet.div>
  );
};
