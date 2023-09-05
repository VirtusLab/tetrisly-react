import { Icon } from '@virtuslab/tetrisly-icons';
import { FC, useMemo } from 'react';

import { BadgeProps } from './Badge.props';
import { stylesBuilder } from './stylesBuilder';

import { tet } from '@/tetrisly';
import { MarginProps } from '@/types/MarginProps';

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
    () => stylesBuilder(custom, intent, emphasis, hasLabel, appearance),
    [custom, intent, emphasis, hasLabel, appearance],
  );

  return (
    <tet.div {...styles.container} {...restProps} data-testid="badge">
      {!!beforeIcon && (
        <tet.span {...styles.iconContainer}>
          <Icon name={beforeIcon} data-testid="badge-icon" />
        </tet.span>
      )}
      {!!label && <tet.span {...styles.label}>{label}</tet.span>}
      {!!afterIcon && (
        <tet.span {...styles.iconContainer}>
          <Icon name={afterIcon} data-testid="badge-icon" />
        </tet.span>
      )}
    </tet.div>
  );
};
