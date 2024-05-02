import { FC } from 'react';

import { DragAndDropFieldProps } from './DragAndDropField.props';
import { stylesBuilder } from './stylesBuilder';

import { Button } from '@/components/Button';
import { Icon } from '@/components/Icon';
import { tet } from '@/tetrisly';

const enableReceivingFocus = { tabIndex: 0 };
const noop = () => {};

export const DragAndDropField: FC<DragAndDropFieldProps> = (props) => {
  const {
    isExtended = false,
    icon = '20-upload',
    text = (onChooseFileClick) => (
      <>
        Drag & Drop or
        <Button
          appearance="primary"
          variant="bare"
          custom={{
            bare: {
              outline: {
                focus: 'none',
              },
            },
          }}
          onClick={onChooseFileClick}
        >
          Choose file
        </Button>
        to upload
      </>
    ),
    caption = 'JPG, GIF or PNG. Max size of 800K',
    state,
    onChooseFileClick,
  } = props;

  const styles = stylesBuilder(props);

  const withDisabledStyles = state !== 'disabled' ? enableReceivingFocus : {};

  return (
    <tet.div {...styles.container} {...withDisabledStyles}>
      <tet.div {...styles.icon}>
        <Icon name={icon} />
      </tet.div>

      <tet.div {...styles.title}>{text(onChooseFileClick ?? noop)}</tet.div>

      {isExtended && <tet.div {...styles.description}>{caption}</tet.div>}
    </tet.div>
  );
};
