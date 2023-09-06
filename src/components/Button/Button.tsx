import { Icon } from '@virtuslab/tetrisly-icons';
import { useMemo } from 'react';

import { ButtonProps } from './Button.props';
import { stylesBuilder } from './stylesBuilder/stylesBuilder';
import { ButtonAppearance } from './types/ButtonAppearance.type';
import { ButtonVariant } from './types/ButtonType.type';
import { tet } from '../../tetrisly';
import { Loader } from '../Loader';

import type { MarginProps } from '@/types';

export const Button = <
  TVariant extends ButtonVariant = 'default',
  TAppearance extends ButtonAppearance<TVariant> = ButtonAppearance<TVariant>,
>({
  label,
  variant,
  appearance,
  intent,
  state,
  size,
  custom,
  dropdownIndicator: dropdown,
  afterIcon,
  beforeIcon,
  ...rest
}: ButtonProps<TVariant, TAppearance> & MarginProps) => {
  if (dropdown && afterIcon) {
    throw new Error('Button cannot have both dropdown indicator and afterIcon');
  }

  const styles = useMemo(
    () => stylesBuilder({ variant, appearance, intent, size, custom }),
    [variant, appearance, intent, size, custom],
  );

  return (
    <tet.button
      data-testid="button"
      {...styles}
      disabled={['disabled', 'loading'].includes(state ?? '')}
      data-state={state}
      style={{ textUnderlineOffset: '3px', textDecorationThickness: '1px' }}
      {...rest}
    >
      {state === 'loading' && (
        <Loader
          appearance={appearance === 'inverted' ? 'white' : 'greyscale'}
          size="small"
          shape="circle"
        />
      )}
      {beforeIcon && state !== 'loading' && <Icon name={beforeIcon} />}
      {label}
      {dropdown && <Icon name="20-chevron-down" />}
      {afterIcon && <Icon name={afterIcon} />}
    </tet.button>
  );
};
