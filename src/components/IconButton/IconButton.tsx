import { Icon } from '@virtuslab/tetrisly-icons';
import { MarginProps } from '@xstyled/styled-components';

import { IconButtonProps } from './IconButton.props';
import { IconButtonAppearance } from './IconButtonAppearance.type';
import { styleBuilder } from './styleBuilder';
import { ButtonVariant } from '../Button/types/ButtonType.type';

import { tet } from '@/tetrisly';

export const IconButton = <
  TVariant extends ButtonVariant,
  TAppearance extends IconButtonAppearance<TVariant>,
>({
  intent = 'none',
  variant,
  appearance,
  size = 'medium',
  icon,
  dropdownIndicator = false,
  state,
  custom = {},
  ...marginProps
}: IconButtonProps<TVariant, TAppearance> & MarginProps) => {
  const styles = styleBuilder({
    intent,
    variant: variant ?? 'default',
    appearance: appearance ?? 'primary',
    size,
    dropdownIndicator,
    custom,
  });
  return (
    <tet.button
      data-testid="button"
      {...styles}
      disabled={['disabled', 'loading'].includes(state ?? '')}
      data-state={state}
      style={{ textUnderlineOffset: '3px', textDecorationThickness: '1px' }}
      {...marginProps}
    >
      <Icon name={icon} />
      {dropdownIndicator && <Icon name="20-chevron-down" />}
    </tet.button>
  );
};
