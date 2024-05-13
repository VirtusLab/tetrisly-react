import { FC, ChangeEventHandler, useRef } from 'react';

import { ButtonVariant } from './ButtonVariant';
import { Control } from './components';
import { DragAndDropVariant } from './DragAndDropVariant';
import { FileUploaderProps } from './FileUploader.props';
import { stylesBuilder } from './stylesBuilder';

import { useDragOver } from '@/hooks';
import { tet } from '@/tetrisly';

const disableReceivingFocus = { tabIndex: -1 };

export const FileUploader: FC<FileUploaderProps> = ({
  custom,
  label,
  helperText,
  variant,
  state,
  inputProps,
  dragAndDropVariant,
  buttonVariant,
  value,
  onChange,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { dragOver, onDragEnter, onDragLeave, onDrop } = useDragOver();

  const styles = stylesBuilder(custom);

  const handleChooseFileClick = () => {
    inputRef.current?.click();
  };

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { files } = e.target;

    if (files) {
      onChange?.(mapFromFileList(files));
    }
  };

  return (
    <>
      <tet.input
        ref={inputRef}
        type="file"
        display="none"
        onChange={onInputChange}
        {...disableReceivingFocus}
        {...inputProps}
      />

      <tet.div {...styles.container}>
        <Control custom={styles.control} label={label} helperText={helperText}>
          {variant === 'drag&drop' && (
            <tet.div
              onDragEnter={onDragEnter}
              onDragLeave={onDragLeave}
              onDrop={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onDrop();
              }}
              onDragOver={(e) => {
                e.preventDefault();
              }}
            >
              <DragAndDropVariant
                custom={styles.dragAndDropField}
                isExtended={dragAndDropVariant?.isExtended}
                isDragOver={dragOver}
                state={state}
                icon={dragAndDropVariant?.icon}
                text={dragAndDropVariant?.text}
                caption={dragAndDropVariant?.caption}
                onChooseFileClick={handleChooseFileClick}
              />
            </tet.div>
          )}

          {variant === 'button' && (
            <ButtonVariant
              label={buttonVariant?.text}
              onChooseFileClick={handleChooseFileClick}
            />
          )}
        </Control>

        {value && value.length > 0 && (
          <tet.div>{/* <FilesList files={value} /> */}</tet.div>
        )}
      </tet.div>
    </>
  );
};

const mapFromFileList = (fileList: FileList): File[] =>
  Array.from(fileList).map((file) => file);
