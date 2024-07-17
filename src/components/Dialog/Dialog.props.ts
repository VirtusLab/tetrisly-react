// import { ReactNode } from 'react';
// import { DialogConfig } from './Dialog.styles';
// import { DialogFooter, DialogIntent, DialogSize } from './types';

// import type { Action, HelperTextProp } from '@/types';

// export type CommonDialogProps = {
//   actions?: Action[];
//   content?: string;
//   custom?: DialogConfig;
//   docsPresentation?: boolean;
//   footer?: DialogFooter;
//   hasCloseButton?: boolean;
//   intent?: DialogIntent;
//   size?: DialogSize;
//   title?: string;
// };
// type DialogWithoutAdditionalChildProps = { hasAdditionalChild?: false };
// type DialogWithAdditionalChildProps = {
//   hasAdditionalChild?: true;
// } & (AdditionalActionChildProps | AdditionalCustomContentChildProps | AdditionalNestedChildProps);
// // type AdditionalChildProps = {
// //   type: 'action' | 'custom content' | 'nested component';
// // };

// type AdditionalActionChildProps = {
//   type: 'action',
//   action: Action
// }

// type AdditionalCustomContentChildProps = {
//   type: 'custom content',
//   content: ReactNode
// }

// // type NestedComponentType = Avatar | Button | Checkbox | Counter | Dialog | HelperText | StatusDot | Icon | Loader | SelectablePill | SearchInput | InlineSearchInput | Status
// // TODO add DimmerProps, LogoProps, HeaderProps when Dimmer, Logo, Header components are added
// type AdditionalNestedChildProps = {
//   type: 'nested component',
//   component: ReactNode
// }

// export type DialogProps = CommonDialogProps &
//   (DialogWithAdditionalChildProps | DialogWithoutAdditionalChildProps);

// -------------------------------------------------------------------------------------------------------------------------------

import { ReactNode } from 'react';

import { DialogConfig } from './Dialog.styles';
import { DialogFooter, DialogIntent, DialogSize } from './types';

import type { Action } from '@/types';

export type DialogProps = {
  actions?: Action[];
  additionalAction?: Action;
  children?: ReactNode;
  content?: string;
  custom?: DialogConfig;
  docsPresentation?: boolean;
  footer?: DialogFooter;
  hasCloseButton?: boolean;
  intent?: DialogIntent;
  size?: DialogSize;
  title?: string;
};
