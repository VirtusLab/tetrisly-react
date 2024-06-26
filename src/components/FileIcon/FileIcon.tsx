import { useMemo, type FC } from 'react';

import { FileIconProps } from './FileIcon.props';
import { stylesBuilder } from './stylesBuilder';
import { renderProperIcon } from './utils';

import { tet } from '@/tetrisly';
import type { MarginProps } from '@/types';

export const FileIcon: FC<FileIconProps & MarginProps> = ({
  iconType,
  size = 'Large',
  custom,
  ...restProps
}) => {
  const styles = useMemo(() => stylesBuilder(custom), [custom]);

  return (
    <tet.div {...styles.container} data-testid="file-icon" {...restProps}>
      {renderProperIcon(iconType, size)}
    </tet.div>
  );
};
