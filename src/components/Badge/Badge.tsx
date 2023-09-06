import { Icon } from '@virtuslab/tetrisly-icons';

import { BadgeProps } from './Badge.props';
import { defaultConfig } from './Badge.styles';

import { mergeConfigWithCustom } from '@/services';
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
  custom,
  ...restProps
}: BadgeProps & MarginProps) => {
  const config = mergeConfigWithCustom({ defaultConfig, custom });
  const {
    appearance: appearanceStyles,
    intent: intentStyles,
    label: labelStyles,
    icon: iconStyles,
    ...restStyles
  } = config;

  if (!appearance && !intent) {
    throw new Error('Badge needs to have defined appearance or intent prop');
  }

  const color = appearance
    ? appearanceStyles[appearance][emphasis]
    : intentStyles[intent][emphasis];
  const padding = label ? labelStyles : iconStyles;
  return (
    <tet.div
      {...color}
      {...padding}
      {...restStyles}
      {...restProps}
      data-testid="badge"
    >
      {!!beforeIcon && <Icon name={beforeIcon} data-testid="badge-icon" />}
      {!!icon && <Icon name={icon} data-testid="badge-icon" />}
      {label}
      {!!afterIcon && <Icon name={afterIcon} data-testid="badge-icon" />}
    </tet.div>
  );
};
