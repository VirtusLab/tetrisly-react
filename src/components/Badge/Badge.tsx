import { Icon } from '@virtuslab/tetrisly-icons';

import { BadgeProps } from './Badge.props';
import { config as defaultConfig } from './Badge.styles';

import { tet } from '@/tetrisly';

export const Badge = ({
  appearance,
  intent,
  emphasis,
  beforeIcon,
  afterIcon,
  icon,
  label,
}: BadgeProps) => {
  const {
    appearance: appearanceStyles,
    intent: intentStyles,
    label: labelStyles,
    icon: iconStyles,
    ...restStyles
  } = defaultConfig;
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
