export const sizes = ['large', 'medium', 'small', 'xSmall', '2xSmall'] as const;

export type Size = (typeof sizes)[number];
