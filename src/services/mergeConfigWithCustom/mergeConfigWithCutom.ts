import { memoize, merge } from 'lodash';

type Params<T, K> = {
  defaultConfig: T;
  custom: K;
};

const memoizedMerge = memoize(
  merge,
  (...args) => JSON.stringify(args[0]) + JSON.stringify(args[1]),
);

export const mergeConfigWithCustom = <T, K>({
  defaultConfig,
  custom,
}: Params<T, K>): T => memoizedMerge(defaultConfig, custom);
