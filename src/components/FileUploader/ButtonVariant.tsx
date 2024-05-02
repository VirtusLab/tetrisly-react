import { FC, MouseEvent } from 'react';

import { Button } from '@/components/Button';

export type ButtonVariantProps = {
  label?: string;
  onChooseFileClick?: (e?: MouseEvent) => void;
};

export const ButtonVariant: FC<ButtonVariantProps> = ({
  label,
  onChooseFileClick,
}) => (
  <Button label={label} appearance="secondary" onClick={onChooseFileClick} />
);
