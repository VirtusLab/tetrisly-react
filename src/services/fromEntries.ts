export const fromEntries = <TKey extends PropertyKey, const TValue>(
  entries: [TKey, TValue][],
): Record<TKey, TValue> => Object.fromEntries(entries) as Record<TKey, TValue>;
