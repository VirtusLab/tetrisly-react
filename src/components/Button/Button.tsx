import { Icon } from '@virtuslab/tetrisly-icons';

import { ButtonProps } from './Button.props';
import { stylesBuilder } from './stylesBuilder/stylesBuilder';
import { ButtonAppearance } from './types/ButtonAppearance.type';
import { ButtonVariant } from './types/ButtonType.type';
import { tet } from '../../tetrisly/tetrisly';
import { Loader } from '../Loader/Loader';

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
  dropdown,
  afterIcon,
  beforeIcon,
  ...rest
}: ButtonProps<TVariant, TAppearance>) => {
  if (dropdown && afterIcon) {
    throw new Error('Button cannot have both dropdown and afterIcon');
  }
  return (
    <tet.button
      {...stylesBuilder({ variant, appearance, intent, size, custom })}
      disabled={['disabled', 'loading'].includes(state ?? '')}
      data-state={state}
      style={{ textUnderlineOffset: '3px', textDecorationThickness: '1px' }}
      {...rest}
    >
      {/* TODO(Loader): update Loader when implemented */}
      {state === 'loading' && <Loader mr="component-gap-large" />}
      {beforeIcon && state !== 'loading' && <Icon name={beforeIcon} />}
      {label}
      {dropdown && <Icon name="20-chevron-down" />}
      {afterIcon && <Icon name={afterIcon} />}
    </tet.button>
  );
};
