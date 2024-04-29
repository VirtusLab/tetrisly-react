import { FC } from 'react';

import { DragAndDropSelectorProps } from './DragAndDropSelector.props';
import { stylesBuilder } from './stylesBuilder';

import { Icon } from '@/components/Icon';
import { tet } from '@/tetrisly';

export const DragAndDropSelector: FC<DragAndDropSelectorProps> = ({
  custom,
}) => {
  const styles = stylesBuilder(custom);

  return (
    <tet.div {...styles.container}>
      <tet.div {...styles.icon}>
        <Icon name="20-upload" />
      </tet.div>

      <tet.div {...styles.title}>Drag & Drop or Choose file to upload</tet.div>

      <tet.div {...styles.description}>
        JPG, GIF or PNG. Max size of 800K
      </tet.div>
    </tet.div>
  );
};
