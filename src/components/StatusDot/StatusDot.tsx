import { useMemo } from 'react';

import type { StatusDotProps } from './StatusDot.props';
import { stylesBuilder } from './stylesBuilder';

import { tet } from '@/tetrisly';
import type { MarginProps } from '@/types';

export const StatusDot: React.FC<StatusDotProps & MarginProps> = ({
  appearance = 'red',
  stroked = false,
  custom,
  ...restProps
}) => {
  const styles = useMemo(
    () => stylesBuilder({ appearance, stroked, custom }),
    [appearance, stroked, custom],
  );

  return (
    <tet.div {...styles.container} data-testid="status-dot" {...restProps} />
  );
};
