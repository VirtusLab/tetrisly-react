export const basicIntents = [
  'neutral',
  'informative',
  'positive',
  'warning',
  'negative',
] as const;

export type BasicIntent = (typeof basicIntents)[number];
