import { SelectProps } from './Select.props';
import { TextInput, TextInputProps } from '../TextInput';

import { MarginProps } from '@/types';

const DROPDOWN_INDICATOR_COMPONENT: TextInputProps['afterComponent'] = {
  type: 'IconButton',
  props: {
    icon: '20-chevron-down-small',
  },
};

export const Select: React.FC<SelectProps & MarginProps> = (props) => (
  <TextInput afterComponent={DROPDOWN_INDICATOR_COMPONENT} {...props} />
);
