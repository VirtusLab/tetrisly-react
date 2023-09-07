import { ButtonHTMLAttributes } from 'react';
import { SocialButtonAppearance, SocialButtonConfig } from './SocialButton.styles';
export declare const platforms: readonly ["Apple", "Facebook", "Figma", "Github", "Google", "X"];
export type SocialButtonProps = {
    label: string;
    platform: (typeof platforms)[number];
    appearance?: SocialButtonAppearance;
    state?: 'disabled' | 'loading';
    custom?: SocialButtonConfig;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color' | 'disabled'>;
