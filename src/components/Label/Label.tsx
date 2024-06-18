import { Icon } from '@virtuslab/tetrisly-icons';
import { type FC, useMemo } from 'react';

import type { LabelProps } from './Label.props';
import { stylesBuilder } from './stylesBuilder';
import { Button } from '../Button';
import { Tooltip } from '../Tooltip';

import { tet } from '@/tetrisly';
import type { MarginProps } from '@/types/MarginProps';

export const Label: FC<LabelProps & MarginProps> = ({
  label,
  tooltip,
  action,
  optional,
  custom,
  ...restProps
}) => {
  const styles = useMemo(() => stylesBuilder(custom), [custom]);

  return (
    <tet.label {...styles.label} data-testid="label" {...restProps}>
      {label}
      {!!optional && (
        <tet.span {...styles.optional} data-testid="label-optional">
          {optional}
        </tet.span>
      )}
      {tooltip && (
        <Tooltip
          {...styles.tooltip}
          text="label tooltip"
          data-testid="label-tooltip"
        >
          <Icon name="16-info" />
        </Tooltip>
      )}
      {!!action && (
        <Button
          variant="bare"
          appearance="primary"
          {...action}
          {...styles.action}
          data-testid="label-action"
        />
      )}
    </tet.label>
  );
};
