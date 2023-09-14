import type { InlineBannerConfig } from './InlineBanner.styles';
import type { InlineBannerIntent } from './types/InlineBannerIntent.type';

import type { ActionProp } from '@/types';

export type InlineBannerProps = {
  title: string;
  description?: string;
  intent?: InlineBannerIntent;
  action?: ActionProp;
  onCloseClick?: (e: React.MouseEvent) => void;
  custom?: InlineBannerConfig;
};
