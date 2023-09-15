import { CommonButtonProps } from './types/CommonButtonProps.type';
import { PartialBareButtonProps } from './types/PartialBareButtonProps.type';
import { PartialDefaultButtonProps } from './types/PartialDefaultButtonProps';
import { PartialGhostButtonProps } from './types/PartialGhostButtonProps';
export type ButtonProps = CommonButtonProps & (PartialDefaultButtonProps | PartialGhostButtonProps | PartialBareButtonProps);
export type DefaultButtonProps = CommonButtonProps & PartialDefaultButtonProps;
export type GhostButtonProps = CommonButtonProps & PartialGhostButtonProps;
export type BareButtonProps = CommonButtonProps & PartialBareButtonProps;
