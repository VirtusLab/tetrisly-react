import { DeepPartial } from '../../../utility-types/DeepPartial';
import { VariantConfig } from '../Button.config';
import { ButtonAppearance } from '../types/ButtonAppearance.type';
import { ButtonIntent } from '../types/ButtonIntent.type';
import { ButtonSize } from '../types/ButtonSize.type';
import { ButtonVariant } from '../types/ButtonType.type';

export type StylesBuilderProps<
  TVariant extends ButtonVariant,
  TAppearance extends ButtonAppearance<TVariant>
> = {
  appearance?: TAppearance;
  variant?: TVariant;
  intent?: ButtonIntent<TVariant, TAppearance>;
  size?: ButtonSize<TVariant>;
  custom?: DeepPartial<Record<ButtonVariant, VariantConfig<ButtonVariant>>>;
};
