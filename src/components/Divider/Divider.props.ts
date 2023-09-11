import { SystemProp } from '@xstyled/styled-components';
import type { Property } from 'csstype';

import type { DividerConfig } from './Divider.styles';

import type { Theme } from '@/theme';

export type DividerProps = (
  | {
      orientation: 'vertical';
      width?: never;
      height?: SystemProp<Property.Height<number>, Theme>;
    }
  | {
      orientation?: 'horizontal';
      width?: SystemProp<Property.Width<number>, Theme>;
      height?: never;
    }
) & {
  custom?: DividerConfig;
};
