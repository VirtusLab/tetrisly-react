export const emphases = ['low', 'high'] as const;

export type Emphasis = (typeof emphases)[number];
