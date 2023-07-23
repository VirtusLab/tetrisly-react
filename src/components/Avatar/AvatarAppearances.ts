export const avatarAppearances = [
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

export type AvatarAppearance = (typeof avatarAppearances)[number];
