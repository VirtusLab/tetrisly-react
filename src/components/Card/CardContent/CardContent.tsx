import { FC } from 'react';

import { CardContentProps } from './CardContent.props';
import { cardContentConfig } from './CardContent.styles';

import { mergeConfigWithCustom } from '@/services';
import { tet } from '@/tetrisly';

export const CardContent: FC<CardContentProps> = ({ children, custom }) => {
  const styles = mergeConfigWithCustom({
    defaultConfig: cardContentConfig,
    custom,
  });
  return <tet.div {...styles}>{children}</tet.div>;
};
