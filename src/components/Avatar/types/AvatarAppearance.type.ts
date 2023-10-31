export const avatarAppearanceColors = [
  'blue',
  'green',
  'grey',
  'red',
  'orange',
  'raspberry',
  'magenta',
  'purple',
  'grape',
  'violet',
  'cyan',
  'teal',
  'aquamarine',
  'emerald',
] as const;

export type AvatarAppearanceColors = (typeof avatarAppearanceColors)[number];

export type AvatarAppearance = 'image' | AvatarAppearanceColors;
