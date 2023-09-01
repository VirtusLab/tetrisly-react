import { merge } from 'lodash';
import { FC, useMemo } from 'react';

import { defaultConfig } from './InlineSearchInput.styles';
import { SearchInput, SearchInputProps } from '../SearchInput';

export const InlineSearchInput: FC<SearchInputProps> = ({
  custom,
  ...restProps
}) => {
  const config = useMemo(() => merge(defaultConfig, custom), [custom]);
  return <SearchInput size={8} {...restProps} custom={config} />;
};
