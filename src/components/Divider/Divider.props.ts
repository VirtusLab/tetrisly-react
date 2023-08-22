import { SystemProp, SystemProps } from '@xstyled/styled-components';

import { config } from './Divider.styles';

import { Theme } from '@/theme';
import { DeepPartial } from '@/utility-types/DeepPartial';

export type DividerProps = (
  | {
      orientation: 'vertical';
      width?: never;
      height?: SystemProp<string | number | object | (string & object), Theme>;
    }
  | {
      orientation?: 'horizontal';
      width?: SystemProp<string | number | object | (string & object), Theme>;
      height?: never;
    }
) & {
  custom?: DeepPartial<SystemProps<Theme> & typeof config>;
};
