import { MarginProps } from '@xstyled/styled-components';

import { StatusDotProps } from './StatusDot.props';
import { defaultConfig } from './StatusDot.styles';

import { isKeyOf, mergeConfigWithCustom } from '@/services';
import { tet } from '@/tetrisly';

export const StatusDot = ({
  appearance,
  stroked = false,
  custom,
  ...rest
}: StatusDotProps & MarginProps) => {
  const {
    appearance: appearanceStyles,
    stroked: strokedStyles,
    ...restStyles
  } = mergeConfigWithCustom({ defaultConfig, custom });

  if (!isKeyOf(appearanceStyles, appearance)) {
    throw new Error(`${appearance} is not a valid appearance`);
  }

  const styles = {
    ...restStyles,
    ...appearanceStyles[appearance],
    ...(stroked ? strokedStyles : {}),
  };

  return <tet.div {...styles} {...rest} data-testid="status-dot" />;
};
