type DefaultPrimary = {
  appearance?: 'primary';
  intent?: 'none' | 'success' | 'destructive';
};

type DefaultInverted = {
  appearance?: 'inverted';
  intent?: 'none';
};

export type PartialDefaultIconButtonProps = {
  variant?: 'default';
  size?: 'small' | 'medium' | 'large';
} & (DefaultPrimary | DefaultInverted);
