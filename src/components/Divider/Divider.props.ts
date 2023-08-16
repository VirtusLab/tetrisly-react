import { SystemProp } from '@xstyled/styled-components';

import { config } from './Divider.styles';
import { DividerOrientation } from './DividerOrientation.type';

import { Theme } from '@/theme';
import { WithCustom } from '@/utility-types/WithCustom';

export type DividerProps = WithCustom<
  {
    orientation?: DividerOrientation;
    width?: SystemProp<string | number | object | (string & object), Theme>;
    height?: SystemProp<string | number | object | (string & object), Theme>;
  },
  typeof config
>;
