import { merge } from 'lodash';
import { FC, useMemo } from 'react';

import { InlineSearchInputProps } from './InlineSearchInput.props';
import { defaultConfig } from './InlineSearchInput.styles';
import { SearchInput, SearchInputProps } from '../SearchInput';

import { MarginProps } from '@/types';

export const InlineSearchInput: FC<InlineSearchInputProps & MarginProps> = ({
  custom,
  ...restProps
}) => {
  const config = useMemo(() => merge(defaultConfig, custom), [custom]);
  return <SearchInput size={8} {...restProps} custom={config} />;
};
