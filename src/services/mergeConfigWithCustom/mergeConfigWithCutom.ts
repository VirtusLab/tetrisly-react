import { memoize, merge } from 'lodash';
import rfdc from 'rfdc';

const clone = rfdc();

type Params<T, K> = {
  defaultConfig: T;
  custom: K;
};

const memoizedMerge = memoize(
  merge,
  (...args) => JSON.stringify(args[0]) + JSON.stringify(args[1]),
);

const copyMergeMemoize = <T, K>({ defaultConfig, custom }: Params<T, K>): T => {
  const defaultConfigClone = clone(defaultConfig);

  return memoizedMerge(defaultConfigClone, custom);
};

export const mergeConfigWithCustom = <T, K>({
  defaultConfig,
  custom,
}: Params<T, K>): T =>
  custom ? copyMergeMemoize({ defaultConfig, custom }) : defaultConfig;
