import type { CardFooterConfig } from './CardFooter.styles';

import type { GhostButtonProps } from '@/components/Button/Button.props';

export type CardFooterProps = {
  custom?: CardFooterConfig;
  actions?: GhostButtonProps[];
};
