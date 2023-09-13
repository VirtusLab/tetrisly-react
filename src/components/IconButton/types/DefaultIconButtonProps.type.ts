type DefaultPrimary = {
  appearance?: 'primary';
  intent?: 'none' | 'success' | 'negative';
};

type DefaultInverted = {
  appearance?: 'inverted';
  intent?: 'none';
};

export type DefaultIconButtonProps = {
  variant?: 'default';
  size?: 'small' | 'medium' | 'large';
} & (DefaultPrimary | DefaultInverted);
