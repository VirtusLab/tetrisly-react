import { FC } from 'react';

import { ExtendedVariantProps } from './ExtendedVariant.props';
import { stylesBuilder } from './stylesBuilder';
import { formatFileSize } from '../../utils';
import { ProgressBar } from '../ProgressBar';

import { Button } from '@/components/Button';
import { Icon } from '@/components/Icon';
import { IconButton } from '@/components/IconButton';
import { tet } from '@/tetrisly';

export const ExtendedVariant: FC<ExtendedVariantProps> = ({
  custom,
  state,
  file,
  isInverted,
  uploadedPercentage,
  timeLeftText,
  alertText,
  onReplaceClick,
  onRetryClick,
  onCloseClick,
}) => {
  const styles = stylesBuilder(custom);

  const formattedFileSize = formatFileSize(file.size);

  const progressBar = (
    <ProgressBar
      isInverted={isInverted}
      progressPercentage={uploadedPercentage}
    />
  );

  const replaceButton = (
    <Button
      variant="bare"
      appearance="primary"
      label="Replace"
      onClick={onReplaceClick}
    />
  );

  const retryButton = (
    <Button
      intent="destructive"
      variant="bare"
      appearance="primary"
      label="Retry"
      onClick={onRetryClick}
    />
  );

  const closeIconButton = (
    <IconButton icon="20-close" variant="bare" onClick={onCloseClick} />
  );

  return (
    <tet.div {...styles.container}>
      <tet.div
        display="flex"
        flexDirection="column"
        gap="$space-component-gap-xSmall"
      >
        <tet.div display="flex" justifyContent="space-between">
          <tet.div {...styles.fileName}>{file.name}</tet.div>

          <tet.div
            display="flex"
            gap="$space-component-gap-large"
            alignItems="center"
          >
            {state === 'replaceable' && onReplaceClick && (
              <tet.div {...styles.replaceableContent}>{replaceButton}</tet.div>
            )}

            {state === 'alert' && onRetryClick && (
              <tet.div {...styles.alertContent}>{retryButton}</tet.div>
            )}

            <tet.div {...styles.closeIconButton}>{closeIconButton}</tet.div>
          </tet.div>
        </tet.div>

        <tet.div display="flex" justifyContent="space-between">
          <tet.div>
            {state !== 'alert' && (
              <tet.span {...styles.fileSize}>{formattedFileSize}</tet.span>
            )}

            {state === 'uploading' && timeLeftText !== undefined && (
              <tet.span {...styles.timeLeft}>
                {timeLeftText && ` • ${timeLeftText}`}
              </tet.span>
            )}
          </tet.div>

          {state === 'uploading' && uploadedPercentage !== undefined && (
            <tet.div {...styles.uploadedPercentage}>
              {uploadedPercentage}%
            </tet.div>
          )}
        </tet.div>
      </tet.div>

      {state === 'uploading' && <tet.div>{progressBar}</tet.div>}

      {state === 'alert' && (
        <tet.div {...styles.alert}>
          {alertText !== undefined && (
            <>
              <Icon
                name="16-alert-full"
                color="$color-content-negative-secondary"
              />{' '}
              {alertText}
            </>
          )}

          <tet.div {...styles.fileSizeAlert}> • {formattedFileSize}</tet.div>
        </tet.div>
      )}
    </tet.div>
  );
};
