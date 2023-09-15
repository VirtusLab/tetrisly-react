type BarePrimary = {
  appearance?: 'primary';
  intent?: 'none' | 'success' | 'destructive';
};

type BareSecondaryInvertedReverseInverted = {
  appearance?: 'secondary' | 'inverted' | 'reverseInverted';
  intent?: 'none';
};

export type PartialBareButtonProps = {
  variant?: 'bare';
  size?: 'medium' | 'large';
} & (BarePrimary | BareSecondaryInvertedReverseInverted);
