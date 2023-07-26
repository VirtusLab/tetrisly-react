export type ConfigWithNested<
  TNested extends readonly string[],
  TConfig,
> = Record<TNested[number], TConfig>;
