import { HeaderConfig, HeaderType } from './Header.styles';

import { ActionProp } from '@/types';

export type HeaderProps = {
  type?: HeaderType;
  counter?: number;
  bottomBar?: boolean;
  title: string;
  description?: string;
  custom?: HeaderConfig;
  action?: ActionProp;
};
