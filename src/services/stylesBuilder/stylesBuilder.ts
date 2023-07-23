/* eslint-disable @typescript-eslint/no-use-before-define */
import { merge } from 'lodash';

import { baseKeys } from './baseKeys';

import { BaseProps } from '@/types/BaseProps';
import { DeepPartial } from '@/utility-types/DeepPartial';

type BaseKeys = (typeof baseKeys)[number];

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

type StylesBuilderProps<T extends object, TCustom extends DeepPartial<T>> = {
  config: BaseProps & T;
  variant: Variant<T>;
  custom?: TCustom;
};

export const stylesBuilder = <
  T extends object,
  TCustom extends DeepPartial<T>
>({
  config: origConfig,
  variant: variantConfig,
  custom,
}: StylesBuilderProps<T, TCustom>): { styles: BaseProps } => {
  const config = merge(origConfig, custom || {}) as T;
  const { styles, rest } = spltStyles(config);

  const variantStyles = extractVariant(rest, variantConfig);

  return {
    styles: {
      ...styles,
      ...variantStyles,
    },
  };
};
function extractVariant<T extends object>(
  config: T,
  variant: Variant<T>
): BaseProps {
  const variantStyles = entries(variant).reduce((acc, [key, value]) => {
    if (typeof value === 'string') {
      return {
        ...acc,
        ...config[key][value as keyof (typeof config)[typeof key]],
      };
    }
    if (typeof value === 'boolean') {
      return value ? { ...acc, ...config[key] } : acc;
    }
    if (typeof value !== 'object' && value !== null) {
      throw new Error(
        `value for the key: ${key.toString()} in variants is not an object`
      );
    }
    if (!isObject(config[key])) {
      throw new Error(
        `value for the key: ${key.toString()} in config is not an object`
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
function spltStyles<T extends object>(config: T) {
  const styles = Object.fromEntries(
    Object.entries(config).filter(([key]) =>
      (baseKeys as string[]).includes(key)
    )
  ) as BaseProps;
  const rest = Object.fromEntries(
    Object.entries(config).filter(
      ([key]) => !(baseKeys as string[]).includes(key)
    )
  ) as Exclude<T, BaseProps>;

  return {
    styles,
    rest,
  };
}
