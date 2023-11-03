import type { FlexBasisProps, GapProps, WidthProps } from '@xstyled/styled-components';
import type { FC } from 'react';
type StatesProps = {
    states: string[] | readonly string[];
    gap?: GapProps['gap'];
    itemWidth?: WidthProps['w'];
    flexBasis?: FlexBasisProps['flexBasis'];
};
export declare const State: FC<Pick<StatesProps, 'itemWidth' | 'flexBasis'> & {
    state: string;
}>;
export declare const States: FC<StatesProps>;
export {};
