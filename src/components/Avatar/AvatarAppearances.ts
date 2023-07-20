export const avatarAppearances = ['blue', 'green', 'grey'] as const;

export type AvatarAppearance = (typeof avatarAppearances)[number];
