export const badgeAppearances = [
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
  'outline',
] as const;

export type BadgeAppearance = (typeof badgeAppearances)[number];
