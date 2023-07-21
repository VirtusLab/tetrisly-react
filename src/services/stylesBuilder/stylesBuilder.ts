/* eslint-disable @typescript-eslint/no-use-before-define */
// import { SystemProps } from '@xstyled/styled-components';
import { SystemProps } from '@xstyled/styled-components';
import { merge } from 'lodash';

import { baseKeys } from './baseKeys';
import { fromEntries } from '../fromEntries';

import { BaseProps } from '@/types/BaseProps';
import { DeepPartial } from '@/utility-types/DeepPartial';

// import { fromEntries } from '@/services/fromEntries';
// import { BaseProps } from '@/types/BaseProps';
// import { DeepPartial } from '@/utility-types/DeepPartial';

// const keys = <T extends object>(obj: T) => Object.keys(obj) as Array<keyof T>;

const entries = <T extends object>(obj: T) =>
  Object.entries(obj) as Array<[keyof T, T[keyof T]]>;

type Config<T extends object> = BaseProps & {
  [K in keyof T]: T[K] extends string | boolean
    ? { [P in T[K]]: SystemProps }
    : Config<T[K]>;
};

// export const stylesBuilder = <
//   T extends Record<string, any> & Record<K, object>,
//   K extends string
// >(
//   variants: T,
//   origConfig: Config<T>,
//   custom?: DeepPartial<Config<T>>,
//   nested: K[] = []
// ): Record<'styles', BaseProps> & {
//   [P in K]: BaseProps;
// } => {
//   const config = merge(origConfig, custom);
//   const styles = fromEntries(
//     entries(config as BaseProps).filter(
//       ([key]) => !Object.keys(variants).includes(key)
//     )
//   ) as BaseProps;

//   if (nested.length !== 0) {
//     nested.forEach((key) => {
//       if (Object.keys(variants).includes(key)) {
//         throw new Error(`Missing key "${key}" in variants`);
//       }
//     });
//   }

//   const nestedStyles = nested.reduce(
//     (acc, key) => ({
//       ...acc,
//       ...stylesBuilder(variants[key], config[key], custom?.[key]).styles,
//     }),
//     {} as {
//       [P in K]: BaseProps;
//     }
//   );

//   const variantStyles = entries(variants).reduce((acc, [key, value]) => {
//     if (typeof value === 'string') {
//       return { ...acc, ...config[key][value] };
//     }
//     if (typeof value === 'boolean') {
//       return value ? { ...acc, ...config[key] } : acc;
//     }
//     return { ...acc, ...stylesBuilder(value, config[key]).styles };
//   }, {} as BaseProps);

//   return { styles: { ...styles, ...variantStyles } };
// };

type StylesBuilderProps<
  T extends object,
  TCustom extends DeepPartial<Config<T>>
> = {
  config: Config<T>;
  variant: T;
  custom?: TCustom;
};

export const stylesBuilder = <
  T extends object,
  TCustom extends DeepPartial<Config<T>>
>({
  config: origConfig,
  variant: variantConfig,
  custom,
}: StylesBuilderProps<T, TCustom>): { styles: BaseProps } => {
  const config = merge(origConfig, custom || {}) as Config<T>;
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
  config: Config<T>,
  variant: T
): BaseProps {
  const variantStyles = entries(variant).reduce((acc, [key, value]) => {
    if (typeof value === 'string') {
      return { ...acc, ...config[key][value] };
    }
    if (typeof value === 'boolean') {
      return value ? { ...acc, ...config[key] } : acc;
    }
    return {
      ...acc,
      ...stylesBuilder({
        config: config[key],
        variant: value,
      }).styles,
    };
  }, {} as BaseProps);
  return variantStyles;
}
function spltStyles<T extends object>(config: Config<T>) {
  const styles = Object.fromEntries(
    Object.entries(config).filter(([key]) =>
      (baseKeys as string[]).includes(key)
    )
  ) as BaseProps;
  const rest = Object.fromEntries(
    Object.entries(config).filter(
      ([key]) => !(baseKeys as string[]).includes(key)
    )
  ) as Exclude<Config<T>, BaseProps>;

  return {
    styles,
    rest,
  };
}
