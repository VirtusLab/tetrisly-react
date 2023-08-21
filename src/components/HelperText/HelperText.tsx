import { Icon } from '@virtuslab/tetrisly-icons';
import { merge } from 'lodash';

import { HelperTextProps } from './HelperText.props';
import { config as defaultConfig } from './HelperText.styles';
import { tet } from '../../tetrisly';

import { isKeyOf } from '@/services';
import { MarginProps } from '@/types/MarginProps';

export const HelperText = ({
  intent = 'none',
  beforeIcon = false,
  counter,
  text,
  custom,
  ...rest
}: HelperTextProps & MarginProps) => {
  const options = custom ? merge(defaultConfig, custom) : defaultConfig;
  const {
    intent: intentStyles,
    icon: iconStyles,
    iconContainer: iconContainerStyles,
    ...restStyles
  } = options;

  if (!isKeyOf(intentStyles, intent)) {
    throw new Error(`${intent} is not a valid intent`);
  }

  const styles = {
    ...restStyles,
    ...intentStyles[intent],
  };

  return (
    <tet.div {...styles} {...rest} data-testid="helper-text">
      {beforeIcon && (
        <tet.span {...iconContainerStyles}>
          <Icon {...iconStyles[intent]} data-testid="helper-text-icon" />
        </tet.span>
      )}
      {text}
      {!!counter && (
        <tet.span data-testid="helper-text-counter">{`${counter.current}/${counter.max}`}</tet.span>
      )}
    </tet.div>
  );
};
