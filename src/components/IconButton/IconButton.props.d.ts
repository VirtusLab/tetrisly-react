import { CommonIconButtonProps } from './types/CommonIconButtonProps.type';
import { PartialBareIconButtonProps } from './types/PartialBareIconButtonProps.type';
import { PartialDefaultIconButtonProps } from './types/PartialDefaultIconButtonProps.type';
import { PartialGhostIconButtonProps } from './types/PartialGhostIconButtonProps.type';
export type IconButtonProps = CommonIconButtonProps & (PartialDefaultIconButtonProps | PartialGhostIconButtonProps | PartialBareIconButtonProps);
export type DefaultIconButtonProps = CommonIconButtonProps & PartialDefaultIconButtonProps;
export type GhostIconButtonProps = CommonIconButtonProps & PartialGhostIconButtonProps;
export type BareIconButtonProps = CommonIconButtonProps & PartialBareIconButtonProps;
