import { MarginProps } from '@xstyled/styled-components';

import { StatusDotProps } from './StatusDot.props';
import { config } from './StatusDot.styles';

import { isKeyOf } from '@/services';
import { tet } from '@/tetrisly';

export const StatusDot = ({
  appearance,
  stroked = false,
  ...rest
}: StatusDotProps & MarginProps) => {
  const {
    appearance: appearanceStyles,
    stroked: strokedStyles,
    ...restStyles
  } = config;

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
