import { merge } from 'lodash';

import { ConfigWithNested } from './ConfigWithNested';
import { splitNested } from './splitNested';
import { spltStyles } from './splitStyles';
import { Variant } from './Variant';
import { fromEntries } from '../fromEntries';

import { BaseProps } from '@/types/BaseProps';
import { Custom } from '@/utility-types/WithCustom';

type Output<TNested extends readonly string[]> = { styles: BaseProps } & Record<
  TNested[number],
  BaseProps
>;

export const stylesBuilder = <
  T extends object,
  const TNested extends readonly string[] = [],
>({
  config: origConfig,
  variant: variantConfig,
  custom,
  nestedList,
}: {
  config: BaseProps & T & ConfigWithNested<TNested, object>;
  variant: Variant<Omit<T, TNested[number]>>;
  custom?: Custom<T>;
  nestedList?: TNested;
}): Output<TNested> => {
  nestedList?.forEach((nestedElement) => {
    if (Object.keys(variantConfig).includes(nestedElement))
      throw new Error(
        `nested element: ${nestedElement} is also a variant key, please remove it from nested list`,
      );
  });
  const config = merge(origConfig, custom || {}) as T;
  const { styles, rest: notStyles } = spltStyles<T, TNested>(config);
  const { nested: nestedConfig, rest } = splitNested(
    notStyles,
    nestedList || [],
  );

  if (Object.keys(rest).length === 0) return { styles } as Output<TNested>;

  const variantStyles = extractVariant(rest, variantConfig);

  const outputStyles = {
    ...styles,
    ...variantStyles,
  };

  if (Object.keys(nestedConfig).length === 0)
    return { styles: outputStyles } as Output<TNested>;

  type NestedConfig = Record<TNested[number], object>;
  if (!nestedConfig) throw new Error('nested config is not an object');
  type ConfigType = BaseProps & T & ConfigWithNested<TNested, object>;
  const nestedStyles = fromEntries(
    Object.entries(nestedConfig as NestedConfig).map(([key, value]) => [
      key,
      stylesBuilder({
        config: value as ConfigType,
        variant: variantConfig,
      }).styles,
    ]),
  );
  return {
    styles: outputStyles,
    ...(nestedStyles as Record<TNested[number], BaseProps>),
  };
};

export function extractVariant<T extends object>(
  config: T,
  variant: Variant<T>,
): BaseProps {
  const variantStyles = Object.entries(variant).reduce((acc, [key, value]) => {
    type Key = keyof typeof config;
    if (typeof value === 'string')
      return {
        ...acc,
        ...config[key as Key][value as keyof (typeof config)[Key]],
      };

    if (typeof value === 'boolean') {
      return value ? { ...acc, ...config[key as Key] } : acc;
    }
    if (typeof value !== 'object' && value !== null) {
      throw new Error(
        `value for the key: ${key.toString()} in variants is not an object`,
      );
    }
    if (!isObject(config[key as Key])) {
      throw new Error(
        `value for the key: ${key.toString()} in config is not an object`,
      );
    }
    type NewConfig = BaseProps &
      T[keyof T] &
      object &
      ConfigWithNested<[], object>;

    return {
      ...acc,
      ...stylesBuilder({
        config: config[key as Key] as NewConfig,
        variant: value as Variant<NewConfig>,
      }).styles,
    };
  }, {} as BaseProps);
  return variantStyles;
}

function isObject(value: unknown): value is object {
  return typeof value === 'object' && value !== null;
}
