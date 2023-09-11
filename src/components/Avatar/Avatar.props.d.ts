import type { ImgHTMLAttributes } from 'react';
import type { AvatarConfig } from './Avatar.styles';
import type { AvatarAppearanceColors, AvatarEmphasis, AvatarShape, AvatarSize } from './types';
export type AvatarProps = ({
    img: Omit<ImgHTMLAttributes<HTMLImageElement>, 'color'>;
    appearance: 'image';
    emphasis?: 'low';
    initials?: never;
} | {
    img?: never;
    appearance?: AvatarAppearanceColors;
    emphasis?: AvatarEmphasis;
    initials: string;
}) & {
    shape?: AvatarShape;
    size?: AvatarSize;
    custom?: AvatarConfig;
};
