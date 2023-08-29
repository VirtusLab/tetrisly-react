export type SocialButtonProps = {
  platform:
    | 'Apple'
    | 'Facebook'
    | 'Figma'
    | 'Github'
    | 'Google'
    | 'X (Twitter)';
  appearance?: 'primary' | 'secondary';
  state?: 'disabled' | 'selected' | 'loading';
};
