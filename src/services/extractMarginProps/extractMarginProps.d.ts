/**
 * Function extracts all spacing props (ex. ''m', 'ml', 'mr' etc.), returns array  with space props and rest objects
 */
import { MarginBottomProps, MarginLeftProps, MarginProps, MarginRightProps, MarginTopProps, MarginXProps, MarginYProps } from '@xstyled/styled-components';
interface MarginsProps extends MarginProps, MarginLeftProps, MarginBottomProps, MarginTopProps, MarginRightProps, MarginXProps, MarginYProps {
}
type OmitMarginProps<T> = Omit<T, 'm' | 'margin' | 'mt' | 'marginTop' | 'mr' | 'marginRight' | 'mb' | 'marginBottom' | 'ml' | 'marginLeft' | 'mx' | 'my'>;
export declare const extractMarginProps: <T extends object = object>(props: T) => [MarginsProps, OmitMarginProps<T>];
export {};
