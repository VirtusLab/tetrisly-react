import { SearchInputProps } from './SearchInput.props';
import { TextInput, TextInputProps } from '../TextInput';

import { MarginProps } from '@/types';

const SEARCH_ICON_COMPONENT: TextInputProps['beforeComponent'] = {
  type: 'Icon',
  props: {
    name: '20-search',
  },
};

export const SearchInput: React.FC<SearchInputProps & MarginProps> = ({
  placeholder = 'Search...',
  hasClearButton = true,
  ...restProps
}) => (
  <TextInput
    placeholder={placeholder}
    type="search"
    hasClearButton={hasClearButton}
    beforeComponent={SEARCH_ICON_COMPONENT}
    {...restProps}
  />
);
