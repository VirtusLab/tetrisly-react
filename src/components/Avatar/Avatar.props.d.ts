import { ImgHTMLAttributes } from 'react';
import { AvatarConfig } from './Avatar.styles';
import { AvatarShape } from './AvatarShape.type';
import { Appearance } from '../../types/Appearance';
import { Emphasis } from '../../types/Emphasis';
import { MarginProps } from '../../types/MarginProps';
import { Size } from '../../types/Size';
import { DeepPartial } from '../../utility-types/DeepPartial';
export type AvatarProps = ({
    img: Omit<ImgHTMLAttributes<HTMLImageElement>, 'color'>;
    appearance: 'image';
    emphasis?: 'low';
    initials?: never;
} | {
    appearance?: Appearance;
    emphasis?: Emphasis;
    initials: string;
}) & {
    shape?: AvatarShape;
    size?: Size;
    custom?: DeepPartial<AvatarConfig>;
} & MarginProps;
