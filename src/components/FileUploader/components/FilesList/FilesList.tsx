import { FC } from 'react';

import { FilesListProps } from './FilesList.props';
import { stylesBuilder } from './stylesBuilder';

import { FileItem } from '@/components/FileItem';
import { tet } from '@/tetrisly';

export const FilesList: FC<FilesListProps> = ({ custom, files }) => {
  const styles = stylesBuilder(custom);

  return (
    <tet.div {...styles.container}>
      {files.map((file) => (
        <tet.div key={`${file.name}-${file.size}`}>
          <FileItem
            file={file}
            state="uploading"
            isInverted={false}
            isExtended={false}
          />
        </tet.div>
      ))}
    </tet.div>
  );
};
