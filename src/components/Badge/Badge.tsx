import { Icon } from '@virtuslab/tetrisly-icons';
import { merge } from 'lodash';

import { BadgeProps } from './Badge.props';
import { config as defaultConfig } from './Badge.styles';

import { tet } from '@/tetrisly';
import { MarginProps } from '@/types/MarginProps';

export const Badge = ({
  appearance,
  intent,
  emphasis = 'high',
  beforeIcon,
  afterIcon,
  icon,
  label,
  custom = {},
}: BadgeProps & MarginProps) => {
  const config = merge(defaultConfig, custom);
  const {
    appearance: appearanceStyles,
    intent: intentStyles,
    label: labelStyles,
    icon: iconStyles,
    ...restStyles
  } = config;
  const color = appearance
    ? appearanceStyles[appearance][emphasis]
    : intentStyles[intent][emphasis];
  const padding = label ? labelStyles : iconStyles;
  return (
    <tet.div {...color} {...padding} {...restStyles}>
      {!!beforeIcon && <Icon name={beforeIcon} />}
      {!!icon && <Icon name={icon} />}
      {label}
      {!!afterIcon && <Icon name={afterIcon} />}
    </tet.div>
  );
};
