import { BareButtonProps } from './types/BareButtonProps.type';
import { CommonButtonProps } from './types/CommonButtonProps.type';
import { DefaultButtonProps } from './types/DefaultButtonProps.type';
import { GhostButtonProps } from './types/GhostButtonProps.type';

export type ButtonProps = CommonButtonProps &
  (DefaultButtonProps | GhostButtonProps | BareButtonProps);
