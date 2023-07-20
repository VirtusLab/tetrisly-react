import { Icon } from '@virtuslab/tetrisly-icons';
import { merge } from 'lodash';

import { HelperTextProps } from './HelperText.props';
import { config as defaultConfig } from './HelperText.styles';
import { tet } from '../../tetrisly';

import { isKeyOf } from '@/services';
import { MarginProps } from '@/types/MarginProps';

export const HelperText = ({
  intent = 'none',
  beforeIcon,
  counter,
  text,
  custom = {},
  ...rest
}: HelperTextProps & MarginProps) => {
  const { intent: intentStyles, ...restStyles } = merge(defaultConfig, custom);

  if (!isKeyOf(intentStyles, intent)) {
    throw new Error(`${intent} is not a valid intent`);
  }

  const styles = {
    ...restStyles,
    ...intentStyles[intent],
  };

  return (
    <tet.div {...styles} {...rest} data-testid="helper-text">
      {!!beforeIcon && (
        <Icon name={beforeIcon} data-testid="helper-text-icon" />
      )}
      {!!text && text}
      {!!counter && (
        <tet.span data-testid="helper-text-counter">{`${counter.current}/${counter.max}`}</tet.span>
      )}
    </tet.div>
  );
};
