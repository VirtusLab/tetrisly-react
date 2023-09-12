type DefaultPrimarySecondary = {
  appearance?: 'primary' | 'secondary';
  intent?: 'none' | 'success' | 'destructive';
};

type DefaultInverted = {
  appearance?: 'inverted';
  intent?: 'none';
};

export type DefaultButtonProps = {
  variant?: 'default';
  size?: 'small' | 'medium' | 'large';
} & (DefaultPrimarySecondary | DefaultInverted);
