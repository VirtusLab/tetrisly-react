import { Icon } from '@virtuslab/tetrisly-icons';
import { FC, useMemo } from 'react';

import { HelperTextProps } from './HelperText.props';
import { resolveIconName } from './HelperText.styles';
import { stylesBuilder } from './stylesBuilder';
import { tet } from '../../tetrisly';

import { MarginProps } from '@/types/MarginProps';

export const HelperText: FC<HelperTextProps & MarginProps> = ({
  intent = 'none',
  hasBeforeIcon = false,
  counter,
  text,
  custom,
  ...restProps
}) => {
  const styles = useMemo(() => stylesBuilder(intent, custom), [intent, custom]);
  const name = resolveIconName(intent);

  return (
    <tet.div {...styles.container} data-testid="helper-text" {...restProps}>
      {hasBeforeIcon && (
        <tet.span
          {...styles.iconContainer}
          data-testid="helper-text-iconContainer"
        >
          <Icon name={name} data-testid="helper-text-icon" />
        </tet.span>
      )}
      {text}
      {!!counter && (
        <tet.span data-testid="helper-text-counter">{`${counter.current}/${counter.max}`}</tet.span>
      )}
    </tet.div>
  );
};
