import { BaseKeys } from './baseKeys';

type OnlyOne<Keys extends PropertyKey, T> = {
  [key in Keys]: { [k in key]: T };
}[Keys];

export type Variant<T extends object> = {
  [K in Exclude<keyof T, BaseKeys>]: keyof T[K][keyof T[K]] extends BaseKeys
    ? keyof T[K]
    : T[K] extends object
    ? OnlyOne<keyof T[K], Variant<T[K][keyof T[K]]>>
    : never;
};
