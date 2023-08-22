import { StylesBuilderProps } from './stylesBuilder.props';
import { ButtonAppearance } from '../types/ButtonAppearance.type';
import { ButtonIntent } from '../types/ButtonIntent.type';
import { ButtonSize } from '../types/ButtonSize.type';
import { ButtonVariant } from '../types/ButtonType.type';

export function applyDefaults<
  TVariant extends ButtonVariant,
  TAppearance extends ButtonAppearance<TVariant>,
>({
  appearance,
  intent,
  size,
  variant,
}: StylesBuilderProps<TVariant, TAppearance>): Required<
  Omit<StylesBuilderProps<TVariant, TAppearance>, 'custom'>
> {
  return {
    variant: (variant ?? 'default') as TVariant,
    appearance: (appearance ?? 'secondary') as TAppearance,
    intent: (intent ?? 'none') as ButtonIntent<TVariant, TAppearance>,
    size: (size ?? 'medium') as ButtonSize<TVariant>,
  };
}
