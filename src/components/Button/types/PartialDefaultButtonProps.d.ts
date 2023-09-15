type DefaultPrimarySecondary = {
    appearance?: 'primary' | 'secondary';
    intent?: 'none' | 'success' | 'destructive';
};
type DefaultInverted = {
    appearance?: 'inverted';
    intent?: 'none';
};
export type PartialDefaultButtonProps = {
    variant?: 'default';
    size?: 'small' | 'medium' | 'large';
} & (DefaultPrimarySecondary | DefaultInverted);
export {};
