import { FC } from 'react';

import type { CardProps } from './Card.props';
import { cardConfig } from './Card.styles';
import { CardFooter } from './CardFooter/CardFooter';
import { CardHeader } from './CardHeader/CardHeader';

import { mergeConfigWithCustom } from '@/services';
import { tet } from '@/tetrisly';

export const Card: FC<CardProps> = ({
  custom,
  children,
  header,
  footer,
  ...rest
}) => {
  const styles = getStylesProps(custom);
  return (
    <tet.div data-testid="card" {...styles.container} {...rest}>
      {header && <CardHeader styles={styles.header} {...header} />}
      <tet.div data-testid="card-content" {...styles.content}>
        {children}
      </tet.div>
      {footer && <CardFooter styles={styles.footer} {...footer} />}
    </tet.div>
  );
};

function getStylesProps(custom: CardProps['custom']) {
  const { innerElements, ...container } = mergeConfigWithCustom({
    defaultConfig: cardConfig,
    custom,
  });
  return { ...innerElements, container };
}
