import type { FC } from 'react';

import { CardHeaderProps } from './CardHeader.props';

import { Avatar } from '@/components/Avatar';
import { Button } from '@/components/Button';
import { Icon } from '@/components/Icon';
import { tet } from '@/tetrisly';
import type { BaseProps } from '@/types';

export const CardHeader: FC<CardHeaderProps> = ({
  styles: rawStyles,
  ...props
}) => {
  const { beforeComponent, title, description, actions } = props;

  const styles = getStylesProps(rawStyles);

  return (
    <tet.div data-testid="card-header" {...styles.container}>
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
  } & { styles: BaseProps | undefined }
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

  if ('avatar' in beforeComponent) {
    if ('image' in beforeComponent.avatar)
      return (
        <tet.div data-testid="card-header-beforeComponent" {...styles}>
          <Avatar
            shape="rounded"
            size="medium"
            emphasis="low"
            img={{ src: beforeComponent.avatar.image, alt: 'avatar' }}
            appearance="image"
          />
        </tet.div>
      );
    return (
      <tet.div data-testid="card-header-beforeComponent" {...styles}>
        <Avatar
          shape="rounded"
          size="medium"
          emphasis="low"
          appearance={beforeComponent.avatar.appearance}
          initials={beforeComponent.avatar.initials}
        />
      </tet.div>
    );
  }
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

function getStylesProps(styles: CardHeaderProps['styles']) {
  const {
    title,
    description,
    actions,
    content,
    beforeComponent,
    ...container
  } = styles;

  return { title, description, actions, content, beforeComponent, container };
}
