import { DragAndDropFieldConfig } from './DragAndDropField.styles';

export type DragAndDropFieldState =
  | 'normal'
  | 'hover'
  | 'dragover'
  | 'focus'
  | 'alert'
  | 'alertfocus'
  | 'disabled';

export type DragAndDropFieldProps = {
  hasIcon?: boolean;
  state?: DragAndDropFieldState;
  custom?: DragAndDropFieldConfig;
  extended?: boolean;
  caption?: string;
};
