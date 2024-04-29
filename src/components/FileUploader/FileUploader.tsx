import { FC } from 'react';

import { DragAndDropField } from './components';
import { FileUploaderProps } from './FileUploader.props';
import { stylesBuilder } from './stylesBuilder';

import { HelperText } from '@/components/HelperText';
import { Label } from '@/components/Label';
import { tet } from '@/tetrisly';

export const FileUploader: FC<FileUploaderProps> = ({
  custom,
  label,
  helperText,
}) => {
  const styles = stylesBuilder(custom);

  return (
    <tet.div {...styles.container}>
      {label && (
        <tet.div>
          <Label {...label} />
        </tet.div>
      )}

      <tet.div>
        <DragAndDropField custom={styles.dragAndDropField} />
      </tet.div>

      {helperText && (
        <tet.div>
          <HelperText {...helperText} />
        </tet.div>
      )}
    </tet.div>
  );
};
