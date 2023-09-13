import { ButtonProps } from '../Button.props';
import { defaultConfig } from '../Button.styles';

import { fallbackKey, mergeConfigWithCustom } from '@/services';
import { BaseProps } from '@/types/BaseProps';

type ButtonStylesBulderInput = {
  appearance: NonNullable<ButtonProps['appearance']>;
  variant: NonNullable<ButtonProps['variant']>;
  intent: NonNullable<ButtonProps['intent']>;
  size: NonNullable<ButtonProps['size']>;
  custom?: ButtonProps['custom'];
};

type ButtonStylesBuilder = {
  container: BaseProps;
};

export const stylesBuilder = (
  props: ButtonStylesBulderInput,
): ButtonStylesBuilder => {
  const variants = mergeConfigWithCustom({
    defaultConfig,
    custom: props.custom,
  });
  const { appearance, size, ...container } = variants[props.variant];

  const sizeStyles = fallbackKey(
    size,
    props.size,
    'medium',
    `Button props warning: '${props.size}' is not a valid size for '${props.variant}' variant, using 'medium' as size fallback`,
  );

  const { intent, ...appearanceStyles } = fallbackKey(
    appearance,
    props.appearance,
    'secondary',
    `Button props warning: '${props.appearance}' is not a valid appearance for '${props.variant}' variant, using 'secondary' as appearance fallback`,
  );

  const intentStyles = fallbackKey(
    intent,
    props.intent,
    'none',
    `Button props warning: '${props.intent}' is not a valid intent for '${props.variant}' variant and '${props.appearance}' appearance, using 'none' as intent fallback`,
  );

  return {
    container: {
      ...container,
      ...sizeStyles,
      ...appearanceStyles,
      ...intentStyles,
    },
  };
};
