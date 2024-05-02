import { ReactNode, MouseEventHandler, ChangeEventHandler } from 'react';

import { FileUploaderConfig } from './FileUploader.styles';

import { HelperTextProps } from '@/components/HelperText';
import { LabelProps } from '@/components/Label';
import { IconName } from '@/utility-types/IconName';

export type FileUploaderProps = {
  custom?: FileUploaderConfig;
  label?: LabelProps;
  helperText?: HelperTextProps;
  state?: 'default' | 'alert' | 'disabled';
  variant: 'drag&drop' | 'button';
  inputProps?: InputFileProps;
  dragAndDropVariant?: DragAndDropVariantProps;
  buttonVariant?: ButtonVariantProps;
};

export type InputFileProps = {
  name?: string;
  multiple?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

export type DragAndDropVariantProps = {
  isExtended?: boolean;
  icon?: IconName<20>;
  text?: (onChooseFileClick: MouseEventHandler) => ReactNode;
  caption?: string;
};

export type ButtonVariantProps = {
  text?: string;
};
