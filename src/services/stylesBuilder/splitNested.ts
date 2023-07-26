import { ConfigWithNested } from './ConfigWithNested';

export function splitNested<
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
