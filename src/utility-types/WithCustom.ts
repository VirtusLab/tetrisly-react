import { BaseKeys } from '@/types/BaseKeys';
import { BaseProps } from '@/types/BaseProps';

type PartialWithBaseProps<T extends object> = {
  [P in keyof T]?: T[P] extends object
    ? PartialWithBaseProps<T[P]> & BaseProps
    : T[P];
};

export type Custom<T extends object> = {
  [K in Exclude<keyof T, BaseKeys>]?: keyof T[K][keyof T[K]] extends BaseKeys
    ? T[K] extends object
      ? PartialWithBaseProps<T[K]>
      : never
    : T[K][keyof T[K]] extends object
    ? Custom<T[K][keyof T[K]]>
    : never;
} & BaseProps;

export type WithCustom<T extends object, TConfig extends object> = {
  custom?: Custom<TConfig>;
} & T;
