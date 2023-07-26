import { baseKeys } from './baseKeys';
import { ConfigWithNested } from './ConfigWithNested';

import { BaseProps } from '@/types/BaseProps';

export function spltStyles<T extends object, TNested extends readonly string[]>(
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
