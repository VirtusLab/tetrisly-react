import { Icon } from '@virtuslab/tetrisly-icons';
import {
  ChangeEventHandler,
  DragEventHandler,
  type FC,
  MouseEventHandler,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import type { DragAndDropFieldProps } from './DragAndDropField.props';
import { stylesBuilder } from './stylesBuilder';

import { tet } from '@/tetrisly';
import type { MarginProps } from '@/types';

export const DragAndDropField: FC<DragAndDropFieldProps & MarginProps> = ({
  custom,
  extended = false,
  caption,
  hasIcon = true,
  state = 'normal',
  ...restProps
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [dragging, setDragging] = useState(false);

  const styles = useMemo(
    () => stylesBuilder({ custom, extended, state, dragging }),
    [custom, extended, state, dragging],
  );

  const onDragOver: DragEventHandler = (event) => {
    event.preventDefault();
    setDragging(true);
  };
  const onDragLeave = () => setDragging(false);

  const handleDrop: DragEventHandler = (event) => {
    event.preventDefault();
    const droppedFiles = event.dataTransfer?.files;
    if (droppedFiles && droppedFiles.length > 0) {
      const newFiles = Array.from(droppedFiles);
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
    setDragging(false);
  };
  const handleFileChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const selectedFiles = event.target.files;
    if (selectedFiles && selectedFiles.length > 0) {
      const newFiles = Array.from(selectedFiles);
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };

  const handleButtonClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    if (!inputRef || !inputRef?.current) return;

    inputRef.current.click();
  };

  useEffect(() => {
    console.log('files: ', files);
  }, [files]);

  return (
    <tet.div
      {...styles.container}
      data-testid="drag-and-drop-field"
      onDrop={handleDrop}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      {...restProps}
    >
      <input
        ref={inputRef}
        data-testid="drag-and-drop-field-input"
        type="file"
        hidden
        onChange={handleFileChange}
        accept=".png, .jpg, .jpeg, .gif"
        multiple
      />
      {hasIcon && (
        <tet.div
          {...styles.icon}
          data-testid="drag-and-drop-field-icon-container"
        >
          <Icon name="20-upload" data-testid="drag-and-drop-field-icon" />
        </tet.div>
      )}
      <tet.div {...styles.text} data-testid="drag-and-drop-field-text">
        Drag & Drop or{' '}
        <tet.span
          onClick={handleButtonClick}
          {...styles.link}
          data-testid="drag-and-drop-field-link"
        >
          Choose file
        </tet.span>{' '}
        to upload
      </tet.div>
      {extended && (
        <tet.div {...styles.caption} data-testid="drag-and-drop-field-caption">
          {caption}
        </tet.div>
      )}
    </tet.div>
  );
};
