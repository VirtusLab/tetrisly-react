import { merge } from 'lodash';

import { BaseKeys, baseKeys } from './baseKeys';
import { fromEntries } from '../fromEntries';

import { BaseProps } from '@/types/BaseProps';
import { Custom } from '@/utility-types/WithCustom';

const entries = <T extends object>(obj: T) =>
  Object.entries(obj) as Array<[keyof T, T[keyof T]]>;

type OnlyOne<Keys extends PropertyKey, T> = {
  [key in Keys]: { [k in key]: T };
}[Keys];

type Variant<T extends object> = {
  [K in Exclude<keyof T, BaseKeys>]: keyof T[K][keyof T[K]] extends BaseKeys
    ? keyof T[K]
    : T[K] extends object
    ? OnlyOne<keyof T[K], Variant<T[K][keyof T[K]]>>
    : never;
};

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
  const nestedStyles = fromEntries(
    entries(nestedConfig as NestedConfig).map(([key, value]) => [
      key,
      stylesBuilder({
        config: value as any,
        variant: variantConfig,
      }).styles,
    ]),
  );
  return {
    styles: outputStyles,
    ...nestedStyles,
  };
};
function extractVariant<T extends object>(
  config: T,
  variant: Variant<T>,
): BaseProps {
  const variantStyles = entries(variant).reduce((acc, [key, value]) => {
    if (typeof value === 'string')
      return {
        ...acc,
        ...config[key][value as keyof (typeof config)[typeof key]],
      };

    if (typeof value === 'boolean') {
      return value ? { ...acc, ...config[key] } : acc;
    }
    if (typeof value !== 'object' && value !== null) {
      throw new Error(
        `value for the key: ${key.toString()} in variants is not an object`,
      );
    }
    if (!isObject(config[key])) {
      throw new Error(
        `value for the key: ${key.toString()} in config is not an object`,
      );
    }
    type NewConfig = (typeof config)[typeof key] & object;
    return {
      ...acc,
      ...stylesBuilder({
        config: config[key] as NewConfig,
        variant: value as Variant<NewConfig>,
      }).styles,
    };
  }, {} as BaseProps);
  return variantStyles;
}

function isObject(value: unknown): value is object {
  return typeof value === 'object' && value !== null;
}
function spltStyles<T extends object, TNested extends readonly string[]>(
  config: T,
) {
  const styles = Object.fromEntries(
    Object.entries(config).filter(([key]) =>
      (baseKeys as string[]).includes(key),
    ),
  ) as BaseProps;
  const rest = Object.fromEntries(
    Object.entries(config).filter(
      ([key]) => !(baseKeys as string[]).includes(key),
    ),
  ) as Exclude<T & ConfigWithNested<TNested, object>, BaseProps>;

  return {
    styles,
    rest,
  };
}

type ConfigWithNested<TNested extends readonly string[], TConfig> = Record<
  TNested[number],
  TConfig
>;

function splitNested<
  TConfig extends ConfigWithNested<TNested, object>,
  const TNested extends readonly string[],
>(
  config: TConfig,
  nestedList: TNested,
): {
  nested: ConfigWithNested<TNested, object>;
  rest: Exclude<TConfig, ConfigWithNested<TNested, object>>;
} {
  if (nestedList.length === 0)
    return {
      nested: {} as ConfigWithNested<TNested, object>,
      rest: config as Exclude<TConfig, ConfigWithNested<TNested, object>>,
    };
  const nested = Object.fromEntries(
    Object.entries(config).filter(([key]) => nestedList.includes(key)),
  ) as ConfigWithNested<TNested, object>;

  const rest = Object.fromEntries(
    Object.entries(config).filter(([key]) => !nestedList.includes(key)),
  ) as Exclude<TConfig, ConfigWithNested<TNested, object>>;

  return {
    nested,
    rest,
  };
}
