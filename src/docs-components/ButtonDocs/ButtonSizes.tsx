import { LoadingButton } from './LoadingButton';

import { ButtonProps } from '@/components/Button';
import { tet } from '@/tetrisly';

const getButtonSizes = (variant: ButtonProps['variant']) => {
  if (variant === 'bare') {
    return ['medium', 'large'] as const;
  }
  return ['small', 'medium', 'large'] as const;
};

export const ButtonSizes = ({ variant, ...buttonProps }: ButtonProps) => (
  <tet.div
    display="flex"
    flexBasis="180px"
    flexGrow="1"
    flexShrink="0"
    alignItems="flex-start"
    justifyContent="center"
    flexDirection="column"
    gap="400"
    py="500"
  >
    {getButtonSizes(variant).map((size) => (
      <LoadingButton
        key={size}
        {...({ ...buttonProps, size, variant } as ButtonProps)}
      />
    ))}
  </tet.div>
);
