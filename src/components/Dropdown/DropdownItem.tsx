import { tet } from '@/tetrisly';

export type DropdownItemProps = {
  label: string;
  action?: () => void;
  disabled?: boolean;
  beforeComponent?: React.ReactNode;
  open: boolean;
  closeDropdown: () => void;
};

export const DropdownItem = ({
  label,
  action,
  open,
  disabled,
  closeDropdown,
  beforeComponent,
}: DropdownItemProps) => (
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
      onClick={
        disabled
          ? undefined
          : () => {
              if (!action) return;
              action();
              closeDropdown();
            }
      }
    >
      {beforeComponent}
      {label}
    </tet.button>
  </tet.li>
);
