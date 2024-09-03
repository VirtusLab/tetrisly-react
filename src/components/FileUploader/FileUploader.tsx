import { type FC, useMemo } from 'react';

import type { FileUploaderProps } from './FileUploader.props';
import { stylesBuilder } from './stylesBuilder';

import { tet } from '@/tetrisly';
import type { MarginProps } from '@/types';

export const FileUploader: FC<FileUploaderProps & MarginProps> = ({
  custom,
  ...restProps
}) => {
  const styles = useMemo(() => stylesBuilder({ custom }), [custom]);

  return (
    <tet.div {...styles.container} data-testid="file-uploader" {...restProps} />
  );
};
