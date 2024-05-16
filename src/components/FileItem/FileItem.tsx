import { FC } from 'react';

import { CompressedVariant, ExtendedVariant } from './components';
import { FileItemProps, fallback } from './FileItem.props';
import { stylesBuilder } from './stylesBuilder';

import { tet } from '@/tetrisly';

export const FileItem: FC<FileItemProps> = (props) => {
  const {
    file,
    state = fallback.state,
    isInverted = fallback.isInverted,
    isExtended = fallback.isExtended,
    thumbnail = fallback.thumbnail,
    uploadedPercentage,
    timeLeftText,
    alertText,
    onReplaceClick,
    onRetryClick,
    onCloseClick,
  } = props;

  const styles = stylesBuilder(props);

  return (
    <tet.div data-testid="file-item" {...styles.container}>
      {!isExtended && (
        <CompressedVariant
          custom={styles.compressed}
          state={state}
          file={file}
          isInverted={isInverted}
          uploadedPercentage={uploadedPercentage}
          alertText={alertText}
          onReplaceClick={onReplaceClick}
          onRetryClick={onRetryClick}
          onCloseClick={onCloseClick}
        />
      )}

      {isExtended && (
        <ExtendedVariant
          custom={styles.extended}
          state={state}
          file={file}
          isInverted={isInverted}
          thumbnail={thumbnail}
          uploadedPercentage={uploadedPercentage}
          timeLeftText={timeLeftText}
          alertText={alertText}
          onReplaceClick={onReplaceClick}
          onRetryClick={onRetryClick}
          onCloseClick={onCloseClick}
        />
      )}
    </tet.div>
  );
};
