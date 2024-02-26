import type { FC } from 'react';

import type { CardFooterProps } from './CardFooter.props';
import { cardFooterConfig } from './CardFooter.styles';

import { Button } from '@/components/Button';
import { mergeConfigWithCustom } from '@/services';
import { tet } from '@/tetrisly';
import { BaseProps } from '@/types';

export const CardFooter: FC<CardFooterProps> = ({
  custom,
  actions,
  ...rest
}) => {
  const styles = getStylesProps(custom);
  return (
    <tet.div data-testid="card-footer" {...styles.container} {...rest}>
      <Actions styles={styles.actions} actions={actions} />
    </tet.div>
  );
};

type CardFooterActionProps = {
  actions: CardFooterProps['actions'];
  styles: BaseProps;
};

const Actions: FC<CardFooterActionProps> = ({ actions, styles }) => {
  if (!actions) return null;
  return (
    <tet.div data-testid="card-footer-actions" {...styles}>
      {actions.map((action) => (
        <Button key={action.label} size="small" variant="ghost" {...action} />
      ))}
    </tet.div>
  );
};

function getStylesProps(custom: CardFooterProps['custom']) {
  const { innerElements, ...rest } = mergeConfigWithCustom({
    defaultConfig: cardFooterConfig,
    custom,
  });
  return { ...innerElements, container: rest };
}
