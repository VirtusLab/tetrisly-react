import { useMemo } from 'react';

import type { CounterProps } from './Counter.props';
import { stylesBuilder } from './stylesBuilder';

import { tet } from '@/tetrisly';
import type { MarginProps } from '@/types';

export const Counter: React.FC<CounterProps & MarginProps> = ({
  number,
  appearance = 'default',
  emphasis = 'low',
  custom,
  ...restProps
}) => {
  const styles = useMemo(
    () => stylesBuilder({ appearance, emphasis, custom }),
    [appearance, emphasis, custom],
  );

  return (
    <tet.div {...styles.container} data-testid="counter" {...restProps}>
      {number}
    </tet.div>
  );
};
