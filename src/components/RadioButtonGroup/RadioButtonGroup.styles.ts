import { BaseProps } from '@/types/BaseProps';

export type RadioButtonGroupConfig = {
  innerElements: {
    radioButtonContainer: BaseProps;
  };
} & BaseProps;

export const config = {
  display: 'flex',
  flexDirection: 'column',
  gap: 'component-gap-small',
  innerElements: {
    radioButtonContainer: {
      display: 'grid',
      gap: 'component-gap-small component-gap-large',
    },
  },
} satisfies RadioButtonGroupConfig;