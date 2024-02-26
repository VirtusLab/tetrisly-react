import type { FC } from 'react';

import type { CardHeaderProps } from './CardHeader.props';
import { cardHeaderConfig } from './CardHeader.styles';

import { Avatar } from '@/components/Avatar';
import { Button } from '@/components/Button';
import { Icon } from '@/components/Icon';
import { mergeConfigWithCustom } from '@/services';
import { tet } from '@/tetrisly';
import type { BaseProps } from '@/types';

export const CardHeader: FC<CardHeaderProps> = ({
  custom,
  beforeComponent,
  title,
  description,
  actions,
  ...rest
}) => {
  const styles = getStylesProps(custom);
  return (
    <tet.div data-testid="card-header" {...styles.container} {...rest}>
      <BeforeComponent
        styles={styles.beforeComponent}
        beforeComponent={beforeComponent}
      />
      <tet.div data-testid="card-header-content" {...styles.content}>
        <tet.div data-testid="card-header-title" {...styles.title}>
          {title}
        </tet.div>
        <Description styles={styles.description} description={description} />
      </tet.div>
      <Actions styles={styles.actions} actions={actions} />
    </tet.div>
  );
};

type SubComponent<T extends keyof CardHeaderProps> = FC<
  {
    [key in T]: CardHeaderProps[key];
  } & { styles: BaseProps }
>;

const BeforeComponent: SubComponent<'beforeComponent'> = ({
  styles,
  beforeComponent,
}) => {
  if (!beforeComponent) return null;

  warnIfIconAndAvatar(beforeComponent);

  if ('icon' in beforeComponent)
    return (
      <tet.div data-testid="card-header-beforeComponent" {...styles}>
        <Icon name={beforeComponent.icon.name} />
      </tet.div>
    );

  if ('avatar' in beforeComponent)
    return (
      <tet.div data-testid="card-header-beforeComponent" {...styles}>
        <Avatar {...beforeComponent.avatar} />
      </tet.div>
    );
  console.warn('No icon or avatar in beforeComponent.');
  return null;
};

function warnIfIconAndAvatar(
  beforeComponent: NonNullable<CardHeaderProps['beforeComponent']>,
) {
  if ('icon' in beforeComponent && 'avatar' in beforeComponent)
    console.warn(
      'Both icon and avatar props are present in CardHeader beforeComponent. Icon will be rendered.',
    );
}

const Description: SubComponent<'description'> = ({ styles, description }) => {
  if (!description) return null;
  return (
    <tet.div data-testid="card-header-description" {...styles}>
      {description}
    </tet.div>
  );
};

const Actions: SubComponent<'actions'> = ({ styles, actions }) => {
  if (!actions) return null;
  return (
    <tet.div data-testid="card-header-actions" {...styles}>
      {actions.map((action) => (
        <Button key={action.label} variant="bare" {...action} />
      ))}
    </tet.div>
  );
};

function getStylesProps(custom: CardHeaderProps['custom']) {
  const { innerElements, ...rest } = mergeConfigWithCustom({
    defaultConfig: cardHeaderConfig,
    custom,
  });
  return { ...innerElements, container: rest };
}
