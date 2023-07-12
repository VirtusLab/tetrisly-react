import { ButtonProps } from './Button.props';
import { stylesBuilder } from './stylesBuilder/stylesBuilder';
import { ButtonAppearance } from './types/ButtonAppearance.type';
import { ButtonVariant } from './types/ButtonType.type';
import { tet } from '../../tetrisly/tetrisly';

export const Button = <
  TVariant extends ButtonVariant = 'default',
  TAppearance extends ButtonAppearance<TVariant> = ButtonAppearance<TVariant>
>({
  label,
  variant,
  appearance,
  intent,
  state,
  size,
  custom,
  ...rest
}: ButtonProps<TVariant, TAppearance>) => (
  <tet.button
    {...stylesBuilder({ variant, appearance, intent, size, custom })}
    disabled={state === 'disabled'}
    data-state={state}
    style={{ textUnderlineOffset: '3px', textDecorationThickness: '1px' }}
    {...rest}
  >
    {label}
  </tet.button>
);
