import { FC, useMemo } from 'react';

import { StatusProps } from './Status.props';
import { stylesBuilder } from './stylesBuilder';

import { tet } from '@/tetrisly';

export const Status: FC<StatusProps> = ({
  appearance,
  emphasis,
  label,
  custom,
  ...restProps
}) => {
  const styles = useMemo(
    () => stylesBuilder(appearance, custom, emphasis),
    [custom, emphasis, appearance],
  );

  return (
    <tet.div {...styles.container} data-testid="status" {...restProps}>
      <tet.span {...styles.dot} data-testid="status-dot" />
      <tet.span>{label}</tet.span>
    </tet.div>
  );
};
