import { type FC, useMemo } from 'react';

import type { StatusDotProps } from './StatusDot.props';
import { stylesBuilder } from './stylesBuilder';

import { tet } from '@/tetrisly';
import type { MarginProps } from '@/types';

export const StatusDot: FC<StatusDotProps & MarginProps> = ({
  appearance = 'red',
  hasStroke = false,
  custom,
  ...restProps
}) => {
  const styles = useMemo(
    () => stylesBuilder({ appearance, hasStroke, custom }),
    [appearance, hasStroke, custom],
  );

  return (
    <tet.div {...styles.container} data-testid="status-dot" {...restProps} />
  );
};
