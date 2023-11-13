import type { FC } from 'react';

import type { SearchInputProps } from './SearchInput.props';
import { TextInput, type TextInputProps } from '../TextInput';

import type { MarginProps } from '@/types';

const SEARCH_ICON_COMPONENT: TextInputProps['beforeComponent'] = {
  type: 'Icon',
  props: {
    name: '20-search',
  },
};

export const SearchInput: FC<SearchInputProps & MarginProps> = ({
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
