import { Icon } from '@virtuslab/tetrisly-icons';
import { type FC, useMemo } from 'react';

import type { BadgeProps } from './Badge.props';
import { stylesBuilder } from './stylesBuilder';

import { tet } from '@/tetrisly';
import type { MarginProps } from '@/types/MarginProps';

export const Badge: FC<BadgeProps & MarginProps> = ({
  appearance,
  intent = 'neutral',
  emphasis = 'high',
  icon,
  beforeIcon = icon,
  afterIcon,
  label,
  custom,
  ...restProps
}) => {
  const hasLabel = !!label;
  const styles = useMemo(
    () => stylesBuilder(intent, emphasis, custom, hasLabel, appearance),
    [custom, intent, emphasis, hasLabel, appearance],
  );

  return (
    <tet.div {...styles.container} data-testid="badge" {...restProps}>
      {!!beforeIcon && (
        <tet.span {...styles.iconContainer} data-testid="badge-iconContainer">
          <Icon name={beforeIcon} data-testid="badge-icon" />
        </tet.span>
      )}
      {!!label && (
        <tet.span {...styles.label} data-testid="badge-label">
          {label}
        </tet.span>
      )}
      {!!afterIcon && (
        <tet.span {...styles.iconContainer} data-testid="badge-iconContainer">
          <Icon name={afterIcon} data-testid="badge-icon" />
        </tet.span>
      )}
    </tet.div>
  );
};
