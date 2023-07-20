import { SystemProps } from '@xstyled/styled-components';
import { merge } from 'lodash';

import { fromEntries } from '@/services/fromEntries';
import { BaseProps } from '@/types/BaseProps';
import { DeepPartial } from '@/utility-types/DeepPartial';

const keys = <T extends object>(obj: T) => Object.keys(obj) as Array<keyof T>;
const entries = <T extends object>(obj: T) =>
  Object.entries(obj) as Array<[keyof T, T[keyof T]]>;

type Config<T extends object> = BaseProps & {
  [K in keyof T]: T[K] extends string | boolean
    ? { [P in T[K]]: SystemProps }
    : Config<T[K]>;
};

export const stylesBuilder = <T extends object>(
  variants: T,
  origConfig: Config<T>,
  custom?: DeepPartial<Config<T>>
): BaseProps => {
  const config = merge(origConfig, custom);
  const styles = fromEntries(
    entries(config).filter(([key, _]) => !keys(variants).includes(key))
  ) as BaseProps;
  // const variantStyles = fromEntries(
  //   entries(variants).map(([key, value]) => {
  //     if (typeof value === 'string') {
  //       return config[key][value];
  //     }
  //     if (typeof value === 'boolean') {
  //       return value ? config[key] : {};
  //     }
  //     return stylesBuilder(value, config[key]);
  //   })
  // );
  const variantStyles = entries(variants).reduce((acc, [key, value]) => {
    if (typeof value === 'string') {
      return { ...acc, ...config[key][value] };
    }
    if (typeof value === 'boolean') {
      return value ? { ...acc, ...config[key] } : acc;
    }
    return { ...acc, ...stylesBuilder(value, config[key]) };
  }, {} as BaseProps);

  return { ...styles, ...variantStyles };
};
