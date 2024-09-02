import { MarginProps } from '@xstyled/styled-components';
import { PropsWithChildren, type FC } from 'react';
import { ButtonGroupProps } from './ButtonGroup.props';
import { ButtonProps } from '../Button';
type Props = FC<PropsWithChildren<ButtonGroupProps & MarginProps>> & {
    Item: FC<ButtonProps & MarginProps>;
};
export declare const ButtonGroup: Props;
export {};
