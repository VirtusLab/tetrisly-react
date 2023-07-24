import { Icon } from '@virtuslab/tetrisly-icons';
import { MarginProps } from '@xstyled/styled-components';
import { merge } from 'lodash';

import { LabelProps } from './Label.props';
import { config as defaultConfig } from './Label.styles';
// import { Button } from '../Button';

import { tet } from '@/tetrisly';

export const Label = ({
  label,
  action,
  tooltip,
  optional,
  custom = {},
  ...rest
}: LabelProps & MarginProps) => {
  const {
    optional: optionalStyles,
    tooltip: tooltipStyles,
    ...labelStyles
  } = merge(defaultConfig, custom);
  return (
    <tet.div {...labelStyles} {...rest} data-testid="label">
      {label}
      {!!optional && (
        <tet.span {...optionalStyles} data-testid="label-optional">
          ({optional})
        </tet.span>
      )}
      {/* TODO: add tooltip instead of bare icon, when we get one */}
      {tooltip && (
        <tet.span {...tooltipStyles} data-testid="label-tooltip">
          <Icon name="20-info-fill" />
        </tet.span>
      )}
      {/* TODO: add action when we discuss how they should behave */}
      {/* {!!action && (
        <Button
          variant="bare"
          {...action}
          marginLeft="auto"
          data-testid="label-action"
        />
      )} */}
    </tet.div>
  );
};
