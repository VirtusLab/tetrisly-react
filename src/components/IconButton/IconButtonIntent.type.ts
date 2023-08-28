import { IconButtonAppearance } from './IconButtonAppearance.type';

export type IconButtonIntent<TAppearance extends IconButtonAppearance> =
  | 'none'
  | (TAppearance extends 'primary' ? 'success' | 'negative' : never);
