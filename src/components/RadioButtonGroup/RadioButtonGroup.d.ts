import { type FC, type PropsWithChildren } from 'react';
import type { RadioButtonGroupProps, RadioButtonGroupItemProps } from './RadioButtonGroup.props';
import type { MarginProps } from '../../types';
type Props = FC<PropsWithChildren<RadioButtonGroupProps & MarginProps>> & {
    Item: FC<RadioButtonGroupItemProps>;
};
export declare const RadioButtonGroup: Props;
export {};
