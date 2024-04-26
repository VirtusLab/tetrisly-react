import { LoaderProps } from '../../Loader';
import { ButtonProps } from '../Button.props';
import { defaultConfig } from '../Button.styles';

import { fallbackKey, mergeConfigWithCustom } from '@/services';
import { BaseProps } from '@/types/BaseProps';

type ButtonStylesBuilderInput = {
  appearance: NonNullable<ButtonProps['appearance']>;
  variant: NonNullable<ButtonProps['variant']>;
  intent: NonNullable<ButtonProps['intent']>;
  size: NonNullable<ButtonProps['size']>;
  hasDropdownIndicator?: ButtonProps['hasDropdownIndicator'];
  hasBeforeIcon?: boolean;
  hasAfterIcon?: boolean;
  custom?: ButtonProps['custom'];
};

type ButtonStylesBuilder = {
  container: BaseProps;
  loader: Pick<LoaderProps, 'appearance'>;
};

const getLoaderProps = (
  loader: object,
  props: Pick<ButtonStylesBuilderInput, 'appearance' | 'intent'>,
) => {
  let loaderProps: Pick<LoaderProps, 'appearance'> = {};

  if (!('appearance' in loader)) return loader;

  const loaderAppearance =
    loader?.appearance?.[props.appearance as keyof typeof loader.appearance];

  if (loaderAppearance) {
    if ('intent' in loaderAppearance) {
      const { intent: loaderIntent } = loaderAppearance;

      loaderProps =
        loaderIntent?.[props.intent as keyof typeof loaderIntent] || {};
    } else {
      loaderProps = loaderAppearance;
    }
  }

  return loaderProps;
};

export const stylesBuilder = (
  props: ButtonStylesBuilderInput,
): ButtonStylesBuilder => {
  const variants = mergeConfigWithCustom({
    defaultConfig,
    custom: props.custom,
  });

  const {
    appearance,
    size,
    innerElements: { loader },
    ...container
  } = variants[props.variant];

  const { hasDropdownIndicator, hasBeforeIcon, hasAfterIcon, ...sizeStyles } =
    fallbackKey(
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

  const withDropdownIndicatorStyles: BaseProps = props.hasDropdownIndicator
    ? hasDropdownIndicator
    : {};
  const withAfterIconStyles: BaseProps = props.hasAfterIcon ? hasAfterIcon : {};
  const withBeforeIconStyles: BaseProps = props.hasBeforeIcon
    ? hasBeforeIcon
    : {};

  return {
    container: {
      ...container,
      ...sizeStyles,
      ...withDropdownIndicatorStyles,
      ...withAfterIconStyles,
      ...withBeforeIconStyles,
      ...appearanceStyles,
      ...intentStyles,
    },
    loader: getLoaderProps(loader, {
      appearance: props.appearance,
      intent: props.intent,
    }),
  };
};
