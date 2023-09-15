import { Icon } from '@virtuslab/tetrisly-icons';
import { FC, useMemo } from 'react';

import type { LabelProps } from './Label.props';
import { stylesBuilder } from './stylesBuilder';
import { Button } from '../Button';

import { tet } from '@/tetrisly';
import { MarginProps } from '@/types/MarginProps';

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
      {/* TODO: add tooltip instead of bare icon, when we get one */}
      {tooltip && (
        <tet.span {...styles.tooltip} data-testid="label-tooltip">
          <Icon name="16-info" />
        </tet.span>
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
