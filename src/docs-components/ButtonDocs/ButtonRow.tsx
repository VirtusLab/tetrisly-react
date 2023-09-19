import { ButtonSizes } from './ButtonSizes';

import { ButtonProps } from '@/components/Button';
import { tet } from '@/tetrisly';

type ButtonRowProps = Pick<ButtonProps, 'variant' | 'appearance' | 'intent'>;

export const ButtonRow = ({ variant, appearance, intent }: ButtonRowProps) => {
  const baseProps = { variant, appearance, intent } as ButtonProps;
  return (
    <tet.div display="flex" gap="300" overflowX="scroll">
      <ButtonSizes {...baseProps} label="Button label" />
      <ButtonSizes
        {...baseProps}
        label="Button label"
        beforeIcon="20-placeholder"
      />
      <ButtonSizes
        {...({
          ...baseProps,
          label: 'Button label',
          afterIcon: '20-placeholder',
        } as ButtonProps)}
      />
      <ButtonSizes
        {...({
          ...baseProps,
          label: 'Button label',
          beforeIcon: '20-placeholder',
          afterIcon: '20-placeholder',
        } as ButtonProps)}
      />
      <ButtonSizes
        {...({
          ...baseProps,
          label: 'Button label',
          hasDropdownIndicator: true,
        } as ButtonProps)}
      />
      <ButtonSizes
        {...({
          ...baseProps,
          label: 'Button label',
          beforeIcon: '20-placeholder',
          hasDropdownIndicator: true,
        } as ButtonProps)}
      />
    </tet.div>
  );
};
