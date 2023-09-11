import type { AvatarProps } from '../Avatar.props';
import type { BaseProps } from '../../../types/BaseProps';
type AvatarStylesBuilder = {
    container: BaseProps;
    image: BaseProps;
};
export declare const stylesBuilder: ({ custom, variant, }: {
    custom: AvatarProps['custom'];
    variant: Required<Pick<AvatarProps, 'appearance' | 'emphasis' | 'shape' | 'size'>>;
}) => AvatarStylesBuilder;
export {};
