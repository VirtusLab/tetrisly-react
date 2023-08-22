import { MarginProps } from '@xstyled/styled-components';
import { merge } from 'lodash';

import { StatusDotProps } from './StatusDot.props';
import { config as defaultConfig } from './StatusDot.styles';

import { isKeyOf } from '@/services';
import { tet } from '@/tetrisly';

export const StatusDot = ({
  appearance,
  stroked = false,
  custom,
  ...rest
}: StatusDotProps & MarginProps) => {
  const options = custom ? merge(defaultConfig, custom) : defaultConfig;
  const {
    appearance: appearanceStyles,
    stroked: strokedStyles,
    ...restStyles
  } = options;

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
