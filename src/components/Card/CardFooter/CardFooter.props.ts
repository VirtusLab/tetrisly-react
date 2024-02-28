import type { CardFooterConfig } from '../Card.styles';

import type { GhostButtonProps } from '@/components/Button/Button.props';

export type CardFooterProps = {
  styles: CardFooterConfig;
  actions: GhostButtonProps[];
};
