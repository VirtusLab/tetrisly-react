import { SystemProps, Theme } from '@xstyled/styled-components';

import { ButtonAppearance } from './types/ButtonAppearance.type';
import { ButtonIntent } from './types/ButtonIntent.type';
import { ButtonSize } from './types/ButtonSize.type';
import { ButtonVariant } from './types/ButtonType.type';

type BaseProps = Omit<SystemProps<Theme>, 'appearance'>;

export type VariantConfig<TVariant extends ButtonVariant> = {
  appearance: {
    [Appearance in ButtonAppearance<TVariant>]: {
      intent: {
        [Intent in ButtonIntent<TVariant, Appearance>]: BaseProps;
      };
    } & BaseProps;
  };
  size: {
    [Size in ButtonSize<TVariant>]: BaseProps;
  };
} & BaseProps;
