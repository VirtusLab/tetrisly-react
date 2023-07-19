import { Theme } from '@xstyled/styled-components';
import { PropsWithChildren } from 'react';
import { TwoPartial } from '../utility-types/TwoPartial';
type ProviderProps = PropsWithChildren<{
    theme?: TwoPartial<Theme>;
    preflight?: boolean;
}>;
export declare const TetrislyProvider: ({ children, theme: overrideTheme, preflight, }: ProviderProps) => import("react/jsx-runtime").JSX.Element;
export {};
