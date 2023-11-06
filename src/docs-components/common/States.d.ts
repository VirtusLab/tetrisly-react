import { FlexBasisProps, GapProps, WidthProps } from '@xstyled/styled-components';
import { FC } from 'react';
export declare const States: FC<{
    states: string[] | readonly string[];
    gap?: GapProps['gap'];
    itemWidth?: WidthProps['w'];
    flexBasis?: FlexBasisProps['flexBasis'];
}>;
