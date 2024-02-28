import type { FC } from 'react';

import type { CardFooterProps } from './CardFooter.props';

import { Button } from '@/components/Button';
import { tet } from '@/tetrisly';
import { BaseProps } from '@/types';

export const CardFooter: FC<CardFooterProps> = ({
  styles: rawStyles,
  actions,
  ...rest
}) => {
  const styles = getStylesProps(rawStyles);
  return (
    <tet.div data-testid="card-footer" {...styles.container} {...rest}>
      <Actions styles={styles.actions} actions={actions} />
    </tet.div>
  );
};

type CardFooterActionProps = {
  actions: CardFooterProps['actions'];
  styles: BaseProps | undefined;
};

const Actions: FC<CardFooterActionProps> = ({ actions, styles }) => (
  <tet.div data-testid="card-footer-actions" {...styles}>
    {actions.map((action) => (
      <Button key={action.label} size="small" variant="ghost" {...action} />
    ))}
  </tet.div>
);

function getStylesProps(styles: CardFooterProps['styles']) {
  const { actions, ...container } = styles;

  return { actions, container };
}
