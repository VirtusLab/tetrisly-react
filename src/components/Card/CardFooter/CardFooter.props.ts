import type { CardFooterConfig } from '../Card.styles';

import type { GhostButtonProps } from '@/components/Button/Button.props';

export type CardFooterProps = {
  styles: CardFooterConfig;
  // TODO: in the future omit the size from the button props
  actions: GhostButtonProps[];
};
