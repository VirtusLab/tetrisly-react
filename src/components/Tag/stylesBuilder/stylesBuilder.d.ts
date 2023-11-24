import type { TagProps } from '../Tag.props';
import type { BaseProps } from '../../../types/BaseProps';
type TagStylesBuilder = {
    container: BaseProps;
    label: BaseProps;
    avatar: BaseProps<'appearance'>;
    closeButton: BaseProps<'appearance'>;
};
export declare const stylesBuilder: (custom: TagProps['custom'], hasOnClick?: boolean) => TagStylesBuilder;
export {};