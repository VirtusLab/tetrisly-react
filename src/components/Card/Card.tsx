import type { CardComponent } from './Card.props';
import { cardConfig } from './Card.styles';
import { CardContent } from './CardContent/CardContent';
import { CardFooter } from './CardFooter';
import { CardHeader } from './CardHeader/CardHeader';

import { mergeConfigWithCustom } from '@/services';
import { tet } from '@/tetrisly';

export const Card: CardComponent = ({ custom, children, ...rest }) => {
  const styles = mergeConfigWithCustom({
    defaultConfig: cardConfig,
    custom,
  });
  return (
    <tet.div data-testid="card" {...styles} {...rest}>
      {children}
    </tet.div>
  );
};

Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;

Card.Header.displayName = 'Card.Header';
Card.Content.displayName = 'Card.Content';
Card.Footer.displayName = 'Card.Footer';
