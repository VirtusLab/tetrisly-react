import { InputHTMLAttributes } from 'react';

import { FileUploaderConfig } from './FileUploader.styles';

import { HelperTextProps } from '@/components/HelperText';
import { LabelProps } from '@/components/Label';
import { IconName } from '@/utility-types/IconName';

export type FileUploaderProps = {
  custom?: FileUploaderConfig;
  label?: LabelProps;
  helperText?: HelperTextProps;
  multiple?: boolean;
  state?: 'default' | 'alert' | 'disabled';
} & (DragAndDropVariant | ButtonVariant) &
  InputHTMLAttributes<HTMLInputElement>;

type DragAndDropVariant = {
  variant: 'drag&drop';
  isExtended?: boolean;
  icon?: IconName<20>;
  text?: string;
  caption?: string;
};

type ButtonVariant = {
  variant: 'button';
};
