import { FC, PropsWithChildren } from 'react';
import type { CheckboxGroupProps, CheckboxGroupItemProps } from './CheckboxGroup.props';
import { MarginProps } from '../../types';
type Props = FC<PropsWithChildren<CheckboxGroupProps & MarginProps>> & {
    Item: FC<CheckboxGroupItemProps>;
};
export declare const CheckboxGroup: Props;
export {};
