import { Icon } from '@virtuslab/tetrisly-icons';
import { merge } from 'lodash';

import { LabelProps } from './Label.props';
import { config as defaultConfig } from './Label.styles';
// import { Button } from '../Button';

import { tet } from '@/tetrisly';
import { MarginProps } from '@/types/MarginProps';

export const Label = ({
  label,
  tooltip,
  optional,
  custom,
  ...rest
}: LabelProps & MarginProps) => {
  const options = custom ? merge(defaultConfig, custom) : defaultConfig;
  const {
    optional: optionalStyles,
    tooltip: tooltipStyles,
    ...labelStyles
  } = options;

  return (
    <tet.div {...labelStyles} {...rest} data-testid="label">
      {label}
      {!!optional && (
        <tet.span {...optionalStyles} data-testid="label-optional">
          {optional}
        </tet.span>
      )}
      {/* TODO: add tooltip instead of bare icon, when we get one */}
      {tooltip && (
        <tet.span {...tooltipStyles} data-testid="label-tooltip">
          <Icon name="16-info" />
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
