import { FC } from 'react';

import { FileItemProps } from './FileItem.props';
import { stylesBuilder } from './stylesBuilder';
import { formatFileSize } from './utils';

import { IconButton } from '@/components/IconButton';
import { tet } from '@/tetrisly';

export const FileItem: FC<FileItemProps> = (props) => {
  const { file, onCloseClick } = props;

  const styles = stylesBuilder(props);

  return (
    <tet.div {...styles.container}>
      <tet.div {...styles.fileName}>{file.name}</tet.div>

      <tet.div {...styles.fileSize}>{formatFileSize(file.size)}</tet.div>

      <tet.div {...styles.progressBar}>
        <tet.div {...styles.progressBarTrack}>
          <tet.div {...styles.progressBarSent} />
        </tet.div>
      </tet.div>

      <tet.div>
        <IconButton icon="20-close" variant="bare" onClick={onCloseClick} />
      </tet.div>
    </tet.div>
  );
};
