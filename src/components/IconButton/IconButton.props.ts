import { BareIconButtonProps } from './types/BareIconButtonProps.type';
import { CommonIconButtonProps } from './types/CommonIconButtonProps.type';
import { DefaultIconButtonProps } from './types/DefaultIconButtonProps.type';
import { GhostIconButtonProps } from './types/GhostIconButtonProps.type';

export type IconButtonProps = CommonIconButtonProps &
  (DefaultIconButtonProps | GhostIconButtonProps | BareIconButtonProps);
