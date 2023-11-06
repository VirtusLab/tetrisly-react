import { FC, ForwardRefExoticComponent, PropsWithChildren } from 'react';
import type { CheckboxGroupProps } from './CheckboxGroup.props';
import { type CheckboxProps } from '../Checkbox';
import type { MarginProps } from '../../types';
type Props = FC<PropsWithChildren<CheckboxGroupProps & MarginProps>> & {
    Item: ForwardRefExoticComponent<CheckboxProps & MarginProps>;
};
export declare const CheckboxGroup: Props;
export {};
