import { merge } from 'lodash';

import { IconButtonStyleProps } from './IconButton.props';
import {
  IconButtonConfig,
  Intents,
  iconButtonConfig,
} from './IconButton.styles';
import { IconButtonAppearance } from './IconButtonAppearance.type';
import { ButtonVariant } from '../Button/types/ButtonType.type';

export function styleBuilder<
  TVariant extends ButtonVariant,
  TAppearance extends IconButtonAppearance<TVariant>,
>(props: Required<Omit<IconButtonStyleProps<TVariant, TAppearance>, 'icon'>>) {
  const { variants, sizes, ...styles } = merge(
    iconButtonConfig,
    props.custom ?? {},
  ) as IconButtonConfig;
  const variant = variants[props.variant];
  const { appearances, ...variantStyles } = variant;
  const appearance = appearances[props.appearance];
  const { intents, ...appearanceStyles } = appearance;

  const intentStyles = intents
    ? (intents as Intents<TAppearance>)[props.intent]
    : {};

  const { dropdownIndicator, ...sizeStyles } = sizes[props.size];
  const dropdownStyles = props.dropdownIndicator ? dropdownIndicator : {};
  return {
    ...styles,
    ...variantStyles,
    ...appearanceStyles,
    ...intentStyles,
    ...sizeStyles,
    ...dropdownStyles,
  };
}
