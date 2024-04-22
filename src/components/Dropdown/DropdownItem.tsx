import { useContext } from 'react';

import { DropdownOpenContext } from './DropdownOpenContext';
import { Avatar } from '../Avatar';
import type { AvatarAppearance, AvatarEmphasis } from '../Avatar/types';
import { Icon } from '../Icon';

import { tet } from '@/tetrisly';
import type { IconName } from '@/utility-types/IconName';

export type DropdownItemProps = {
  label: string;
  action?: () => void;
  disabled?: boolean;
  beforeComponent?:
    | {
        type: 'avatar';
        props:
          | {
              appearance: Exclude<AvatarAppearance, 'image'>;
              emphasis?: AvatarEmphasis;
              initials: string;
            }
          | {
              img: string;
            };
      }
    | {
        type: 'icon';
        props: { name: IconName<20> };
      };
};

export const DropdownItem = ({
  label,
  action,
  disabled,
  beforeComponent,
}: DropdownItemProps) => {
  const open = useContext(DropdownOpenContext);
  return (
    <tet.li
      data-state={disabled ? 'disabled' : undefined}
      aria-disabled={disabled}
      opacity={{
        disabled: '$opacity-disabled',
      }}
      display="flex"
      px="$space-component-padding-small"
    >
      <tet.button
        type="button"
        display={open ? 'flex' : 'none'}
        h="$size-medium"
        px="$space-component-padding-small"
        alignItems="center"
        gap="$space-component-gap-small"
        flex="1 0 0"
        borderRadius="$border-radius-large"
        bg={{
          _: '$color-interaction-ghost-normal',
          hover: '$color-interaction-ghost-hover',
        }}
        onClick={(!disabled && action) || undefined}
      >
        <BeforeComponent configuration={beforeComponent} />
        {label}
      </tet.button>
    </tet.li>
  );
};

const BeforeComponent = ({
  configuration,
}: {
  configuration: DropdownItemProps['beforeComponent'];
}) => {
  if (!configuration) return null;
  const { type, props } = configuration;
  if (type === 'avatar') {
    if ('img' in props)
      return (
        <Avatar
          appearance="image"
          shape="rounded"
          size="xSmall"
          img={{ src: props.img }}
        />
      );
    return <Avatar shape="rounded" size="xSmall" {...props} />;
  }
  return (
    <tet.div
      display="flex"
      alignItems="center"
      justifyContent="center"
      w="$size-xSmall"
      h="$size-xSmall"
    >
      <Icon name={props.name} />
    </tet.div>
  );
};
