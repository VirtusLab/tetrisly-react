import { FC, PropsWithChildren } from 'react';
import type { RadioButtonGroupProps, RadioButtonGroupItemProps } from './RadioButtonGroup.props';
import type { MarginProps } from '../../types';
type Props = FC<PropsWithChildren<RadioButtonGroupProps & MarginProps>> & {
    Item: React.FC<RadioButtonGroupItemProps>;
};
export declare const RadioButtonGroup: Props;
export {};
