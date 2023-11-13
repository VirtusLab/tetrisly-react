import { type FC, useMemo } from 'react';

import type { InlineSearchInputProps } from './InlineSearchInput.props';
import { defaultConfig } from './InlineSearchInput.styles';
import { SearchInput } from '../SearchInput';

import { mergeConfigWithCustom } from '@/services';
import type { MarginProps } from '@/types';

export const InlineSearchInput: FC<InlineSearchInputProps & MarginProps> = ({
  custom,
  ...restProps
}) => {
  const config = useMemo(
    () => mergeConfigWithCustom({ defaultConfig, custom }),
    [custom],
  );
  return <SearchInput size={8} {...restProps} custom={config} />;
};
