import { MarginProps } from '@xstyled/styled-components';

import { StatusDotProps } from './StatusDot.props';
import { stylesBuilder } from './stylesBuilder/stylesBuilder';

import { tet } from '@/tetrisly/tetrisly';

export const StatusDot = ({
  appearance,
  stroked = false,
  ...rest
}: StatusDotProps & MarginProps) => (
  <tet.div
    {...stylesBuilder({ appearance, stroked })}
    {...rest}
    data-testid="status-dot"
  />
);
