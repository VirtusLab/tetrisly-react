import { SystemProps } from '@xstyled/styled-components';
import { Theme } from '../theme';
type TetrislySystemProps = SystemProps<Theme>;
/**
 * A utility type that allows you to pick all style properties from a TetrislySystemProps type except for a specified set of keys.
 * @template K - The union of keys to exclude from the resulting type, for instance 'appearance' | 'size' | 'background.
 * @template TetrislySystemProps - The type to pick properties from.
 * @returns A new type that includes all properties from `TetrislySystemProps` except for those specified in `K`.
 */
export type BaseProps<K extends keyof TetrislySystemProps = never> = Pick<TetrislySystemProps, Exclude<keyof TetrislySystemProps, K>>;
export {};
