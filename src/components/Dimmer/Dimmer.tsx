import { type FC, useMemo } from 'react';

import type { DimmerProps } from './Dimmer.props';
import { stylesBuilder } from './stylesBuilder';

import { tet } from '@/tetrisly';
import type { MarginProps } from '@/types';

export const Dimmer: FC<DimmerProps & MarginProps> = ({
  custom,
  ...restProps
}) => {
  const styles = useMemo(() => stylesBuilder({ custom }), [custom]);

  return <tet.div {...styles.container} data-testid="dimmer" {...restProps} />;
};
