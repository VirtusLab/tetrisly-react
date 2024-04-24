import type { BaseProps } from '@/types/BaseProps';

export type CornerDialogFooterConfig = {
  actions?: BaseProps;
} & BaseProps;

export type CornerDialogConfig = BaseProps & {
  innerElements?: {
    intentIndicator?: BaseProps;
    body?: BaseProps;
    header?: BaseProps;
    headerTitle?: BaseProps;
    headerClose?: BaseProps;
    content?: BaseProps;
    footer?: CornerDialogFooterConfig;
  };
};

export const defaultConfig = {
  display: 'flex',
  w: 'fit-content',
  minWidth: '420px',
  p: '$space-component-padding-2xLarge',
  flexDirection: 'row',
  alignItems: 'flex-start',
  gap: '$space-component-padding-large',
  borderRadius: '$border-radius-xLarge',
  bg: '$color-interaction-background-modeless',
  boxShadow: '$elevation-bottom-300',
  borderWidth: '$border-width-small',
  borderStyle: '$border-style-solid',
  borderColor: '$color-border-defaultA',
  overflow: 'hidden',
  innerElements: {
    intentIndicator: {
      h: '$size-xSmall',
      display: 'flex',
      alignItems: 'flex-end',
    },
    body: {
      display: 'flex',
      flexGrow: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: '$space-component-padding-large',
    },
    header: {
      display: 'flex',
      alignSelf: 'stretch',
      alignItems: 'center',
    },
    headerTitle: {
      display: 'flex',
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      color: '$color-coolGrey--3',
      text: '$typo-body-strong-large',
    },
    headerClose: {
      cursor: 'pointer',
    },
    content: {
      color: '$color-coolGrey-0',
      paddingLeft: '$dimension-25',
    },
    footer: {
      display: 'flex',
      alignSelf: 'stretch',
      justifyContent: 'flex-end',
      gap: '$space-component-padding-small',
    },
  },
} as const satisfies CornerDialogConfig;

export const cornerDialogStyles = {
  defaultConfig,
};
