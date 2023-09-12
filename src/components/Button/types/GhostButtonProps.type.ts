type GhostPrimary = {
  appearance?: 'primary';
  intent?: 'none' | 'success' | 'destructive';
};

type GhostSecondaryInvertedReverseInverted = {
  appearance?: 'secondary' | 'inverted' | 'reverseInverted';
  intent?: 'none';
};

export type GhostButtonProps = {
  variant?: 'ghost';
  size?: 'small' | 'medium' | 'large';
} & (GhostPrimary | GhostSecondaryInvertedReverseInverted);
