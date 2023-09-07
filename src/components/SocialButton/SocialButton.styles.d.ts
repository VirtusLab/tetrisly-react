import { BaseProps } from '../../types/BaseProps';
export type SocialButtonAppearance = 'primary' | 'secondary';
export type SocialButtonConfig = BaseProps & {
    appearance?: Partial<Record<SocialButtonAppearance, BaseProps>>;
};
export declare const socialButtonConfig: SocialButtonConfig;
