import { DeepPartial } from './DeepPartial';

export type WithCustom<T extends object, TConfig extends object> = {
  custom?: DeepPartial<TConfig>;
} & T;
