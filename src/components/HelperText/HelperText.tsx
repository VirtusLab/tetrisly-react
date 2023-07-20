import { Icon } from '@virtuslab/tetrisly-icons';

import { HelperTextProps } from './HelperText.props';
import { stylesBuilder } from './stylesBuilder/stylesBuilder';
import { tet } from '../../tetrisly';

import { MarginProps } from '@/types/MarginProps';

export const HelperText = ({
  intent = 'none',
  beforeIcon,
  counter,
  text,
  ...rest
}: HelperTextProps & MarginProps) => (
  <tet.div {...stylesBuilder({ intent })} {...rest}>
    {!!beforeIcon && <Icon name={beforeIcon} />}
    {!!text && text}
    {!!counter && <tet.span>{`${counter.current}/${counter.max}`}</tet.span>}
  </tet.div>
);
