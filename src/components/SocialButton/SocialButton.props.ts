import {
  SocialButtonAppearance,
  SocialButtonConfig,
} from './SocialButton.styles';

import { DeepPartial } from '@/utility-types/DeepPartial';

export type SocialButtonProps = {
  platform:
    | 'Apple'
    | 'Facebook'
    | 'Figma'
    | 'Github'
    | 'Google'
    | 'X (Twitter)';
  appearance?: SocialButtonAppearance;
  state?: 'disabled' | 'selected' | 'loading';
  custom?: DeepPartial<SocialButtonConfig>;
};
