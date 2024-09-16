import { BaseProps } from '@/types/BaseProps';

export type HeaderType = 'complex' | 'compact';

export type HeaderConfig = {
  table: { type: Record<HeaderType, BaseProps> } & BaseProps;
  titleAndDescriptionContainer: BaseProps;
  titleContainer: BaseProps;
  description: BaseProps;
  counter: BaseProps;
  actionContainer: BaseProps;
  search: { type: Record<HeaderType, BaseProps> } & BaseProps;
  bottomBar: { type: Record<HeaderType, BaseProps> } & BaseProps;
} & BaseProps;

export const defaultConfig = {
  display: 'flex',
  flexDirection: 'column',
  minWidth: 'fit-content',
  w: '100%',
  h: 'fit-content',
  backgroundColor: '$color-background-default',
  table: {
    w: '100%',
    display: 'flex',
    padding: '$space-component-padding-large $space-component-padding-2xLarge',
    type: {
      complex: {
        h: '88px',
      },
      compact: {
        h: '80px',
      },
    },
  },
  titleAndDescriptionContainer: {
    w: '100%',
    text: '$typo-header-xLarge',
    display: 'flex',
    flexDirection: 'column',
  },
  counter: {
    w: '$size-2xSmall',
    h: '$size-2xSmall',
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '$space-component-gap-small',
  },
  description: {
    text: '$typo-body-medium',
    color: '$color-content-secondary',
    gap: '$space-component-gap-small',
  },
  actionContainer: {
    display: 'flex',
    gap: '$space-component-gap-large',
    alignItems: 'center',
  },
  bottomBar: {
    borderTopWidth: '$border-width-small',
    borderStyle: '$border-style-solid',
    borderColor: '$color-border-default',
    display: 'flex',
    type: {
      complex: {
        padding:
          '$space-component-padding-large $space-component-padding-2xLarge',
        gap: '$space-component-gap-small',
        h: '$size-2xLarge',
      },
      compact: {
        padding:
          '$space-component-padding-small $space-component-padding-large',
        h: '$size-large',
      },
    },
  },
  search: {
    w: '105px',
    type: {
      complex: {
        marginLeft: 'auto',
      },
      compact: {},
    },
  },
} satisfies HeaderConfig;

export const headerStyles = {
  defaultConfig,
};
