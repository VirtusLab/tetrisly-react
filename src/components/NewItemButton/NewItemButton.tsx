import { Icon } from '@virtuslab/tetrisly-icons';
import { useMemo, type FC } from 'react';

import { NewItemButtonProps } from './NewItemButtons.props';
import { stylesBuilder } from './stylesBuilder';

import { tet } from '@/tetrisly';

export const NewItemButton: FC<NewItemButtonProps> = ({
  state = 'normal',
  text,
  custom,
  ...rest
}) => {
  const styles = useMemo(() => stylesBuilder(state, custom), [custom, state]);

  return (
    <tet.button
      {...styles.container}
      {...rest}
      data-testid="new-item-button"
      disabled={state === 'disabled'}
    >
      <Icon name="20-plus" />
      {!!text && <tet.span {...styles.text}>{text}</tet.span>}
    </tet.button>
  );
};
