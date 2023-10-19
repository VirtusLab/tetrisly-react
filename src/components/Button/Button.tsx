import { Icon } from '@virtuslab/tetrisly-icons';
import { useMemo } from 'react';

import { ButtonProps } from './Button.props';
import { stylesBuilder } from './stylesBuilder';
import { tet } from '../../tetrisly';
import { Loader } from '../Loader';

import { warnInDevelopment } from '@/services';
import type { MarginProps } from '@/types';

export const Button: React.FC<ButtonProps & MarginProps> = ({
  variant = 'default',
  appearance = 'secondary',
  intent = 'none',
  size = 'medium',
  label,
  children = label,
  state,
  custom,
  hasDropdownIndicator: dropdown,
  afterIcon,
  beforeIcon,
  ...rest
}) => {
  const styles = useMemo(
    () =>
      stylesBuilder({
        variant,
        appearance,
        intent,
        size,
        hasDropdownIndicator: dropdown,
        hasBeforeIcon: !!beforeIcon,
        hasAfterIcon: !!afterIcon,
        custom,
      }),
    [
      variant,
      appearance,
      intent,
      size,
      dropdown,
      beforeIcon,
      afterIcon,
      custom,
    ],
  );

  if (dropdown && afterIcon) {
    warnInDevelopment(
      'Button cannot have both dropdown indicator and afterIcon',
    );
  }

  return (
    <tet.button
      data-testid="button"
      {...styles.container}
      disabled={['disabled', 'loading'].includes(state ?? '')}
      data-state={state}
      style={{ textUnderlineOffset: '3px', textDecorationThickness: '1px' }}
      {...rest}
    >
      {state === 'loading' && (
        <Loader appearance="greyscale" size="small" shape="circle" />
      )}
      {beforeIcon && state !== 'loading' && <Icon name={beforeIcon} />}
      {children}
      {dropdown && <Icon name="20-chevron-down" />}
      {afterIcon && !dropdown && <Icon name={afterIcon} />}
    </tet.button>
  );
};
