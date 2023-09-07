import { Icon } from '@virtuslab/tetrisly-icons';

import { LabelProps } from './Label.props';
import { defaultConfig } from './Label.styles';
// import { Button } from '../Button';

import { mergeConfigWithCustom } from '@/services';
import { tet } from '@/tetrisly';
import { MarginProps } from '@/types/MarginProps';

export const Label = ({
  label,
  tooltip,
  optional,
  custom,
  ...rest
}: LabelProps & MarginProps) => {
  const options = mergeConfigWithCustom({ defaultConfig, custom });
  const {
    optional: optionalStyles,
    tooltip: tooltipStyles,
    ...labelStyles
  } = options;

  return (
    <tet.div {...labelStyles} data-testid="label" {...rest}>
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
