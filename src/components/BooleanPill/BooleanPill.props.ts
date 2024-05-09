import { BooleanPillConfig } from './BooleanPill.styles';
import { AvatarAppearance } from '../Avatar/types';

export type BooleanPillProps = {
  text: string;
  state?: 'default' | 'disabled' | 'selected';
  isInverted?: boolean;
  custom?: BooleanPillConfig;
  avatar?:
    | { appearance?: 'image'; image: string }
    | { appearance: Exclude<AvatarAppearance, 'image'>; initials: string };
  onChange?: (state: boolean) => void;
};
