export const basicAppearances = [
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

export type BasicAppearance = (typeof basicAppearances)[number];
