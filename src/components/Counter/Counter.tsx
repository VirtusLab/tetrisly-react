import { FC, useMemo } from 'react';

import { CounterProps } from './Counter.props';
import { stylesBuilder } from './stylesBuilder';

import { tet } from '@/tetrisly';

export const Counter: FC<CounterProps> = ({
  number,
  appearance = 'default',
  emphasis = 'low',
  custom,
}) => {
  const styles = useMemo(
    () => stylesBuilder(appearance, emphasis, custom),
    [appearance, emphasis, custom],
  );
  return (
    <tet.div {...styles.container} data-testid="counter">
      {number}
    </tet.div>
  );
};
