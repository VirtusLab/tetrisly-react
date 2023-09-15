export const variants = ['default', 'bare', 'ghost'] as const;

export type ButtonVariant = (typeof variants)[number];
